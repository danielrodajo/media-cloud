import React from 'react';
import './DoneBoxAnimation.scss';
import DoneAnimation from '../DoneAnimation/DoneAnimation';
import { IonText } from '@ionic/react';

const DoneBoxAnimation: React.FC = () => {

  return (
    <React.Fragment>
        <DoneAnimation/>
        <IonText className="format-text2">¡Completado!</IonText>
    </React.Fragment>
  );
};

export default DoneBoxAnimation;