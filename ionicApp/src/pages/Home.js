import { useEffect, useState } from "react";
import {
  IonContent,
  IonFooter,
  IonHeader,
  IonPage,
  IonLoading,
} from "@ionic/react";
import Header from "../components/Header";
import Forecasts from "../components/Forecasts";
import Degrees from "../components/Degrees";

import { Geolocation } from "@capacitor/geolocation";
import { fetchOnecall, fetchWeather } from "../components/API";

const Home = () => {
  const [position, setPosition] = useState();
  const [data, setData] = useState([]);

  const [dataWeather, setdataWeather] = useState();
  const [dataOneCall, setDataOneCall] = useState();
  const [dataFetched, setDataFetched] = useState(false);

  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  const [loading, setLoading] = useState(true);
  const [showLoading, setShowLoading] = useState(true);

  const getCoords = async () => {
    const c = await Geolocation.getCurrentPosition();
    setPosition(c);
    setLat(c.coords.latitude);
    setLon(c.coords.longitude);
    setDataFetched(true);
    setLoading(false);
  };

  useEffect(() => {
    getCoords();
    if (dataFetched) {
      // forudsigt
      console.log("coords", position.coords.latitude);
      console.log("coords", position.coords.longitude);

      if (lat && lon) {
        fetchOnecall(lat, lon).then((data) => {
          setDataOneCall(data);

          setData(data);
        });
        // nuværende
        fetchWeather(lat, lon).then((data) => {
          setdataWeather(data);
        });
      }
    }
    console.log("dataFetched", dataFetched);
  }, [dataFetched]);
  if (loading)
    return (
      <IonLoading
        showBackdrop={true}
        spinner={"bubbles"}
        isOpen={showLoading}
        onDidDismiss={() => setLoading(false)}
        message={"Vent lige lidt..."}
        duration={10000}
      />
    );
  return (
    <IonPage>
      <IonContent class="container" fullscreen>
        <>
          {dataOneCall && dataWeather && (
            <Header data1={dataOneCall} data2={dataWeather} />
          )}
        </>
        <Degrees data1={dataOneCall} data2={dataWeather} />

        <Forecasts data1={dataOneCall} data2={dataWeather} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
