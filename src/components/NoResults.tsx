import React from "react";
import { MdOutlineVideocamOff } from "react-icons/md";
import { BiCommentX, BiUser } from "react-icons/bi";

interface IProps {
  text: string;
  type?: "video" | "comment" | "account";
}

const NoResults = ({ text, type }: IProps) => {
  let icon;

  switch (type) {
    case "comment":
      icon = <BiCommentX />;
      break;
    case "account":
      icon = <BiUser />;
      break;
    default:
      icon = <MdOutlineVideocamOff />;
  }

  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <p className="text-8xl">{icon}</p>
      <p className="text-2xl text-center">{text}</p>
    </div>
  );
};

export default NoResults;
