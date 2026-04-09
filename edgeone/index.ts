import app from './app';
import { type EdgeOneEnv } from './types';

// EdgeOne Edge Function 入口
export const handler = async (request: Request, env: EdgeOneEnv, context: any): Promise<Response> => {
  return app.fetch(request, env, context);
};

// 默认导出（兼容不同导入方式）
export default { handler };
