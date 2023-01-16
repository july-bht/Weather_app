import "../theme/style.scss";
import {
  IonCol,
  IonGrid,
  IonRow,
  IonList,
  IonContent,
  IonModal,
  IonButton,
  IonText,
} from "@ionic/react";
import Hourly from "./Hourly";
import Weekly from "./Weekly";
import React, { useState } from "react";

const Forecasts = () => {
//   const [showModal, setShowModal] = useState(false);


  return (
    <>

    
<IonGrid id="forecast" class="">
  <IonRow class="forecast-container">
    <IonCol class="hourly" >
      <Hourly />
    </IonCol>
    <IonCol class="weekly">
      <Weekly />
    </IonCol>
  </IonRow>
</IonGrid>
    </>
  );
};

export default Forecasts;


