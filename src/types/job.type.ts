/* eslint-disable @typescript-eslint/no-explicit-any */

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

export type TJob = {
  id: number;
  company:string;
  logo: string;
  logoColor: string;
  featured: boolean;
  location: string;
  title: string;
  salary: string;
  type: string;
  category: string;
  bookmarked: boolean;
  daysRemaining: number;
  logoText: string;
};


// export type ISubscription = {
//   tier: string;
//   price: number;
//   description: string;
//   features: string[];
//   recommended?: boolean;
// };

export type TEmployerJob = {
  _id: string;
  authId: string;
  userId: string;
  title: string;
  category: {
    _id: string;
    category: string;
    image: string;
    __v: number;
  };
  experience: string;
  types: string;
  education: string;
  skill: string[];
  salary: number;
  rate: string;
  vacancies: number;
  application_dateline: string; // ISO string
  locations: {
    type: string;
    coordinates: [number, number];
    _id: string;
  };
  descriptions: string;
  applications: any[]; // If you know the structure, replace 'any'
  favorite: any[]; // If you know the structure, replace 'any'
  status: string;
  job_pattern: string;
  address: string;
  createdAt: string; // ISO string
  updatedAt: string; // ISO string
};


export type IFindJob = {
  _id: string;
  userId: {
    _id: string;
    name: string;
    profile_image: string | null;
  };
  title: string;
  category: {
    _id: string;
    category: string;
    image: string;
    createdAt: string; // ISO string
    updatedAt: string; // ISO string
    __v: number;
  };
  salary: number;
  rate: string;
  vacancies: number;
  experience: string; // e.g., "4_6_years"
  types: string;      // e.g., "fixedterm_contract"
  education: string;  // e.g., "apprenticeship"
  descriptions: string;
  application_dateline: string; // ISO string
  skill: string[];
  job_pattern: string;
  locations: {
    type: string; // likely "Point"
    coordinates: [number, number]; // [longitude, latitude]
    _id: string;
  };
  address: string;
  createdAt: string; // ISO string
  isFavorite: boolean;
};


