import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import LocationsList from "./components/LocationsList/LocationsList";
import MachinesList from "./components/MachinesList/MachinesList";

import machines from "./data/machines.json";
import locations from "./data/locations.json";
import { CurrentOrderContextProvider } from "./contexts/CurrentOrderContext";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Payment from "./components/Payment/Payment";

function App() {
  const machinesData = machines.data;
  const locationsData = locations.data;

  const [location, setLocation] = useState("");
  const [locationId, setLocationId] = useState(0);
  const [machine, setMachine] = useState("");
  const [duration, setDuration] = useState(0);
  const [price, setPrice] = useState(0);
  const [paymentUrl, setPaymentUrl] = useState("");

  const [headerTitle, setHeaderTitle] = useState("ВЫБЕРИ ПРАЧЕЧНУЮ");

  const [step, setStep] = useState<"locations" | "machines" | "payment">(
    "locations"
  );

  const order = {
    location,
    locationId,
    machine,
    duration,
    price,
    paymentUrl,
    // owner
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  useEffect(() => {
    if (!location) {
      setStep("locations");
      setHeaderTitle("ВЫБЕРИ ПРАЧЕЧНУЮ");
      return;
    }
    if (location && !machine) {
      setStep("machines");
      setHeaderTitle("ВЫБЕРИ МАШИНУ");
      return;
    }
    if (location && machine && duration && price && paymentUrl) {
      setStep("payment");
      setHeaderTitle("ОПЛАТА");
      return;
    }
  }, [location, machine]);

  const handleButtonBackClick = () => {
    if (step === "machines") {
      setLocation("");
      setLocationId(0);
      setMachine("");
      setDuration(0);
      setPrice(0);
      return;
    }
    if (step === "payment") {
      setMachine("");
      setDuration(0);
      setPrice(0);
      setPaymentUrl("");
      return;
    }
  };

  console.log(order);

  return (
    <div className={styles.page}>
      <CurrentOrderContextProvider
        context={{
          order,
          setLocation,
          setLocationId,
          setMachine,
          setDuration,
          setPrice,
          setPaymentUrl,
        }}
      >
        <ProgressBar step={step} />
        <Header title={headerTitle} />
        {location && (
          <div
            onClick={handleButtonBackClick}
            className={styles.backIcon}
          ></div>
        )}
        {step === "locations" && <LocationsList data={locationsData} />}
        {step === "machines" && <MachinesList data={machinesData} />}
        {step === "payment" && <Payment />}
      </CurrentOrderContextProvider>
    </div>
  );
}

export default App;
