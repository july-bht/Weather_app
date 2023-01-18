import { useEffect, useState } from "react";
import { IonContent, IonFooter, IonHeader, IonPage } from "@ionic/react";
import Header from "../components/Header";
import Forecasts from "../components/Forecasts";
import Degrees from "../components/Degrees";


import { Geolocation } from "@capacitor/geolocation";
import { fetchOnecall, fetchWeather } from "../components/peter";

const Home = () => {
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
    getCoords()
    if(dataFetched) {
        // forudsigt
      console.log("coords", position.coords.latitude);
      console.log("coords", position.coords.longitude);
  
if(lat && lon) {
  fetchOnecall(lat, lon).then((data) => {
    console.log("data-Onecall", data);

    setData(data);
  });
  // nuværende
  fetchWeather(lat, lon).then((data) => {
    setdataWeather(data);
    console.log("data-Weather", data);
  });
}
    }
    console.log("dataFetched", dataFetched);
  }, [dataFetched]);
  return (
    <IonPage>
      <IonContent class="container" fullscreen>
        <>
        {data && dataWeather && (
          <Header data1={data} data2={dataWeather} />
        )}
        </>
        <Degrees />
        <Forecasts />
      </IonContent>
    </IonPage>
  );
};

export default Home;
