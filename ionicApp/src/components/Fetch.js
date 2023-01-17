import React, { useEffect, useState } from "react";

import Moment from "react-moment";
import "moment-timezone";
import "moment/locale/da";
const coords = {
  latitude: "56.162939",
  longitude: "10.203921",
};
import { IonHeader, IonCol, IonGrid, IonRow } from "@ionic/react";
import { fetchOnecall, fetchWeather } from "./peter";

export default function Fetch() {

  const [data, setData] = useState([]);
  const [dataWeather, setdataWeather] = useState([]);

  useEffect(() => {
    if (coords) {
      fetchOnecall(coords).then((data) => {
        // console.log("data-Onecall", data);
        setData(data);
      });
      fetchWeather(coords).then((data) => {
        // console.log("data-weather", data);
        setdataWeather(data);
      });
    }
  }, []);
  return [data, dataWeather];

  // return (
  //   <>
  //     {data && dataWeather && (
  //       <>
  //         <IonHeader>{dataWeather.name}</IonHeader>
  //         <IonGrid>
  //           <IonRow>
  //             {data &&
  //               data.daily.map((data, dataItem) => (
  //                 <div key={dataItem}>
  //                   <IonCol>
  //                     <Moment unix format="dddd">
  //                       {data.dt}
  //                     </Moment>
  //                   </IonCol>
  //                   <IonCol>{Math.round(data.temp.day)}&#176;</IonCol>
  //                 </div>
  //               ))}
  //           </IonRow>
  //         </IonGrid>
  //       </>
  //     )}
  //   </>
  // );
}
