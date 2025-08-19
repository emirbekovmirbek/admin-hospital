/// <reference types="vite/client" />
declare module '*.svg?react' {
  const content: React.FC<React.SVGProps<SVGElement>>;
  export default content;
}
type TypeMethod = 'update' | 'delete' | 'view' | 'create';

interface CommonRes {
  status: string;
  message: string;
}
interface ApiResponse<T extends object = object> extends CommonRes, T {}
