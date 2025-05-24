"use client"
import React from 'react';
import Header from './components/Header';
import CareerObjective from './components/CareerObjective';
import Skills from './components/Skills';
import Experience from './components/Experience';
import PersonalInfo from './components/PersonalInfo';
import EducationExperience from './components/EducationExperience';
import ContactInfo from './components/ContactInfo';
import SocialMedia from './components/SocialMedia';
import ResumeDownload from './components/ResumeDownload';
import { mockProfileData } from '@/types/profile.type';

const CandidateDetailsPage = ()=> {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto p-4 md:p-6">
        <div className="space-y-6">
          {/* Header Section */}
          <Header profileData={mockProfileData} />
          
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              <CareerObjective profileData={mockProfileData} />
              <Skills profileData={mockProfileData} />
              <Experience profileData={mockProfileData} />
              <SocialMedia profileData={mockProfileData} />
            </div>
            
            {/* Right Column */}
            <div className="space-y-6">
              <PersonalInfo profileData={mockProfileData} />
              <EducationExperience profileData={mockProfileData} />
              <ResumeDownload profileData={mockProfileData} />
              <ContactInfo profileData={mockProfileData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateDetailsPage;