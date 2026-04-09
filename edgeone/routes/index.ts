import { Hono } from 'hono';
import { type EdgeOneEnv } from '../types';

const index = new Hono<{ Bindings: EdgeOneEnv }>();

// 健康检查
index.get('/api/health', (c) => {
  return c.json({ 
    status: 'ok', 
    platform: 'edgeone',
    timestamp: new Date().toISOString()
  });
});

export default index;
