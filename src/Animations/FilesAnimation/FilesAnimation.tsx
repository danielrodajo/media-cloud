import React from 'react';
import { useLottie } from "lottie-react";
import filesAnimation from "./documentsanimation.json";

const FilesAnimation: React.FC = () => {
  const options = {
    animationData: filesAnimation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
};

export default FilesAnimation;