import LocationCard from "../LocationCard/LocationCard";
import style from "./LocationsCardList.module.css";

interface ILocationData {
  id: number;
  title: string;
  city: string;
  city_en: string;
  time_zone: string;
  address: string;
}

interface ILocationsCardList {
  city: string;
  data: ILocationData[];
}

const LocationsCardList = ({ city, data }: ILocationsCardList) => {
  const filteredData = data.filter((i: ILocationData) => i.city === city);

  return (
    <li className={style.locationCard}>
      <h3 className={style.title}>{city}</h3>
      <ul className={style.cardsList}>
        {filteredData.map((card: any) => {
          return <LocationCard card={card} key={card.id} />;
        })}
      </ul>
    </li>
  );
};

export default LocationsCardList;
