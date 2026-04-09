import { MiddlewareHandler } from 'hono';

// CORS 中间件
export const corsMiddleware: MiddlewareHandler = async (c, next) => {
  // 设置 CORS 响应头
  c.header('Access-Control-Allow-Origin', '*');
  c.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
  c.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  c.header('Access-Control-Max-Age', '86400');

  // 处理预检请求
  if (c.req.method === 'OPTIONS') {
    return new Response(null, { status: 204 });
  }

  await next();
};
