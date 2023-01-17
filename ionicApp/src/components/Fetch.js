import { useEffect, useState } from "react";

import { fetchOnecall, fetchWeather } from "./peter";

import { Geolocation } from "@capacitor/geolocation";

export default function Fetch() {
  const [myPosition, setMyPosition] = useState(null);

  useEffect(() => {
    async () => {
      try {
        const coordinates = await Geolocation.getCurrentPosition();
        setMyPosition(coordinates.coords);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    if (myPosition) {
      // forudsigt
      fetchOnecall(myPosition).then((data) => {
        setData(data);
      });
      // nuværende
      fetchWeather(myPosition).then((data) => {
        setdataWeather(data);
      });
    }
    console.log();
  }, []);

  const [data, setData] = useState([]);
  const [dataWeather, setdataWeather] = useState([]);

  return [data, dataWeather];
}
