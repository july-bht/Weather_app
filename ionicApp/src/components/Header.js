import {
  IonCol,
  IonGrid,
  IonHeader,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
const Header = ({ data1, data2 }) => {
  const locationName = data2.name;

  function currentDate(time) {
    return new Date(time * 1000).toLocaleDateString([], "da-DK");
  }
  return (
    <IonHeader className="ion-no-border" collapse="fade">
      <IonToolbar>
        <IonGrid>
          <IonRow className="header__row t">
            <IonCol size="auto">{locationName}</IonCol>
            <IonCol size="auto">{data2 && currentDate(data2.dt)}</IonCol>
            <IonCol size="auto">{data2 && data2.main.temp}</IonCol>
            {data1 && data1.hourly.map((data, i) => {
              <IonCol>{data.temp}</IonCol>
            })}
          </IonRow>
        </IonGrid>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
