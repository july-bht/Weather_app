export async function fetchOnecall(position) {
  const functionCall =
    "https://api.openweathermap.org/data/2.5/onecall?" +
    "lat=$" +
    position.latitude +
    "&lon=" +
    position.longitude +
    "&exclude={part}&appid=48f427056d4654fc05c05c1e61a36c47&lang=da&units=metric";

  try {
    const response = await fetch(functionCall);

    const results = await response.json();

    return results;
  } catch (err) {
    console.log(`Fetch error: ${err.message}`);
  }
}
export async function fetchWeather(position) {
  const functionCall =
    "https://api.openweathermap.org/data/2.5/weather?" +
    "lat=$" +
    position.latitude +
    "&lon=" +
    position.longitude +
    "&exclude={part}&appid=48f427056d4654fc05c05c1e61a36c47&lang=da&units=metric";

  try {
    const response = await fetch(functionCall);

    const results = await response.json();

    return results;
  } catch (err) {
    console.log(`Fetch error: ${err.message}`);
  }
}
