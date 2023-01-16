import React, { useEffect, useState } from "react";
import axios from "axios";

import Moment from "react-moment";
import "moment-timezone";
import "moment/locale/da";

import { IonCol, IonGrid, IonRow } from "@ionic/react";

export default function Fetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios(
      "https://api.openweathermap.org/data/2.5/onecall?lat=56.162939&lon=10.203921&exclude={current,minutely,hourly,alert}s&units=metric&appid=f11de31b3e7edcf4b58d82fce8ce5d85"
    )
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <IonGrid>
      <IonRow>
        {data &&
          data.daily.map((data, dataItem) => (
            <div  key={dataItem}>
              <IonCol>
                <Moment unix format="dddd">
                  {data.dt}
                </Moment>
              </IonCol>
              <IonCol>{Math.round(data.temp.day)}&#176;</IonCol>
            </div>
          ))}
      </IonRow>
    </IonGrid>
  );
}
