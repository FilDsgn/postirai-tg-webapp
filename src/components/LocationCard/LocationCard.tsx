import { useEffect, useState } from "react";
import { useCurrentOrderContext } from "../../contexts/CurrentOrderContext";
import style from "./LocationCard.module.css";

import * as laundryApi from "../../utils/laundryApi";
import { ILocationCard } from "./LocationCard.types";

const LocationCard = ({ card }: ILocationCard) => {
  const { setLocation, setLocationId } = useCurrentOrderContext();

  const [allDevices, setAllDevices] = useState(0);
  const [freeDevices, setFreeDevices] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const handleLocationCardClick = () => {
    setLocation(card.city + ", " + card.address);
    setLocationId(card.id);
  };

  // useEffect(() => {
  //   setIsLoading(true);
  //   laundryApi
  //     .getDevices(card.id)
  //     .then((res) => {
  //       setAllDevices(res.data.length);
  //       const freeDevices = res.data.filter(
  //         (i: any) => i.status.title === "Свободно"
  //       );
  //       setFreeDevices(freeDevices.length);
  //     })
  //     .catch((err) => console.log(err))
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, []);

  return (
    <li className={style.locationCard} onClick={handleLocationCardClick}>
      <div className={style.locationCardContainer}>
        <h4 className={style.locationCardTitle}>{card.address}</h4>
        {/* <div className={style.locationMachinesContainer}>
          <p className={style.locationCardText}>
            {!isLoading ? "Свободно машин:" : "Свободно машин..."}
          </p>
          <span className={style.locationCardCount}>
            {!isLoading ? `${freeDevices}/${allDevices}` : ""}
          </span>
        </div> */}
      </div>
      <div className={style.locationCardArrow}></div>
    </li>
  );
};

export default LocationCard;
