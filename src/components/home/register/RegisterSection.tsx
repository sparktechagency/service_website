"use client"
import { useRouter } from 'next/navigation';
import { FaArrowRight } from 'react-icons/fa';

const RegisterSection = () => {
    const router = useRouter()
  const options = [
    {
      title: 'Become a Candidate',
      description:
        'Cras in massa pellentesque, mollis ligula non, luctus dui. Morbi sed efficitur dolor. Pelque augue risus, aliqu.',
      bg: 'bg-gray-200',
      text: 'text-gray-900',
      buttonBg: 'bg-white',
      buttonText: 'text-blue-900',
    },
    {
      title: 'Become a Employer',
      description:
        'Cras in massa pellentesque, mollis ligula non, luctus dui. Morbi sed efficitur dolor. Pelque augue risus, aliqu.',
      bg: 'bg-primary',
      text: 'text-white',
      buttonBg: 'bg-white',
      buttonText: 'text-blue-900',
    },
  ];

  return (
    <section className="w-full py-10 px-4 bg-white my-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px:2 sm:px-4">
        {options.map((opt, idx) => (
          <div
            key={idx}
            className={`rounded-xl p-8 ${opt.bg} ${opt.text} flex flex-col justify-between`}
          >
            <div>
              <h2 className="text-[22px] sm:text-2xl font-semibold mb-4">{opt.title}</h2>
              <p className="text-sm">{opt.description}</p>
            </div>
            <div className="mt-6">
              <button
                onClick={() => router.push('/register')}
                className={`flex items-center cursor-pointer space-x-2 px-4 py-2 rounded-md font-semibold ${opt.buttonBg} ${opt.buttonText} shadow-sm hover:shadow-md transition`}
              >
                <span>Register Now</span>
                <FaArrowRight className="text-sm" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RegisterSection;
