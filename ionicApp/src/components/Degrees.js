import { IonCol, IonGrid, IonRow, IonText } from "@ionic/react";

import Cloud from "../svg/cloud";
const Degrees = ({ data1, data2 }) => {
  console.log("forecast",data1)

  return (
    <IonGrid class="degree">
      <IonRow class="degree__container">
        <IonCol class=" number t">{data2 && Math.round(data2.main.temp)}</IonCol>
        {/* {data1 && data1.hourly.map((item, i) => {
          <IonCol key={i}>
            {item.temp}
          </IonCol>
        })} */}
        <IonCol class="t degree__col">
          <IonText class="c">°C</IonText>
          <br />
          <IonText class="icon">
            <Cloud />
          </IonText>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default Degrees;
