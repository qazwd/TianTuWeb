const express = require('express');
const app = express();
const path = require('path');

// 静态文件服务
app.use(express.static(path.join(__dirname, 'dist')));

// 处理所有路由
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// 启动服务器
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
