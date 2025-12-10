"use client";
import React, { useEffect, useState } from "react";
import { MapPin, Bookmark, BookmarkCheck, Lock } from "lucide-react";
import Image from "next/image";
import CandidateButton from "../ui/CandidateButton";
import { useRouter } from "next/navigation";
import { TCandidate } from "@/data/candidate.data";
import {
  useAddRemoveFavouriteCandidateMutation,
  useSendAccessRequestMutation,
} from "@/redux/features/candidate/candidateApi";
import getExperience from "@/utils/getExperience";

interface CandidateCardProps {
  candidate: TCandidate;
  viewMode: "list" | "grid";
}

const CandidateCard: React.FC<CandidateCardProps> = ({
  candidate,
  viewMode,
}) => {
  const router = useRouter();

  const profile_img = "/images/profile_placeholder.png";

  const [addRemoveFavouriteCandidate] =
    useAddRemoveFavouriteCandidateMutation();
  const [sendAccessRequest, { isLoading }] = useSendAccessRequestMutation();

  const ButtonText = candidate?.profile_private
    ? "Send Request"
    : "View Profile";

  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    setIsFavourite(candidate?.isFavorite);
  }, [candidate]);

  const handleViewDetails = () => {
    if (candidate.profile_private) {
      sendAccessRequest(candidate?._id);
    } else {
      router.push(`/find-candidates/details/${candidate?._id}`);
    }
  };

  const toggleFavourite = (id: string) => {
    setIsFavourite((prev) => !prev);
    addRemoveFavouriteCandidate(id);
  };

  const addressArray = candidate.address
    ? candidate.address.split("'")
    : [];

  const initialAddress = addressArray.length > 0 ? addressArray[0] : "";
  const initialPostalCode =
    addressArray.length === 3 ? addressArray[1] : "";
  const initialCity = addressArray.length === 3 ? addressArray[2] : "";

  const LocationInfo =
    addressArray.length === 3 ? (
      <>
        <span className="truncate">City: {initialCity}</span>
        <span className="mx-1">,</span>
        <span className="truncate">
          Postal-Code: {initialPostalCode}
        </span>
      </>
    ) : (
      <span className="truncate">{initialAddress}</span>
    );

  /* =========================================
     =============== LIST VIEW ===============
     ========================================= */
  if (viewMode === "list") {
    return (
      <div className="
        p-4 rounded-lg transition-all duration-300 border
        hover:border-blue-300 hover:bg-blue-50 border-gray-200 bg-gray-50
        flex flex-col sm:flex-row items-start sm:items-center gap-4
      ">
        {/* Image */}
        <div className="flex-shrink-0 relative mx-auto sm:mx-0">
          <Image
            src={profile_img}
            alt={"candidate_img"}
            width={600}
            height={600}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "/images/profile_placeholder.png";
            }}
            className="w-20 h-20 rounded-lg object-cover"
          />
          {candidate?.profile_private && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg">
              <Lock size={16} className="text-white" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-grow w-full space-y-1">
          <div className="flex justify-between items-start gap-3">
            <div>
              <h3 className="font-medium text-gray-900 line-clamp-1">
                {candidate?.profile_private
                  ? "Private Account"
                  : candidate?.name}
              </h3>

              <p className="text-sm text-gray-500 line-clamp-1">
                {candidate?.job_title?.[0]}
              </p>

              <div className="flex flex-wrap items-center text-xs text-gray-500 mt-1">
                <MapPin size={12} className="mr-1" />
                {LocationInfo}
                <span className="mx-2">•</span>
                <span>
                  Experience:{" "}
                  {getExperience(candidate?.experience)}
                </span>
              </div>
            </div>

            <button
              onClick={() => toggleFavourite(candidate?._id)}
              className="text-gray-400 hover:text-blue-500 transition cursor-pointer"
            >
              {isFavourite ? (
                <BookmarkCheck className="h-5 w-5 text-blue-500" />
              ) : (
                <Bookmark className="h-5 w-5" />
              )}
            </button>
          </div>

          <CandidateButton
            variant="outline"
            size="sm"
            onClick={handleViewDetails}
            className="mt-2 w-full sm:w-auto hover:bg-yellow-500 text-gray-900 cursor-pointer"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : ButtonText}
          </CandidateButton>
        </div>
      </div>
    );
  }

  /* =========================================
     =============== GRID VIEW ===============
     ========================================= */

  return (
    <div className="
      p-4 rounded-lg transition-all duration-300 border
      hover:border-blue-300 hover:bg-blue-50 border-gray-200 bg-gray-50
      h-full flex flex-col
    ">
      {/* Image */}
      <div className="relative">
        <Image
          src={profile_img}
          alt={"candidate_img"}
          width={600}
          height={600}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "/images/profile_placeholder.png";
          }}
          className="w-full h-40 sm:h-48 md:h-52 rounded-lg object-cover mb-3"
        />

        {candidate?.profile_private && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg">
            <Lock size={16} className="text-white" />
          </div>
        )}

        <button
          onClick={() => toggleFavourite(candidate?._id)}
          className="absolute top-2 right-2 cursor-pointer p-1 rounded-full bg-white/80 text-gray-600 hover:text-blue-500 transition"
        >
          {isFavourite ? (
            <BookmarkCheck className="h-5 w-5 text-blue-500" />
          ) : (
            <Bookmark className="h-5 w-5" />
          )}
        </button>
      </div>

      <div className="flex-grow">
        <h3 className="font-medium text-gray-900 line-clamp-1">
          {candidate?.profile_private
            ? "Private Account"
            : candidate?.name}
        </h3>

        <p className="text-sm text-gray-500 line-clamp-1">
          {candidate?.job_title?.[0]}
        </p>

        <div className="flex flex-wrap items-center text-xs text-gray-500 mt-1 mb-4">
          <MapPin size={12} className="mr-1" />
          {LocationInfo}
          <span className="mx-2">•</span>
          <span>
            Experience: {getExperience(candidate?.experience)}
          </span>
        </div>
      </div>

      <CandidateButton
        variant="outline"
        size="sm"
        onClick={handleViewDetails}
        className="w-full mt-auto hover:bg-yellow-500 text-gray-900 cursor-pointer"
        disabled={isLoading}
      >
        {isLoading ? "Sending..." : ButtonText}
      </CandidateButton>
    </div>
  );
};

export default CandidateCard;
