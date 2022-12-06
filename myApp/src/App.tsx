import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact,IonContent, IonHeader, IonPage, IonTitle, IonToolbar,  IonInput, IonItem, IonLabel, IonList } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
/*import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { FormEvent, FormEventHandler, useEffect, useState } from 'react';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
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

function Example() {
  
}

const Home: React.FC = () => {
  

  
  function Welcome(props:any){
    const [value, setValue] = useState(null);

    const setInput = (value: any) => { 
      setValue(value.target.value);
    }
    return(
      
      <IonItem>
    <IonLabel>{props.name}   </IonLabel>
    <IonInput placeholder="Введите текст" value={value} onInput={setInput}></IonInput>
    <p>{props.name} {value}</p>
    </IonItem> 
    )
  }

  return (
    <IonList>
      
    <Welcome name="FIO:"/>
    <Welcome name="Number:"/>
    <Welcome name="Email:"/>
    <Welcome name="Age:"/>
    <Welcome name="Bio:"/>
    </IonList>
   );
 
 
};

export default Home;
