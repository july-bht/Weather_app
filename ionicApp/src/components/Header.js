import {
  IonCol,
  IonGrid,
  IonHeader,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Moment from "react-moment";

import { useEffect, useState } from "react";
const Header = ({ data1, data2 }) => {
  const locationName = data2.name;
  // console.log("PROPHEADER", data1.hourly);
  // console.log("PROPHEADER1", data2);
  // console.log("propNAme", data2.name);

  function currentDate(time) {
    return new Date(time * 1000).toLocaleDateString([], "da-DK");
  }

  return (

    <IonHeader  className="ion-no-border" collapse="fade">
      <IonToolbar>
        <IonGrid>
          <IonRow className="header__row t">

            <IonCol size="auto">{locationName}</IonCol>
            <IonCol size="auto"><Moment unix format="dddd">{data2 && (data2.dt)}</Moment></IonCol>

          </IonRow>
        </IonGrid>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
