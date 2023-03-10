
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";

import Home from "./pages/Home";
// import Fetch from "./components/Fetch";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import {IonReactRouter} from '@ionic/react-router';
import { Redirect, Route } from "react-router";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */

import './theme/variables.css';
import './theme/style.scss'

setupIonicReact();

const App: React.FC = () => (


  <IonApp >



    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);


export default App;
