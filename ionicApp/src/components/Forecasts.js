import "../theme/style.scss";
import { IonCol, IonGrid, IonRow } from "@ionic/react";
import Hourly from "./Hourly";
import Weekly from "./Weekly";

const Forecasts = () => {
  return (
    <div>
      <IonGrid>
        <IonRow class="forecast-container">
          <IonCol class="hourly">
            <Hourly />
          </IonCol>
          <IonCol class="weekly">
            <Weekly />
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default Forecasts;
