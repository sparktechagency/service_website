"use client"
import React from 'react';
import { MapPin, Bookmark, BookmarkCheck } from 'lucide-react';
import Image from 'next/image';
import CandidateButton from '../ui/CandidateButton';
import { useRouter } from 'next/navigation';
import { TCandidate } from '@/data/candidate.data';
import { baseUrl } from '@/redux/features/api/apiSlice';
import { ErrorToast } from '@/helper/ValidationHelper';

interface CandidateCardProps {
  candidate: TCandidate;
  viewMode: 'list' | 'grid';
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate, viewMode }) => {
  const router = useRouter();
  const profile_img = candidate ? (candidate?.profile_image === null ? "/images/profile_placeholder.png" : baseUrl + candidate?.profile_image) : "/images/profile_placeholder.png";
  

  const handleViewDetails = () => {
    if(candidate.profile_private){
      ErrorToast("This Profile is Private");
    }
    else{
      router.push(`/find-candidates/details/${candidate?._id}`)
    }
  }

  
  if (viewMode === 'list') {
    return (
      <div
        className={`
        p-4 rounded-lg transition-all duration-300 border
        hover:border-blue-300 hover:bg-blue-50 border-gray-200 bg-gray-50
        flex items-center gap-4
      `}
      >
        <div className="flex-shrink-0">
          <Image
            src={profile_img}
            alt={"candidate_img"}
            width={600}
            height={600}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/images/profile_placeholder.png";
            }}
            className="w-16 h-16 rounded-lg object-cover"
          />
        </div>

        <div className="flex-grow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-gray-900">{candidate?.name}</h3>
              <p className="text-sm text-gray-500">{"nanny.title"}</p>
              <div className="flex items-center text-xs text-gray-500 mt-1">
                <MapPin size={12} className="mr-1" />
                <span>{candidate?.address}</span>
                <span className="mx-2">•</span>
                <span>{3} Years experience</span>
              </div>
            </div>

            <button
              // onClick={() => onToggleSave(candidate?._id)}
              className="text-gray-400 hover:text-blue-500 transition-colors"
              // aria-label={nanny.isSaved ? "Remove from saved" : "Save profile"}
            >
              {/* {nanny.isSaved ? 
                <BookmarkCheck className="h-5 w-5 text-blue-500" /> : 
                <Bookmark className="h-5 w-5" />
              } */}
               <BookmarkCheck className="h-5 w-5 text-blue-500" />
            </button>
          </div>
        </div>

        <CandidateButton
          variant="outline"
          size="sm"
          onClick={handleViewDetails}
          className={`hover:bg-yellow-500 text-gray-900 cursor-pointer`}
        >
          View Profile
        </CandidateButton>
      </div>
    );
  }
  
  return (
    <div
      className="
      p-4 rounded-lg transition-all duration-300 border h-full flex flex-col
    hover:border-blue-300 hover:bg-blue-50 border-gray-200 bg-gray-50"
    >
      <div className="relative">
        <Image
          src={profile_img}
          alt={"candidate_img"}
          width={600}
          height={600}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/images/profile_placeholder.png";
          }}
          className="w-full h-48 rounded-lg object-cover mb-3"
        />
        <button
          className="absolute top-2 right-2 p-1 rounded-full bg-white/80 text-gray-600 hover:text-blue-500 transition-colors"
          // aria-label={nanny.isSaved ? "Remove from saved" : "Save profile"}
        >
          {/* {nanny.isSaved ? 
            <BookmarkCheck className="h-5 w-5 text-blue-500" /> : 
            <Bookmark className="h-5 w-5" />
          } */}
        </button>
      </div>

      <div className="flex-grow">
        <h3 className="font-medium text-gray-900">{candidate?.name}</h3>
        {/* <p className="text-sm text-gray-500">{nanny.title}</p> */}
        <div className="flex items-center text-xs text-gray-500 mt-1 mb-4">
          <MapPin size={12} className="mr-1" />
          <span>{candidate?.address}</span>
          <span className="mx-2">•</span>
          {/* <span>{nanny.experience} Years experience</span> */}
        </div>
      </div>

      <CandidateButton
        variant="outline"
        size="sm"
        onClick={handleViewDetails}
        className={`w-full mt-2 hover:bg-yellow-500 text-gray-900 cursor-pointer`}
      >
        View Profile
      </CandidateButton>
    </div>
  );
};

export default CandidateCard;