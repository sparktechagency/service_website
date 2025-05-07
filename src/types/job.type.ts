
export interface IJob {
  title: string;
  company: string;
  logo?: string;
  logoBackground: string;
  location: string;
  type: string;
  salary: string;
  timeRemaining?: string;
  status: "active" | "expired" | "expiring";
}