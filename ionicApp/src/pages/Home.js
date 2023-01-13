import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Header from '../components/Header';
import Forecasts from '../components/Forecasts';
import Degrees from '../components/Degrees';

const Home = () => {
  return (
    <IonPage>
   
      <IonContent fullscreen>
        <Header />

        <Degrees />

        <Forecasts />
 
      </IonContent>
    </IonPage>
  );
};

export default Home;
