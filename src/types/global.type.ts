

export interface ApiError {
  status: number;
  data?: {
    message?: string;
  };
}


export type IAuthUser = {
  id: string;
  iat: number;
  email: string;
  role: "USER" | "EMPLOYER";
};
  