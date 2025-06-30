import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { TEmployer } from '@/types/employer.type';

interface ContactSectionProps {
  employer: TEmployer;
}

const ContactSection: React.FC<ContactSectionProps> = ({ employer }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6 transition-all duration-300 hover:shadow-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Contact Information
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-start gap-3 group">
          <div className="p-3 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
            <Mail className="text-blue-600" size={20} />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Email</p>
            <a 
              href={`mailto:${employer?.email}`} 
              className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
            >
              {employer?.email}
            </a>
          </div>
        </div>
        
        <div className="flex items-start gap-3 group">
          <div className="p-3 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
            <Phone className="text-blue-600" size={20} />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Phone</p>
            <a 
              href={`tel:${employer.phone}`} 
              className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
            >
              {employer.phone}
            </a>
          </div>
        </div>
        
        <div className="flex items-start gap-3 group">
          <div className="p-3 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
            <MapPin className="text-blue-600" size={20} />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Address</p>
            <address className="text-gray-800 not-italic">
              {employer.address}
            </address>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;