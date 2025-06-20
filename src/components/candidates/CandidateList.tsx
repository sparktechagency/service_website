"use client"
import React from 'react';
import { ViewMode } from '@/types/candidate.type';
import CandidateCard from './CandidateCard';
import { TCandidate } from '@/data/candidate.data';

interface CandidateListProps {
  candidates: TCandidate[];
  viewMode: ViewMode;
}

const CandidateList: React.FC<CandidateListProps> = ({ candidates, viewMode, onToggleSave }) => {
  if (viewMode === 'list') {
    return (
      <div className="space-y-4">
        {candidates?.map((candidate, index:number) => (
          <CandidateCard 
            key={index} 
            candidate={candidate} 
            viewMode={viewMode}
          />
        ))}
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
       {candidates?.map((candidate, index:number) => (
        <CandidateCard 
          key={index} 
          candidate={candidate} 
          viewMode={viewMode}
        />
      ))}
    </div>
  );
};

export default CandidateList;