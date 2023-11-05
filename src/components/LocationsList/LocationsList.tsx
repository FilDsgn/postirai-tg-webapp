import { uniq } from "lodash";
import { useState } from "react";

import LocationsCardList from "../LocationsCardList/LocationsCardList";
import SearchForm from "../SearchForm/SearchForm";
import style from "./LocationsList.module.css";

interface ILocationsData {
  id: number;
  title: string;
  city: string;
  city_en: string;
  time_zone: string;
  address: string;
}

interface ILocationsList {
  data: ILocationsData[];
}

const LocationsList = ({ data = [] }: ILocationsList) => {
  const [locationsList, setLocationsList] = useState(data);

  const handleSearchLocations = (searchText: string) => {
    const results = data.filter((i) => {
      return (
        i.address.toLowerCase().includes(searchText) ||
        i.city_en.toLowerCase().includes(searchText) ||
        i.city.toLowerCase().includes(searchText)
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
      {cities.length === 0 && (
        <span className={style.message}>Ничего не найдено</span>
      )}
    </main>
  );
};

export default LocationsList;
