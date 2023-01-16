import { IonCol, IonGrid, IonHeader,  IonRow,  IonTitle, IonToolbar } from '@ionic/react';

const Header = () => {
  return (
    <IonHeader color="tertiary">
    <IonToolbar>
<IonGrid>
    <IonRow>
        <IonCol>
            GRENAA
        </IonCol>
        <IonCol>
27. Jan
        </IonCol>
    </IonRow>
</IonGrid>
    </IonToolbar>
  </IonHeader>
  )
}

export default Header