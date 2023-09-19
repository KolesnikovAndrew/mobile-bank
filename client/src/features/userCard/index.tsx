import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { User } from "entities/user/index";
const UserCard: React.FC<{ userData: User }> = ({ userData }) => {
  const hasIcon = Boolean(userData.icon);

  return (
    <div className="flex items-center w-4/6">
      {hasIcon ? (
        <img
          src={userData.icon}
          alt="User Icon"
          className="w-1/5 h-full rounded-full"
        />
      ) : (
        <div className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-blue-500 text-white text-xl font-bold">
          <div id={userData.id}>{userData.credential}</div>
        </div>
      )}
      <div className="ml-2 w-4/5 text-1xl font-bold flex items-center">
        <p>{userData.fullName}</p>
        <div className="mt-1">
          <RiArrowRightSLine />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
