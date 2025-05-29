export interface IEmployer {
  name: string;
  email: string;
  phone: string;
  picture: string;
  address: string;
  company: {
    name: string;
    logo: string;
  };
  position: string;
}