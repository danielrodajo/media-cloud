import React from 'react';
import { useLottie } from "lottie-react";
import searchFriendsAnimation from "./searchfriendsanimation.json";

const SearchFriendsAnimation: React.FC = () => {
  const options = {
    animationData: searchFriendsAnimation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
};

export default SearchFriendsAnimation;