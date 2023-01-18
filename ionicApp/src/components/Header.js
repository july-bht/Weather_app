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
const Header = ({ data1, data2 }) => {
  const locationName = data2.name;
  console.log("PROPHEADER", data1);
  console.log("PROPHEADER1", data2);
  console.log("propNAme", data2.name);

  function currentDate(time) {
    return new Date(time * 1000).toLocaleDateString([], "da-DK");
  }
  return (
    <IonHeader className="ion-no-border" collapse="fade">
      <IonToolbar>
        <IonGrid>
          <IonRow className="header__row t">
            <IonCol size="auto">{locationName}</IonCol>
            <IonCol size="auto">{data2 && currentDate(data2.dt)}</IonCol>
          </IonRow>
        </IonGrid>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
