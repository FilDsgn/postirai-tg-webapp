import { useEffect, useState } from "react";
import { useCurrentOrderContext } from "../../contexts/CurrentOrderContext";
import MachineCard from "../MachineCard/MachineCard";
import style from "./MachinesList.module.css";

import * as laundryApi from "../../utils/laundryApi";
import Loader from "../Loader/Loader";
import { useTelegram } from "../../hooks/useTelegram";
import { IMachine } from "./MachinesList.types";

const MachinesList = () => {
  const { order } = useCurrentOrderContext();
  const { user } = useTelegram();

  const [machinesData, setMachinesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (order.locationId) {
      setIsLoading(true);
      laundryApi
        .getDevices(order.locationId, user && user.id)
        .then((res) => {
          setMachinesData(res.data);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setMachinesData([]);
    }
  }, [order.locationId]);

  return (
    <main className={style.content}>
      <h3 className={style.title}>{order.location}</h3>
      <ul className={style.cards}>
        {machinesData.map((machine: IMachine) => {
          return <MachineCard machine={machine} key={machine.id} />;
        })}
      </ul>
      {isLoading && <Loader />}
    </main>
  );
};

export default MachinesList;
