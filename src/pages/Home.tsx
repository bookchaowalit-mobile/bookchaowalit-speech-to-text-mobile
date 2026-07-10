import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Home: React.FC = () => (
  <IonPage>
    <IonHeader><IonToolbar><IonTitle>Speech To Text</IonTitle></IonToolbar></IonHeader>
    <IonContent className="ion-padding">
      <h2>Speech To Text</h2>
      <p>Speech To Text — Mobile app (ionic)</p>
    </IonContent>
  </IonPage>
);
export default Home;
