import React from 'react';
import { useLottie } from "lottie-react";

interface props {
    json: Object,
    loop: boolean
}

const CustomAnimation: React.FC<props> = props => {
  const options = {
    animationData: props.json,
    loop: props.loop,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
};

export default CustomAnimation;