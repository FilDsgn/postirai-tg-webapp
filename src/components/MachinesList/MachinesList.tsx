import { useCurrentOrderContext } from "../../contexts/CurrentOrderContext";
import MachineCard from "../MachineCard/MachineCard";
import style from "./MachinesList.module.css";

const MachinesList = ({ data }: any) => {
  const { order } = useCurrentOrderContext();
  return (
    <main className={style.content}>
      <h3 className={style.title}>{order.location}</h3>
      <ul className={style.cards}>
        {data.map((machine: any) => {
          return <MachineCard machine={machine} key={machine.id} />;
        })}
      </ul>
    </main>
  );
};

export default MachinesList;
