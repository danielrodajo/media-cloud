import React from 'react';
import './DoneBoxAnimation.scss';
import { IonText } from '@ionic/react';
import CustomAnimation from '../CustomAnimation';
import DoneAnimation from '../../Animations/doneanimation.json';

const DoneBoxAnimation: React.FC = () => {

  return (
    <React.Fragment>
        <CustomAnimation json={DoneAnimation} loop={false}/>
        <div className="center-complete">
          <IonText className="format-text2">¡Completado!</IonText>
        </div>
    </React.Fragment>
  );
};

export default DoneBoxAnimation;