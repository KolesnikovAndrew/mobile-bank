import React from "react";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../../store";
import { RiArrowRightSLine } from "react-icons/ri";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const UserCard: React.FC = () => {
  const user = useTypedSelector((state) => state.user);
  const hasIcon = Boolean(user.icon);
  const userInitial = user.name.charAt(0).toUpperCase();

  return (
    <div className="flex items-center p-10">
      {hasIcon ? (
        <img src={user.icon} alt="User Icon" className="w-8 h-8 rounded-full" />
      ) : (
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white text-xl font-bold">
          {userInitial}
        </div>
      )}
      <div className="ml-2 text-4xl">{user.name}</div>
      <div className="ml-2 text-4xl flex items-center">
        <RiArrowRightSLine />
      </div>
    </div>
  );
};

export default UserCard;
