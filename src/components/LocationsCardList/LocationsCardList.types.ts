export interface ILocationData {
  id: number;
  title: string;
  city: string;
  city_en: string;
  time_zone: string;
  address: string;
}

export interface ILocationsCardList {
  city: string;
  data: ILocationData[];
}
