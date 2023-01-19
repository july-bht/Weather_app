import { IonCol, IonGrid, IonImg, IonRow, IonText } from "@ionic/react";
import HourWave from "../svg/hourWave";
import Moment from "react-moment";


const Hourly = ({ data1, data2 }) => {



function currentDate(time) {
  return new Date(time * 1000).toLocaleDateString([], "da-DK");
}


  
  return (
    <div className="wave">
      <HourWave />
      <div className="wave__content">
        <IonGrid className="box__grid">
          <IonRow className="box__row">
          <IonCol className="t box__col" >
                <div className="box ">
                  {/* <IonText className="box__deg">{data1 && data1.current.temp}</IonText> */}
                  {/* <svg
                    width="35"
                    height="35"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M52.0367 26.4783C49.8555 22.7975 46.447 20.003 42.41 18.5857C38.373 17.1684 33.9657 17.2189 29.9623 18.7284C25.9589 20.2379 22.6154 23.1098 20.5192 26.8397C18.4229 30.5695 17.708 34.9187 18.5 39.1233C15.4671 39.2936 12.6203 40.6403 10.565 42.8772C8.50981 45.1141 7.40837 48.0645 7.49501 51.101C7.58164 54.1374 8.8495 57.0203 11.0289 59.1363C13.2083 61.2524 16.1273 62.4346 19.165 62.4317H54.4417C57.4102 62.4317 60.333 61.6998 62.9513 60.301C65.5696 58.9021 67.8027 56.8793 69.4528 54.4116C71.103 51.944 72.1194 49.1076 72.412 46.1535C72.7047 43.1994 72.2645 40.2187 71.1305 37.4752C69.9966 34.7318 68.2038 32.3102 65.9108 30.4248C63.6179 28.5394 60.8955 27.2484 57.9846 26.666C55.0737 26.0836 52.0642 26.2277 49.2223 27.0857C46.3804 27.9437 43.7939 29.4891 41.6917 31.585"
                      stroke="black"
                      stroke-width="2"
                      stroke-miterlimit="10"
                    />
                  </svg> */}
                </div>
                {/* <IonText className="box__time">{item.dt}</IonText> */}
              </IonCol>
      
            {data1 && data1.hourly.map((item, index) => (
              <IonCol className="t box__col" key={index}>
                <div className="box ">
                  <IonText className="box__deg">{item && Math.round(item?.temp)}°</IonText>
                  <img className="box__icon" alt="bla" src={"http://openweathermap.org/img/w/" +item.weather[0].icon +".png"} />
                </div>
                <IonText className="box__time"><Moment unix format="HH:mm">{item && (item.dt)}</Moment></IonText>
              </IonCol>
            ))
            }
          </IonRow>
        </IonGrid>
      </div>
    </div>
  );
};

export default Hourly;
