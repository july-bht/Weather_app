import {
  IonCol,
  IonGrid,
  IonHeader,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";
import Fetch from "./Fetch";
const Header = () => {
  const getData = Fetch();
  function currentDate(time) {
    return new Date(time * 1000).toLocaleDateString([], "da-DK");
  }

  console.log("Fetch", Fetch);
  return (
    <IonHeader className="ion-no-border" collapse="fade">
      <IonToolbar>
        <IonGrid>
          <IonRow className="header__row t">
            {/* <IonCol size="auto">{getData && getData[1].name}</IonCol>
            <IonCol size="auto">{getData && currentDate(getData[1].dt)}</IonCol> */}
          </IonRow>
        </IonGrid>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
