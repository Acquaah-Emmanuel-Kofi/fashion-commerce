export interface ICommonResponse {
    status: number;
    message: string;
}

export interface ApiResponse<T> {
  status: number;
  message: string;
  data: T; 
  total?: string; 
}