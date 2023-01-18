import { useEffect, useState } from "react";

import { fetchOnecall, fetchWeather } from "./peter";

import { Geolocation } from "@capacitor/geolocation";

export default function Fetch() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [position, setPosition] = useState();
  useEffect(() => {
    (async () => {
      try {
        const coordinates = await Geolocation.getCurrentPosition();

        console.log(coordinates.coords);

        setMypos(coordinates.coords);
        console.log(position)
      } catch (error) {
        console.error("Error fetching data: ", error);

        setError(error);
      } finally {
        setLoading(false);
      }
    })();
    if (position) {
      // forudsigt
      fetchOnecall([position.latitude, position.longitude]).then((data) => {
        setData(data);
      });
      // nuværende
      fetchWeather([position.latitude, position.longitude]).then((data) => {
        setdataWeather(data);
      });
    }
  }, [loading]);
  const [data, setData] = useState([]);
  const [dataWeather, setdataWeather] = useState([]);

  return [data, dataWeather];
}
