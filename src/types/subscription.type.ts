

export type ISubscription = {
  _id: string;
  name: string;
  duration: number;
  validation: string;
  price: number;
  conditions: string[];
  notice: string;
};
