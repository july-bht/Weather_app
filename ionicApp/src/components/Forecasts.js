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

  const [activeTab, setActiveTab] = useState("hourly");
  return (
    <>
      <IonText
        className={activeTab === "hourly" ? "active hourly__title" : "hourly__title"}
        onClick={() => setActiveTab("hourly")}
      >
        Hourly
      </IonText>
      <IonText
        className={activeTab === "weekly" ? "active weekly__title" : "weekly__title"}
        onClick={() => setActiveTab("weekly")}
      >
        Weekly
      </IonText>

      {activeTab === "hourly" && <Hourly />}
      {activeTab === "weekly" && <Weekly />}

  
      {/* <IonGrid id="forecast" class="">
  <IonRow class="forecast-container">
    <IonCol class="hourly" >
      <Hourly />
    </IonCol>
    <IonCol class="weekly">
      <Weekly />
    </IonCol>
  </IonRow>
</IonGrid> */}
    </>
  );
};

export default Forecasts;
