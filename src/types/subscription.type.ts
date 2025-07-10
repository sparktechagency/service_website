

export type ISubscription = {
  _id: string;
  name: string;
  duration: number;
  validation: string;
  price: number;
  conditions: string[];
  notice: string;
};


export type ISubscriptionStatus = {
  _id: string;
  authId: string;
  name: string;
  email: string;
  subscription_status: string;
  plan_id: string;
  subscription: boolean;
};