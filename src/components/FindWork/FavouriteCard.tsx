/* eslint-disable react-hooks/exhaustive-deps */
import {
  useAddRemoveFavouriteJobMutation,
  useGetFavouriteJobsQuery,
} from "@/redux/features/job/jobApi";
import { IFindJob } from "@/types/job.type";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { useEffect, useState } from "react";

type TProps = {
  jobId: string;
};

const FavouriteCard = ({ jobId }: TProps) => {
  const [addRemoveFavouriteJob] = useAddRemoveFavouriteJobMutation();
  const { data, isLoading, isError } = useGetFavouriteJobsQuery(undefined);

  const favouriteJobs = data?.data?.jobs || [];

  const [isFavourite, setIsFavourite] = useState(false);

  // Update isFavourite when favouriteJobs are loaded
  useEffect(() => {
    const favouriteJobIds = favouriteJobs.map((job: IFindJob) => job._id);
    setIsFavourite(favouriteJobIds.includes(jobId));
  }, [favouriteJobs, jobId]);

  
  

  const toggleFavourite = () => {
    setIsFavourite((prev) => !prev);
    addRemoveFavouriteJob(jobId);
  };


   if (isLoading || isError) return null;


  if (!isLoading && !isError) {
    return (
      <>
        {isFavourite ? (
          <BookmarkCheck
            onClick={toggleFavourite}
            className="h-5 w-5 cursor-pointer text-blue-500"
          />
        ) : (
          <Bookmark
            onClick={toggleFavourite}
            className="h-5 w-5 cursor-pointer text-gray-800"
          />
        )}
      </>
    );
  }
};

export default FavouriteCard;
