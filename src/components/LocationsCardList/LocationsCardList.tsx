import LocationCard from "../LocationCard/LocationCard";
import style from "./LocationsCardList.module.css";
import { ILocationData, ILocationsCardList } from "./LocationsCardList.types";

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
