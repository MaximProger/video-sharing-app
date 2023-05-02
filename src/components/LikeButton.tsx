import { useState, useEffect } from "react";
import { MdFavorite } from "react-icons/md";

import useAuthStore from "@/store/authStore";

interface IProps {}

const LikeButton = ({ handleLike, handleDislike }) => {
  const [alreadyLiked, setAlreadyLiked] = useState(true);
  const { userProfile } = useAuthStore();

  return (
    <div className="gap-6">
      <div
        className="mt-4 flex flex-col justify-center items-center
 cursor-pointer"
      >
        {alreadyLiked ? (
          <button
            type="button"
            className="bg-primary rounded-full p-2 md:p-4 text-pink outline-none"
            onClick={handleDislike}
          >
            <MdFavorite className="text-lg md:text-2xl" />
          </button>
        ) : (
          <button
            type="button"
            className="bg-primary rounded-full p-2 md:p-4 outline-none"
            onClick={handleLike}
          >
            <MdFavorite className="text-lg md:text-2xl" />
          </button>
        )}
      </div>
    </div>
  );
};

export default LikeButton;
