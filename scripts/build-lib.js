const { execSync } = require('child_process')
const fs = require('fs-extra')
const path = require('path')
const babel = require('@babel/core')

const components = [
  'index',
  'pro-form',
  'dialog-form',
  'pro-table',
  'editable-pro-table'
]

// 清空 lib 目录
fs.removeSync('lib')

components.forEach(name => {
  console.log(`📦 Building ${name}...`)
  
  const entry = name === 'index' ? 'src/index.js' : `packages/${name}/index.js`
  const destDir = `lib/${name}`
  
  // 执行打包命令
  execSync(
    `cross-env BUILD_TARGET=lib vue-cli-service build --target lib --name index ${entry} --dest ${destDir}`,
    { stdio: 'inherit' }
  )
  
  // 处理文件
  const files = fs.readdirSync(destDir)
  
  files.forEach(file => {
    const filePath = path.join(destDir, file)
    
    // 处理 index.common.js
    if (file === 'index.common.js') {
      // 重命名 index.common.js -> index.js
      fs.renameSync(filePath, path.join(destDir, 'index.js'))
      console.log(`  ✅ Renamed: ${file} -> index.js`)
    }
    
    // 处理 index.common.js.map
    else if (file === 'index.common.js.map') {
      // 重命名 index.common.js.map -> index.js.map
      fs.renameSync(filePath, path.join(destDir, 'index.js.map'))
      console.log(`  ✅ Renamed: ${file} -> index.js.map`)
    }
    
    // 处理 index.umd.js -> umd.js
    else if (file === 'index.umd.js') {
      fs.renameSync(filePath, path.join(destDir, 'umd.js'))
      console.log(`  ✅ Renamed: ${file} -> umd.js`)
    }
    
    // 处理 index.umd.min.js -> umd.min.js
    else if (file === 'index.umd.min.js') {
      fs.renameSync(filePath, path.join(destDir, 'umd.min.js'))
      console.log(`  ✅ Renamed: ${file} -> umd.min.js`)
    }
    
    // 处理 index.umd.js.map -> umd.js.map
    else if (file === 'index.umd.js.map') {
      fs.renameSync(filePath, path.join(destDir, 'umd.js.map'))
      console.log(`  ✅ Renamed: ${file} -> umd.js.map`)
    }
    
    // 处理 index.umd.min.js.map -> umd.min.js.map
    else if (file === 'index.umd.min.js.map') {
      fs.renameSync(filePath, path.join(destDir, 'umd.min.js.map'))
      console.log(`  ✅ Renamed: ${file} -> umd.min.js.map`)
    }
    
    // 处理 index.css
    else if (file === 'index.css') {
      // 重命名 index.css -> style.css
      fs.renameSync(filePath, path.join(destDir, 'style.css'))
      console.log(`  ✅ Renamed: ${file} -> style.css`)
    }
    
    // 处理 index.css.map
    else if (file === 'index.css.map') {
      // 重命名 index.css.map -> style.css.map
      fs.renameSync(filePath, path.join(destDir, 'style.css.map'))
      console.log(`  ✅ Renamed: ${file} -> style.css.map`)
    }
  })
  
  // 删除可能遗留的目录
  const cssDir = path.join(destDir, 'css')
  if (fs.existsSync(cssDir)) {
    fs.removeSync(cssDir)
    console.log(`  🗑️  Removed: css/ directory`)
  }
})

// 整理主入口文件到根目录
console.log('\n📦 Organizing root files...')

if (fs.existsSync('lib/index')) {
  // 把 lib/index 下的内容移到 lib 根目录
  const indexFiles = fs.readdirSync('lib/index')
  indexFiles.forEach(file => {
    const srcPath = path.join('lib/index', file)
    const destPath = path.join('lib', file)
    fs.moveSync(srcPath, destPath, { overwrite: true })
  })
  
  // 删除空的 index 目录
  fs.removeSync('lib/index')
}

