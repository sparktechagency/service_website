"use client";

import AboutSection from "./AboutSection";
import ContactInfo from "./ContactInfo";
import Experience from "./WorkExperience";
import Header from "./Header";
import Skills from "./Skills";

const CandidateDetail = () => {
  return (
    <> 
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        <div className="space-y-6">
          <Header />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              <AboutSection/>
              <Experience />
            </div>
            
            {/* Right Column */}
            <div className="space-y-6">
              <Skills />
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  
    </>
  )
}

export default CandidateDetail