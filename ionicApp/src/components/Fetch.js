import { useEffect, useState } from "react";

import { fetchOnecall, fetchWeather } from "./peter";

import { Geolocation } from "@capacitor/geolocation";

export default function Fetch() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [myPosition, setMyPosition] = useState();
  useEffect(() => {
    (async () => {
      try {
        const coordinates = await Geolocation.getCurrentPosition();
        console.log(coordinates.coords);
        setMyPosition(coordinates.coords);
        console.log(myPosition);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
    if (myPosition) {
      // forudsigt
      fetchOnecall([myPosition.latitude, myPosition.longitude]).then((data) => {
        setData(data);
      });
      // nuværende
      fetchWeather([myPosition.latitude, myPosition.longitude]).then((data) => {
        setdataWeather(data);
      });
    }
  }, []);

  const [data, setData] = useState([]);
  const [dataWeather, setdataWeather] = useState([]);

  return [data, dataWeather];
}