// 语言包构建
console.log('\n🌐 Building locale files...');

const localeSrcPath = path.resolve(process.cwd(), 'src/locale/lang');
const localeDestPath = path.resolve(process.cwd(), 'lib/umd/locale');  // 输出到 umd 目录
const localeCommonPath = path.resolve(process.cwd(), 'lib/locale/lang'); // 也输出到 commonjs 目录

// 创建目录
fs.ensureDirSync(localeDestPath);
fs.ensureDirSync(localeCommonPath);

// 读取所有语言文件
const localeFiles = fs.readdirSync(localeSrcPath)
  .filter(file => file.endsWith('.js'));

localeFiles.forEach(file => {
  const name = path.basename(file, '.js');
  const srcFile = path.join(localeSrcPath, file);
  
  console.log(`  📝 Processing ${file}...`);
  
  // 读取源码
  const code = fs.readFileSync(srcFile, 'utf-8');
  
  // 1. 生成 CommonJS 版本（用于 Node.js / Webpack）
  const cjsResult = babel.transformSync(code, {
    presets: [['@babel/preset-env', { modules: 'commonjs' }]],
    filename: file
  });
  
  fs.writeFileSync(
    path.join(localeCommonPath, file),
    cjsResult.code
  )
  
  // 2. 生成 UMD 版本（用于浏览器）
  const umdResult = babel.transformSync(code, {
    plugins: [
      'add-module-exports',
      ['@babel/plugin-transform-modules-umd', { 
        exactGlobals: true,
        globals: {
          index: `ELEMENT_PRO.lang.${name}`
        }
      }]
    ],
    moduleId: `element-pro/locale/${name}`,
    filename: file
  })
  
  // 添加全局变量
  let umdCode = umdResult.code
  umdCode = umdCode.replace(
    'global.',
    `global.ELEMENT_PRO = global.ELEMENT_PRO || {};\n  global.ELEMENT_PRO.lang = `
  )
  
  fs.writeFileSync(
    path.join(localeDestPath, file),
    umdCode
  );
  
  console.log(`    ✅ Generated: lib/umd/locale/${file}`)
  console.log(`    ✅ Generated: lib/locale/lang/${file}`)
});

console.log('\n🔧 Building locale/index.js...');

const srcPath = path.resolve(process.cwd(), 'src/locale/index.js');
const destPath = path.resolve(process.cwd(), 'lib/locale/index.js');

// 确保目标目录存在
fs.ensureDirSync(path.dirname(destPath));

// 读取源码
const code = fs.readFileSync(srcPath, 'utf-8');
console.log(`  📝 Processing index.js...`);

// 最简配置：只转换语法，不引入任何 runtime
const cjsResult = babel.transformSync(code, {
  // 完全忽略项目中的 babel.config.js
  configFile: false,
  
  // 只用最简单的配置
  presets: [
    ['@babel/preset-env', { 
      modules: 'commonjs'
    }]
  ],
  // 不添加任何插件
  plugins: [],
  
  filename: 'index.js'
});

fs.writeFileSync(destPath, cjsResult.code);
console.log(`    ✅ Generated: lib/locale/index.js`);

console.log('\n✨ locale/index.js build completed!');

// 显示最终目录结构
console.log('\n📁 Final directory structure:')
console.log('lib/')

function printDir(dir, prefix = '') {
  const files = fs.readdirSync(dir).sort()
  files.forEach((file, index) => {
    const filePath = path.join(dir, file)
    const isLast = index === files.length - 1
    const stats = fs.statSync(filePath)
    
    if (stats.isDirectory()) {
      console.log(`${prefix}${isLast ? '└── ' : '├── '}${file}/`)
      printDir(filePath, `${prefix}${isLast ? '    ' : '│   '}`)
    } else {
      console.log(`${prefix}${isLast ? '└── ' : '├── '}${file}`)
    }
  })
}

printDir('lib')

console.log('\n✅ 构建完成！')

