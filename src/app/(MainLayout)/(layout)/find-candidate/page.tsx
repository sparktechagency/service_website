import React, { useState, useMemo } from 'react';
import Header from './components/layout/Header';
import FilterSidebar from './components/layout/FilterSidebar';
import NannyList from './components/nannies/NannyList';
import Pagination from './components/ui/Pagination';
import ViewControls from './components/ui/ViewControls';
import { nannies as nannyData } from './data/nannies';
import { EducationLevel, ExperienceRange, Nanny, ViewMode } from '@/types/candidate.type';

const FindCandidatePage = () =>{
  // Filters
  const [locationRadius, setLocationRadius] = useState<number>(25);
  const [selectedExperience, setSelectedExperience] = useState<ExperienceRange | null>('3-4');
  const [selectedEducation, setSelectedEducation] = useState<EducationLevel>('all');
  
  // View controls
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  
  // Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  
  // Nannies data
  const [nannies, setNannies] = useState<Nanny[]>(nannyData);
  
  // Filter nannies based on selected filters
  const filteredNannies = useMemo(() => {
    return nannies.filter(nanny => {
      // Filter by experience
      if (selectedExperience) {
        const [min, max] = selectedExperience.includes('-') 
          ? selectedExperience.split('-').map(Number) 
          : [parseInt(selectedExperience), 100];
          
        if (!(nanny.experience >= min && (max ? nanny.experience <= max : true))) {
          return false;
        }
      }
      
      return true;
    });
  }, [nannies, selectedExperience]);
  
  // Paginate nannies
  const paginatedNannies = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredNannies.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredNannies, currentPage, itemsPerPage]);
  
  // Calculate total pages
  const totalPages = Math.ceil(filteredNannies.length / itemsPerPage);
  
  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Toggle save/bookmark
  const handleToggleSave = (id: number) => {
    setNannies(prevNannies => 
      prevNannies.map(nanny => 
        nanny.id === id ? { ...nanny, isSaved: !nanny.isSaved } : nanny
      )
    );
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Find Your Perfect Nanny</h1>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar with filters */}
          <div className="w-full md:w-64">
            <FilterSidebar 
              locationRadius={locationRadius}
              setLocationRadius={setLocationRadius}
              selectedExperience={selectedExperience}
              setSelectedExperience={setSelectedExperience}
              selectedEducation={selectedEducation}
              setSelectedEducation={setSelectedEducation}
            />
          </div>
          
          {/* Main content with nanny listings */}
          <div className="flex-1">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-gray-700">
                <span className="font-medium">{filteredNannies.length}</span> nannies found
              </p>
            </div>
            
            <ViewControls 
              viewMode={viewMode}
              setViewMode={setViewMode}
              itemsPerPage={itemsPerPage}
              setItemsPerPage={setItemsPerPage}
            />
            
            <NannyList 
              nannies={paginatedNannies} 
              viewMode={viewMode}
              onToggleSave={handleToggleSave}
            />
            
            {totalPages > 1 && (
              <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </div>
      </main>
      
      <footer className="bg-white border-t border-gray-200 py-6 mt-12">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} NannyFinder. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default FindCandidatePage;