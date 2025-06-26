import { useAddRemoveFavouriteJobMutation } from "@/redux/features/job/jobApi";
import { BookmarkCheck } from "lucide-react";

type TProps = {
    jobId: string;
}
 

const FavouriteCard = ({jobId}: TProps) => {
  const [ addRemoveFavouriteJob ] = useAddRemoveFavouriteJobMutation();
  

  const toggleFavourite = () => {
    addRemoveFavouriteJob(jobId)
  }


  return (
    <>
      <BookmarkCheck onClick={toggleFavourite} className="h-5 w-5 cursor-pointer text-blue-500" />
         {/* {job?.isFavorite ? (
                  <BookmarkCheck onClick={toggleFavourite} className="h-5 w-5 cursor-pointer text-blue-500" />
                ) : (
                  <Bookmark onClick={toggleFavourite} className="h-5 w-5 cursor-pointer text-gray-800" />
                )} */}
    </>
  )
}

export default FavouriteCard