import { useState, useEffect } from "react";
import { MdFavorite } from "react-icons/md";

import useAuthStore from "@/store/authStore";

interface IProps {
  handleLike: () => void;
  handleDislike: () => void;
  likes: any[];
  isLikeLoading: boolean;
}

const LikeButton = ({
  likes,
  isLikeLoading,
  handleLike,
  handleDislike,
}: IProps) => {
  const [alreadyLiked, setAlreadyLiked] = useState(false);
  const { userProfile }: any = useAuthStore();
  const filterLikes = likes?.filter((item) => item._ref === userProfile?._id);

  useEffect(() => {
    if (filterLikes?.length > 0) {
      setAlreadyLiked(true);
    } else {
      setAlreadyLiked(false);
    }
  }, [filterLikes, likes]);

  return (
    <div className="flex gap-6">
      <div
        className="mt-4 flex flex-col justify-center items-center
 cursor-pointer"
      >
        {alreadyLiked ? (
          <button
            type="button"
            className="bg-primary rounded-full p-2 md:p-4 text-accentPrimary outline-none"
            onClick={handleDislike}
          >
            <MdFavorite className="text-lg md:text-2xl" />
          </button>
        ) : (
          <button
            type="button"
            className="bg-primary rounded-full p-2 md:p-4 outline-none disabled:bg-gray-200"
            onClick={handleLike}
            disabled={isLikeLoading ? true : false}
          >
            <MdFavorite className="text-lg md:text-2xl" />
          </button>
        )}
        <p className="text-md font-semibold">{likes?.length || 0}</p>
      </div>
    </div>
  );
};

export default LikeButton;
