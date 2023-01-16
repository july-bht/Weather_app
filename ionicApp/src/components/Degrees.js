import { IonCol, IonContent, IonGrid, IonRow, IonText } from "@ionic/react";

const Degrees = () => {
  return (
    <IonGrid class="degree">
      <IonRow class="degree__container">
        <IonCol class=" number t">19</IonCol>
        <IonCol class="t degree__col">
          <IonText class="c">°C</IonText>
          <br />
          <IonText class="icon">ico </IonText>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default Degrees;
