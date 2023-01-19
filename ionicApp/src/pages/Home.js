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
import { fetchOnecall, fetchWeather } from "../components/peter";

import "../theme/bg-change.scss"



const Home = () => {
  const [position, setPosition] = useState();
  const [data, setData] = useState([]);

  const [dataWeather, setDataWeather] = useState();
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
  };

  useEffect(() => {
    getCoords();
    if (dataFetched) {
      // forudsigt
      console.log("coords", position.coords.latitude);
      console.log("coords", position.coords.longitude);

      if (lat && lon) {
        fetchOnecall(lat, lon).then((data) => {
          console.log("data-Onecall", data);

          setData(data);
        });
        // nuværende
        fetchWeather(lat, lon).then((data) => {
          setDataWeather(data);
          console.log("data-Weather", data);
        });
      }
    }
    console.log("dataFetched", dataFetched);
  }, [dataFetched]);
  // if (loading)
  // return (
  //   <IonLoading
  //   showBackdrop={true}
  //     spinner={"bubbles"}
  //     isOpen={showLoading}
  //     onDidDismiss={() => setShowLoading(false)}
  //     message={"Vent lige lidt..."}
  //     duration={2000}
  //   />
  // );

 
  // const conditions = fetchWeather.weather[0].main;

  // function bgImage() {
  //   if (conditions === "Clouds") {
  //     return "cloudy";
  //   }
  //   if (conditions === "sun") {
  //     return "sunny";
  //   }
  // }

  return (
    <IonPage className="bg">
      <IonContent data1={data} data2={dataWeather}  fullscreen>
        
        <>
          {data && dataWeather && <Header data1={data} data2={dataWeather} />}
        </>
        <Degrees data1={data} data2={dataWeather} />
        <Forecasts data1={data} data2={dataWeather} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
