import React from 'react';
import { useLottie } from "lottie-react";
import searchAnimation from "./searchanimation.json";

const SearchAnimation: React.FC = () => {
  const options = {
    animationData: searchAnimation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
};

export default SearchAnimation;