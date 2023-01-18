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

const Forecasts = (data1, data2) => {
  const [activeTab, setActiveTab] = useState("hourly");
  
  return (
    <div id="forecast">
      <IonText
      className="hourly__title f"
        // className={
        //   activeTab === "hourly" ? "active hourly__title f " : "hourly__title f"
        // }
        onClick={() => setActiveTab("hourly")}
      >
        Hourly
      </IonText>
      <IonText
         className="weekly__title f"
        // className={
        //   activeTab === "weekly" ? "active weekly__title f " : "weekly__title f"
        // }
        onClick={() => setActiveTab("weekly")}
      >
        Weekly
      </IonText>


        {activeTab === "hourly" && <Hourly  data1={data1} data2={data2}/>}
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
