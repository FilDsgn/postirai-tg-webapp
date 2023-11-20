import { replace, uniq } from "lodash";
import { useEffect, useState } from "react";

import * as laundryApi from "../../utils/laundryApi";
import Loader from "../Loader/Loader";

import LocationsCardList from "../LocationsCardList/LocationsCardList";
import SearchForm from "../SearchForm/SearchForm";
import style from "./LocationsList.module.css";
import { ILocationsData } from "./LocationsList.types";

const LocationsList = () => {
  const [laundriesData, setLaundriesData] = useState([]);
  const [locationsList, setLocationsList] = useState(laundriesData);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    laundryApi
      .getLaundries()
      .then((laundries) => {
        setLaundriesData(laundries.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setLocationsList(laundriesData);
  }, [laundriesData]);

  // Пофиксить поиск
  const handleSearchLocations = (searchText: string) => {
    const regex = new RegExp(searchText.replace(/[ -.,]/g, ""), "gi");
    const results = laundriesData.filter((i: ILocationsData) => {
      return (
        // i.address.toLowerCase().includes(searchText) ||
        // i.city_en.toLowerCase().includes(searchText) ||
        // i.city.toLowerCase().includes(searchText) ||
        // (i.city.toLowerCase() + " " + i.address.toLowerCase()).includes(
        //   searchText.toLowerCase()
        // )

        (i.city + " " + i.address)
          .toLowerCase()
          .toString()
          .replace(/[ -.,]/g, "")
          .match(regex)
      );
    });

    setLocationsList(results);
  };

  const cities = uniq(locationsList.map((i: ILocationsData) => i.city));

  return (
    <main className={style.content}>
      <SearchForm onSearch={handleSearchLocations} />
      <ul className={style.locationCards}>
        {cities.map((city) => {
          return (
            <LocationsCardList city={city} data={locationsList} key={city} />
          );
        })}
      </ul>
      {isLoading && <Loader />}
      {cities.length === 0 && !isLoading && (
        <span className={style.message}>Ничего не найдено</span>
      )}
    </main>
  );
};

export default LocationsList;
