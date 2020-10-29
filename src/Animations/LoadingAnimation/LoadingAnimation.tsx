import React from 'react';
import { useLottie } from "lottie-react";
import loadingAnimation from "./loadinganimation.json";

const LoadingAnimation: React.FC = () => {
  const options = {
    animationData: loadingAnimation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
};

export default LoadingAnimation;