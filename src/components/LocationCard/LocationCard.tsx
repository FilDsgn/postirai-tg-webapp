import { useCurrentOrderContext } from "../../contexts/CurrentOrderContext";
import style from "./LocationCard.module.css";

interface ICard {
  id: number;
  title: string;
  city: string;
  city_en: string;
  time_zone: string;
  address: string;
}

interface ILocationCard {
  card: ICard;
}

const LocationCard = ({ card }: ILocationCard) => {
  const { setLocation, setLocationId } = useCurrentOrderContext();

  const handleLocationCardClick = () => {
    setLocation(card.city + ", " + card.address);
    setLocationId(card.id);
  };

  return (
    <li className={style.locationCard} onClick={handleLocationCardClick}>
      <div className={style.locationCardContainer}>
        <h4 className={style.locationCardTitle}>{card.address}</h4>
        <div className={style.locationMachinesContainer}>
          <p className={style.locationCardText}>Свободно машин:</p>
          <span className={style.locationCardCount}>7/15</span>
        </div>
      </div>
      <div className={style.locationCardArrow}></div>
    </li>
  );
};

export default LocationCard;
