const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const localePath = path.resolve(__dirname, '../../src/locale/lang');
const outputPath = path.resolve(__dirname, '../../lib/umd/locale');

if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true });
}

const files = fs.readdirSync(localePath).filter(f => /\.js$/.test(f));

files.forEach(file => {
  const name = path.basename(file, '.js');
  const input = path.join(localePath, file);
  const output = path.join(outputPath, file);
  
  // 使用 Babel 转换为 UMD
  execSync(`npx babel ${input} --plugins @babel/plugin-transform-modules-umd --out-file ${output}`, { stdio: 'inherit' });
  
  // 修改输出内容
  let code = fs.readFileSync(output, 'utf-8');
  
  // 将全局变量挂载到你的命名空间下
  code = code.replace(
      /define\(/,
      `define("element-ui-pro-components/locale/${name}", `
    )
    .replace('global.', 'global.ELEMENT_UI_PRO_COMPONENTS.lang = global.ELEMENT_UI_PRO_COMPONENTS.lang || {}; \n    global.ELEMENT_UI_PRO_COMPONENTS.lang.');
  
  fs.writeFileSync(output, code);
  
  console.log(`✅ Generate: ${file}`);
});