// scripts/copy-to-dist.js
const fs = require('fs-extra');
const path = require('path');

async function copyToDist() {
  // 1. 确保 examples 的 dist 存在
  const examplesDist = path.join(__dirname, '../dist');
  if (!await fs.pathExists(examplesDist)) {
    console.error('❌ examples/dist 不存在，请先构建 examples');
    process.exit(1);
  }
  
  console.log('✅ 找到 examples/dist，包含：');
  const examplesFiles = await fs.readdir(examplesDist);
  console.log('   ', examplesFiles.join(', '));
  
  // 2. 复制 docs 到 examples 的 dist/docs
  const docsDist = path.join(__dirname, '../docs/.vuepress/dist');
  if (await fs.pathExists(docsDist)) {
    const targetDocs = path.join(examplesDist, 'docs');
    await fs.copy(docsDist, targetDocs);
    console.log('✅ 文档已复制到 dist/docs/');
    
    // 列出 docs 内容
    const docsFiles = await fs.readdir(targetDocs);
    console.log('   dist/docs/ 包含：', docsFiles.join(', '));
  } else {
    console.error('❌ docs/.vuepress/dist 不存在，请先构建 docs');
    process.exit(1);
  }
  
  console.log('\n📦 最终 dist 结构：');
  console.log('dist/');
  console.log('├── index.html（来自 examples，保持不变）');
  console.log('├── css/');
  console.log('├── js/');
  console.log('├── pro-form/');
  console.log('├── pro-table/');
  console.log('└── docs/（来自 docs/.vuepress/dist）');
  console.log('    ├── index.html');
  console.log('    └── guide/');
}

copyToDist().catch(console.error);