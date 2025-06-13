"use client"
import React from 'react';
import { mockProfileData } from '@/types/profile.type';
import ContactInfo from '@/components/candidates/ContactInfo';
import Experience from '@/components/candidates/Experience';
import Skills from '@/components/candidates/Skills';
import Header from '@/components/candidates/Header';
import AboutSection from '@/components/candidate/AboutSection';

const CandidateDetailsPage = ()=> {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        <div className="space-y-6">
          {/* Header Section */}
          <Header profileData={mockProfileData} />
          
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              <AboutSection/>
              <Experience />
              {/* <SocialMedia profileData={mockProfileData} /> */}
            </div>
            
            {/* Right Column */}
            <div className="space-y-6">
              <Skills profileData={mockProfileData} />
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateDetailsPage;