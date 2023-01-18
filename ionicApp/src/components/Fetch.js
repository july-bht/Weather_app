import React, { useEffect, useState } from "react";
import axios from "axios";

import Moment from "react-moment";
import "moment-timezone";
import "moment/locale/da";
const coords = {
  latitude: "56.162939",
  longitude: "10.203921",
};
import { IonHeader, IonCol, IonGrid, IonRow } from "@ionic/react";
import { fetchOnecall, fetchWeather } from "./peter";


import { Geolocation } from "@capacitor/geolocation";

export default function Fetch() {
  const [position, setPosition] = useState();
  const [data, setData] = useState([]);
  
  const [dataWeather, setdataWeather] = useState();
  const [dataFetched, setDataFetched] = useState(false)
 
  const [lat, setLat] = useState("")
  const [lon, setLon] = useState("")

  const getCoords = async () => {
   const c = await Geolocation.getCurrentPosition();
   setPosition(c)
   setLat(c.coords.latitude)
   setLon(c.coords.longitude)
   setDataFetched(true)
  }




  useEffect(() => {
    if (coords) {
      fetchOnecall(coords).then((data) => {
        console.log("data-Onecall", data);
        setData(data);
      });
      fetchWeather(coords).then((data) => {
        console.log("data-weather", data);
        setdataWeather(data);
      });
    }
  }, []);

  return (
    <>
      {data && dataWeather && (
        <>
          <IonHeader>{dataWeather.name}</IonHeader>
          <IonGrid>
            <IonRow>
              {data &&
                data.daily.map((data, dataItem) => (
                  <div key={dataItem}>
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
        </>
      )}
    </>
  );
}
