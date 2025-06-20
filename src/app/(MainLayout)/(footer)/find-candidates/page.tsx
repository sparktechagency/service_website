"use client";
import React, { useState, useEffect } from 'react';
import { ViewMode } from '@/types/candidate.type';
import CandidateList from '@/components/FindCandidates/CandidateList';
import Pagination from '@/components/ui/Pagination';
import ViewControls from '@/components/ui/ViewControls';
import CandidateSearchForm from '@/components/FindCandidates/CandidateSearchForm';
import { useSearchCandidatesQuery } from '@/redux/features/candidate/candidateApi';
import FindCandidateLoading from '@/components/loader/FindCandidateLoading';
import CandidateNotFoundCard from '@/components/card/CandidateNotFoundCard';
import ServerErrorCard from '@/components/card/ServerErrorCard';

const FindCandidatePage = () =>{
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [radius, setRadius] = useState<number>(5);
  const [ currentPage, setCurrentPage ] = useState<number>(1);
  const [ pageSize, setPageSize ] = useState<number>(5);
  const [viewMode, setViewMode] = useState<ViewMode>('list');

   //debounced handle
  useEffect(() => {
    // eslint-disable-next-line prefer-const
    let timeoutId;
    clearTimeout(timeoutId); //clear timeout after onChange
    timeoutId = setTimeout(() => {
      setSearchTerm(searchQuery);
    }, 600);
  }, [searchQuery]);

   const { data, isLoading, isError } = useSearchCandidatesQuery([
    { name: "searchTrams", value: searchTerm },
    { name: "page", value: currentPage },
    { name: "limit", value: pageSize }
  ]);



  const candidates = data?.data?.result || [];
  const meta = data?.data?.meta || {};

  

  
  
  
  // Calculate total pages
  const totalPages = 20;
  
  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  

  // if(isLoading===false){
  //   return <FindCandidateLoading/>
  // }


  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Find The Perfect candidates
        </h1>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-84">
            <CandidateSearchForm
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              radius={radius}
              setRadius={setRadius}
            />
          </div>

          {/* Main content with nanny listings */}
          <div className="flex-1">
            <ViewControls
              viewMode={viewMode}
              setViewMode={setViewMode}
              pageSize={pageSize}
              setPageSize={setPageSize}
            />

            {isLoading ? (
              <>
                <FindCandidateLoading />
              </>
            ) : (
              <>
                {
                  !isLoading && isError ? (
                    <ServerErrorCard/>
                  ): (
                    <>
                      {candidates?.length > 0 ? (
                  <>
                    <CandidateList
                      candidates={candidates}
                      viewMode={viewMode}
                    />

                    {totalPages > 1 && (
                      <Pagination
                        currentPage={currentPage}
                        totalPages={meta?.totalPages}
                        onPageChange={handlePageChange}
                      />
                    )}
                  </>
                ) : (
                  <CandidateNotFoundCard/>
                )}
                    </>
                  )
                }
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default FindCandidatePage;