
export type TApplication = {
  _id: string;
  userId: {
    _id: string;
    authId: string;
    name: string;
    profile_image: string;
    job_title: string[];
    job_seeking: string[];
    email: string;
    availability: string[];
    phone_number: string;
    address: string;
    skill: string[];
    alert_job_type: string[];
    favorite: string[];
    profile_private: boolean;
    status: string;
    work_experience: {
      job_title: string;
      company_name: string;
      location: string;
      start_date: string;
      end_date: string;
      currently_work: boolean;
      details: string;
      _id: string;
    }[];
    profile_access: {
      eId: string;
      access: boolean;
      _id: string;
    }[];
    createdAt: string;
    updatedAt: string;
    __v: number;
    locations: {
      type: string;
      coordinates: [number, number];
      _id: string;
    };
    details: string;
    education: string;
    experience: string;
    resume: string;
  };
  jobId: string;
  resume: string;
  createdAt: string;
  updatedAt: string;
};
