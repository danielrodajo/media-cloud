import React from 'react';
import { IonSpinner } from '@ionic/react';
import './CustomSpinner.css'

const CustomSpinner: React.FC = () => (
    <IonSpinner className="my-spinner" color="tertiary" />
);

export default CustomSpinner;