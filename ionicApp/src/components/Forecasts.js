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
  const [activeTab, setActiveTab] = useState("hourly");
  return (
    <div id="forecast">
      <IonText
        className={
          activeTab === "hourly" ? "active hourly__title f " : "hourly__title f"
        }
        onClick={() => setActiveTab("hourly")}
      >
        Hourly
      </IonText>
      <IonText
        className={
          activeTab === "weekly" ? "active weekly__title f " : "weekly__title f"
        }
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
    </div>
  );
};

export default Forecasts;
