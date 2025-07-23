"use client";
import React, { useEffect, useState } from "react";
import { MapPin, Bookmark, BookmarkCheck, Lock } from "lucide-react";
import Image from "next/image";
import CandidateButton from "../ui/CandidateButton";
import { useRouter } from "next/navigation";
import { TCandidate } from "@/data/candidate.data";
import { baseUrl } from "@/redux/features/api/apiSlice";
import {
  useAddRemoveFavouriteCandidateMutation,
  useSendAccessRequestMutation,
} from "@/redux/features/candidate/candidateApi";
import getExperience from "@/utils/getExperience";
import { useAppSelector } from "@/redux/hooks/hooks";
import { ErrorToast } from "@/helper/ValidationHelper";

interface CandidateCardProps {
  candidate: TCandidate;
  viewMode: "list" | "grid";
}

const CandidateCard: React.FC<CandidateCardProps> = ({
  candidate,
  viewMode,
}) => {
  const router = useRouter();
  const profile_img = candidate
    ? candidate?.profile_image === null
      ? "/images/profile_placeholder.png"
      : baseUrl + candidate?.profile_image
    : "/images/profile_placeholder.png";
  const [addRemoveFavouriteCandidate] =
    useAddRemoveFavouriteCandidateMutation();
  const [sendAccessRequest, { isLoading }] = useSendAccessRequestMutation();
  const ButtonText = candidate?.profile_private
    ? "Send Request"
    : "View Profile";
  const { subscription_status } = useAppSelector((state) => state.subscription);

  const [isFavourite, setIsFavourite] = useState(false);

  // Update isFavourite when favouriteJobs are loaded
  useEffect(() => {
    setIsFavourite(candidate?.isFavorite);
  }, [candidate]);

  const handleViewDetails = () => {
    // if (subscription_status?.subscription_status === "None") {
    //   ErrorToast("You have no subscription");
    // } else {
    if (candidate.profile_private) {
      sendAccessRequest(candidate?._id);
    } else {
      router.push(`/find-candidates/details/${candidate?._id}`);
    }
    // }
  };

  const toggleFavourite = (id: string) => {
    setIsFavourite((prev) => !prev);
    addRemoveFavouriteCandidate(id);
  };

  if (viewMode === "list") {
    return (
      <div
        className={`
        p-4 rounded-lg transition-all duration-300 border
        hover:border-blue-300 hover:bg-blue-50 border-gray-200 bg-gray-50
        flex items-center gap-4
      `}
      >
        <div className="flex-shrink-0 relative">
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
          {candidate?.profile_private && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg">
              <Lock size={16} className="text-white" />
            </div>
          )}
        </div>

        <div className="flex-grow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-gray-900">
                {candidate?.profile_private
                  ? "Private Account"
                  : candidate?.name}
              </h3>
              <p className="text-sm text-gray-500">
                {candidate?.job_title?.length > 0 && candidate?.job_title[0]}
              </p>
              <div className="flex items-center text-xs text-gray-500 mt-1">
                <MapPin size={12} className="mr-1" />
                <span>{candidate?.address}</span>
                <span className="mx-2">•</span>
                <span>Experience: {getExperience(candidate?.experience)}</span>
              </div>
            </div>

            <button
              onClick={() => toggleFavourite(candidate?._id)}
              className="text-gray-400 hover:text-blue-500 transition-colors cursor-pointer"
              // aria-label={nanny.isSaved ? "Remove from saved" : "Save profile"}
            >
              {isFavourite ? (
                <BookmarkCheck className="h-5 w-5 text-blue-500" />
              ) : (
                <Bookmark className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        <CandidateButton
          variant="outline"
          size="sm"
          onClick={handleViewDetails}
          className={`hover:bg-yellow-500 text-gray-900 cursor-pointer`}
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : ButtonText}
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
        {candidate?.profile_private && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg">
            <Lock size={16} className="text-white" />
          </div>
        )}
        <button
          onClick={() => toggleFavourite(candidate?._id)}
          className="absolute top-2 right-2 cursor-pointer p-1 rounded-full bg-white/80 text-gray-600 hover:text-blue-500 transition-colors"
          // aria-label={nanny.isSaved ? "Remove from saved" : "Save profile"}
        >
          {candidate?.isFavorite ? (
            <BookmarkCheck className="h-5 w-5 text-blue-500" />
          ) : (
            <Bookmark className="h-5 w-5" />
          )}
        </button>
      </div>

      <div className="flex-grow">
        <h3 className="font-medium text-gray-900">
          {" "}
          {candidate?.profile_private ? "Private Account" : candidate?.name}
        </h3>
        <p className="text-sm text-gray-500">
          {candidate?.job_title?.length > 0 && candidate?.job_title[0]}
        </p>
        <div className="flex items-center text-xs text-gray-500 mt-1 mb-4">
          <MapPin size={12} className="mr-1" />
          <span>{candidate?.address}</span>
          <span className="mx-2">•</span>
          <span>Experience: {getExperience(candidate?.experience)}</span>
        </div>
      </div>

      <CandidateButton
        variant="outline"
        size="sm"
        onClick={handleViewDetails}
        className={`w-full mt-2 hover:bg-yellow-500 text-gray-900 cursor-pointer`}
        disabled={isLoading}
      >
        {isLoading ? "Sending..." : ButtonText}
      </CandidateButton>
    </div>
  );
};

export default CandidateCard;
