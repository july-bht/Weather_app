import { IonCol, IonGrid, IonImg, IonRow, IonText } from "@ionic/react";
import { useEffect, useState } from "react";

import Cloud from "../svg/cloud";
const Degrees = ({ data1, data2 }) => {
  // const [icon, setIcon] = useState("");

  // const fetchWeather = async ( ) => {

  // const apiCall = await fetch({data2 && data2.weather[0].main});
  // const user = await apiCall. json(); / call setName below to change the state "name"
  // setName (user. name );

  //  }

  // name is occurred
  // useEffect ( ( ) => {
  // fetchUser();
  // }, [userId])

  // const [icon, setIcon ]=useState("")
  // const  [weather, setWeather]=useState([])

  // useEffect(()=>{
  //   if (icon){
  //     setWeather(data2)
  //   }
  // },[icon])

  // function ChangeIcon(){
  //    const[icon, updateIcon]=React.useState([])
  // }

  // function changeContainerBgColor(temp){
  //   var color='rgba(244,244,244,0.4)'

  //   if(temp > -10 && temp <= 0){
  //     color='rgba(50,97,214, 0.4)'
  //   }else if(temp > 1 && temp <= 15){
  //     color='rgba(244,244,244, 0.4)'
  //   }else if(temp > 16 && temp <= 25){
  //     color='rgba(244,204,0, 0.4)'
  //   }else if(temp > 26){
  //     color='rgba(216,128,48, 0.4)'
  //   };
  //   $('container').css('background',color)
  // }

  // var backgroundImage = chooseImage(wd.main.temp)

  // $("body").css("background-image", "url(" + backgroundImage + ")");

  return (
    <IonGrid class="degree">
      <IonRow class="degree__container">
        <IonCol class=" number t">
          {data2 && Math.round(data2.main.temp)}
        </IonCol>
        <IonCol class="t degree__col">
          <IonText class="c">°C</IonText>
          <br />
          <IonText class="icon">
            {/* if x = x : */}

            {/* <div weather === "cloud" && <cloud/><>/div> */}

            {/* <text className={weather === "cloud" ? "cloudy " : "box__text "}>hello</text> */}

            {/* <Cloud /> */}
          </IonText>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default Degrees;
