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
              <IonCol className="t box__col" key={index}>
                <div className="box ">
                  <IonText className="box__deg">{item.deg}</IonText>
 
                  <img  className="box__icon" src={item.icon} />
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
