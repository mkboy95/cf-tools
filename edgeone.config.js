/**
 * EdgeOne Pages 配置文件
 * 
 * EdgeOne Pages 是腾讯云提供的边缘静态网站托管和 Edge Functions 服务
 * 类似于 Cloudflare Pages，可以免费部署前端应用和边缘函数
 * 
 * 文档: https://edgeone.ai/document
 */

module.exports = {
  // 构建配置
  build: {
    // 构建命令
    command: 'npm run build',
    // 构建输出目录
    outputDir: 'dist',
    // 开发框架（用于本地开发）
    framework: 'vite'
  },

  // Edge Functions 配置
  edgeFunctions: {
    // Edge Function 入口文件
    // 相对于项目根目录
    root: 'edgeone',
    
    // 路由规则
    // 将 API 路由指向 Edge Function
    routes: [
      {
        pattern: '/api/*',
        function: 'index'
      }
    ]
  },

  // 路由规则（静态资源优先，API 路由由 Edge Function 处理）
  routes: [
    {
      // API 路由由 Edge Function 处理
      src: '/api/.*',
      function: 'index'
    },
    {
      // 静态资源
      src: '/(.*\\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot))',
      headers: {
        'Cache-Control': 'public, max-age=31536000'
      }
    },
    {
      // SPA 路由回退
      src: '/.*',
      dest: '/index.html'
    }
  ],

  // 环境变量（在 EdgeOne 控制台中设置）
  // 需要在 EdgeOne 控制台创建 EdgeKV 命名空间：
  // - ANALYTICS: 用于存储访问统计数据
  // - P2P_KV: 用于 P2P 文件传输的临时数据
  env: {
    // 这些变量需要在 EdgeOne 控制台中配置
    // ANALYTICS: EdgeKV namespace
    // P2P_KV: EdgeKV namespace
  }
};
