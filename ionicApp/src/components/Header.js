import {
  IonCol,
  IonGrid,
  IonHeader,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const Header = () => {
  return (
    <IonHeader  className="ion-no-border" collapse="fade">
      <IonToolbar>
        <IonGrid>
          <IonRow className="header__row t">
            <IonCol size="auto">GRENAA</IonCol>
            <IonCol size="auto">27. Jan</IonCol>
          </IonRow>
        </IonGrid>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
