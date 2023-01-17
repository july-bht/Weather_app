import Fetch from "./Fetch";
import HourWave from "../svg/hourWave";
const Hourly = () => {
  const getData = Fetch();
  function currentDate(time) {
    return new Date(time * 1000).toLocaleDateString([], "da-DK");
  }
  return (
    <>
      <h4 className="hourly__title">Hourly</h4>
      <HourWave />
    </>
  );


};

export default Hourly;
