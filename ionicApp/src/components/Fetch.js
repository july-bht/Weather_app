import { useEffect, useState } from "react";

import { fetchOnecall, fetchWeather } from "./peter";

import { Geolocation } from "@capacitor/geolocation";

import { IonLoading } from "@ionic/react";

export default function Fetch() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [position, setPosition] = useState();
  const [data, setData] = useState([]);
  const [dataWeather, setdataWeather] = useState();
  const [showLoading, setShowLoading] = useState(true);
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


  return [data, dataWeather];
}


