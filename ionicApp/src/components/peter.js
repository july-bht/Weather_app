export async function fetchOnecall(lat, lon) {
  const functionCall =
    "https://api.openweathermap.org/data/2.5/onecall?" +
    "lat=" +
    lat +
    "&lon=" +
    lon +
    "&exclude={part}&appid=f11de31b3e7edcf4b58d82fce8ce5d85&lang=da&units=metric";

  try {
    const response = await fetch(functionCall);

    const results = await response.json();

    return results;
  } catch (err) {
    console.log(`Fetch error: ${err.message}`);
  }
}

export async function fetchWeather(lat, lon) {
  const functionCall =
    "https://api.openweathermap.org/data/2.5/weather?" +
    "lat=" +
    lat +
    "&lon=" +
    lon +
    "&exclude={part}&appid=7c1e023709c110c30ad9b960076d599c&lang=da&units=metric";

  try {
    const response = await fetch(functionCall);

    const results = await response.json();

    return results;
  } catch (err) {
    console.log(`Fetch error: ${err.message}`);
  }
}
