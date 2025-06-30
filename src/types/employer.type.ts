export type TEmployer = {
  _id: string;
  authId: string;
  name: string;
  email: string;
  profile_image: string;
  phone_number: string;
  isPhoneNumberVerified: boolean;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  years_of_establishment: string | null;
  details: string | null;
  address: string | null;
  duration_time: string;
  subscription_status: "Active" | "Inactive" | string;

  company?: {
    _id: string;
    company_logo: string;
    name: string;
    employer_position: string;
    locations: string;
    details: string;
    website_link: string | null;
  };

  socialMedia?: {
    _id: string;
    website: string;
    linkedin: string;
    instagram: string;
    facebook: string;
  };

  locations?: {
    _id: string;
    type: "Point";
    coordinates: [number, number]; // [longitude, latitude]
  };
};
osition: string;
}