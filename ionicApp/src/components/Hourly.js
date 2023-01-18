import { useEffect, useState } from "react";

import { IonCol, IonGrid, IonRow, IonText } from "@ionic/react";
import HourWave from "../svg/hourWave";

const Hourly = (data1) => {
  const data = data1.data1.data1;
  console.log("hourly data", data);
  useEffect(() => {
    return () => {
      <div className="wave">
        <HourWave />
        <div className="wave__content">
          <IonGrid className="box__grid">
            <IonRow className="box__row">
                {/* <Ioncol>{data}</Ioncol> */}
            </IonRow>
          </IonGrid>
        </div>
      </div>;
    };
  }, [data1]);
};

export default Hourly;
