
import { FaDribbble, FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaSlack, FaFigma, FaMicrosoft } from 'react-icons/fa';
import JobCard from './JobCard';

const jobs = [
  {
    company: 'Reddit',
    location: 'United Kingdom',
    jobType: 'Part Time',
    salary: '$30K-$35K',
    icon: <FaDribbble />,
    featured: true,
  },
  {
    company: 'Figma',
    location: 'Canada',
    jobType: 'Full Time',
    salary: '$50K-$70K',
    icon: <FaFigma />,
    featured: true,
  },
  {
    company: 'Dribbble',
    location: 'California',
    jobType: 'Full Time',
    salary: '$50K-$80K/month',
    icon: <FaDribbble />,
    featured: true,
  },
  {
    company: 'Dribbble',
    location: 'United States',
    jobType: 'Temporary',
    salary: '$35K-$40K',
    icon: <FaDribbble />,
  },
  {
    company: 'Freepik',
    location: 'China',
    jobType: 'Full Time',
    salary: '$10K-$15K',
    icon: <FaDribbble />,
    featured: true,
  },
  {
    company: 'Twitter',
    location: 'Canada',
    jobType: 'Internship',
    salary: '$50K-$60K',
    icon: <FaTwitter />,
  },
  {
    company: 'Microsoft',
    location: 'Australia',
    jobType: 'Full Time',
    salary: '$40K-$50K',
    icon: <FaMicrosoft />,
  },
  {
    company: 'Upwork',
    location: 'France',
    jobType: 'Full Time',
    salary: '$35K-$40K',
    icon: <FaMicrosoft />,
  },
  {
    company: 'Facebook',
    location: 'United Kingdom',
    jobType: 'Part Time',
    salary: '$15K-$20K',
    icon: <FaFacebookF />,
  },
  {
    company: 'Instagram',
    location: 'Australia',
    jobType: 'Contract Base',
    salary: '$50K-$80K',
    icon: <FaInstagram />,
  },
  {
    company: 'Youtube',
    location: 'Germany',
    jobType: 'Full Time',
    salary: '$20K-$25K',
    icon: <FaYoutube />,
  },
  {
    company: 'Slack',
    location: 'Germany',
    jobType: 'Remote',
    salary: '$50K-$90K',
    icon: <FaSlack />,
  },
];

const JobListings = () => {
  return (
    <section className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Job Listings</h2>

        {/* Job Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <JobCard job={job} key={index}/>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-6">
          <button className="px-4 py-2 border rounded-l-lg hover:bg-gray-200">
            &lt;
          </button>
          <button className="px-4 py-2 border hover:bg-gray-200">01</button>
          <button className="px-4 py-2 border hover:bg-gray-200">02</button>
          <button className="px-4 py-2 border hover:bg-gray-200">03</button>
          <button className="px-4 py-2 border hover:bg-gray-200">04</button>
          <button className="px-4 py-2 border rounded-r-lg hover:bg-gray-200">
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobListings;
