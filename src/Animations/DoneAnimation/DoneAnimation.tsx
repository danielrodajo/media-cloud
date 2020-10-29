import React from 'react';
import { useLottie } from "lottie-react";
import doneAnimation from "./doneanimation.json";

const DoneAnimation: React.FC = () => {
  const options = {
    animationData: doneAnimation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
};

export default DoneAnimation;