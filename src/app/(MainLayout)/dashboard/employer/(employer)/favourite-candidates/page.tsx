"use client";
import React, { useState } from "react";
import { ViewMode } from "@/types/candidate.type";
import CandidateList from "@/components/FindCandidates/CandidateList";
import Pagination from "@/components/ui/Pagination";
import ViewControls from "@/components/ui/ViewControls";
import { useGetFavouriteCandidatesQuery } from "@/redux/features/candidate/candidateApi";
import FindCandidateLoading from "@/components/loader/FindCandidateLoading";
import CandidateNotFoundCard from "@/components/card/CandidateNotFoundCard";
import ServerErrorCard from "@/components/card/ServerErrorCard";

const FavouriteCandidatePage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(6);
  const [viewMode, setViewMode] = useState<ViewMode>("list");

  const { data, isLoading, isError } = useGetFavouriteCandidatesQuery([
    { name: "page", value: currentPage },
    { name: "limit", value: pageSize },
  ]);

  const candidates = data?.data?.users || [];
  const meta = data?.data?.meta || {};

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex-1 overflow-auto p-3 sm:p-4 md:p-6">
      <h1 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 md:mb-6">
        Favourite Candidates <span className="text-gray-700 font-normal"></span>
      </h1>
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
          {!isLoading && isError ? (
            <ServerErrorCard />
          ) : (
            <>
              {candidates?.length > 0 ? (
                <>
                  <CandidateList candidates={candidates} viewMode={viewMode} />
                  {meta?.total > 0 && (
                    <Pagination
                      currentPage={currentPage}
                      totalPages={meta?.totalPages}
                      onPageChange={handlePageChange}
                    />
                  )}
                </>
              ) : (
                <CandidateNotFoundCard />
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default FavouriteCandidatePage;
