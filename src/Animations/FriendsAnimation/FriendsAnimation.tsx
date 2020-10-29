import React from 'react';
import { useLottie } from "lottie-react";
import friendsAnimation from "./friendsanimation.json";

const FriendsAnimation: React.FC = () => {
  const options = {
    animationData: friendsAnimation,
    loop: false,
    autoplay: true,
    height: 30,
  };

  const { View } = useLottie(options);

  return View;
};

export default FriendsAnimation;