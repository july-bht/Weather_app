import { IonCol, IonGrid, IonRow, IonText } from "@ionic/react";
import HourWave from "../svg/hourWave";
import data from "../weather.json";

const Hourly = () => {
  return (
    <div className="wave">
      <HourWave />
      <div className="wave__content">
        <IonGrid className="box__grid">
          <IonRow className="box__row">
            {data.hourly.map((item, index) => (
              <IonCol key={index}>
                <div className="box t">
                  <IonText className="box__deg">{item.deg}</IonText>
                  <div className="box__icon">{item.icon}</div>
                </div>
                <IonText className="box__time">{item.time}</IonText>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </div>
    </div>
  );
};

export default Hourly;
