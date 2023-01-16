import "../theme/style.scss";
import { IonCol, IonGrid, IonRow, IonFooter } from "@ionic/react";
import Hourly from "./Hourly";
import Weekly from "./Weekly"

const Forecasts = () => {
  return (

        <IonGrid id="forecast" class="">
            <IonRow class="forecast-container">
                <IonCol class="hourly">
                    <Hourly />
         
               

                </IonCol>
                {/* <IonCol class="weekly">
                    <Weekly />
                </IonCol> */}
            </IonRow>
        </IonGrid>

  )
}

export default Forecasts