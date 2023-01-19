import { IonCol, IonGrid, IonImg, IonRow, IonText } from "@ionic/react";

const Degrees = ({ data1, data2 }) => {
 
  return (
    <>
    {data2 && <><IonGrid class="degree">
      <IonRow class="degree__container">
        <IonCol class=" number t">
          {data2 && Math.round(data2.main.temp)}
        </IonCol>
        <IonCol class="t degree__col">
          <IonText class="c">°C</IonText>
          <br />
   
            <img className="icon" alt="bla" src={"http://openweathermap.org/img/w/" +data2.weather[0].icon +".png"} />

   
        </IonCol>
      </IonRow>
    </IonGrid></>}
    
    </> );
};

export default Degrees;
