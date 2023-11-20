interface ICard {
  id: number;
  title: string;
  city: string;
  city_en: string;
  time_zone: string;
  address: string;
}

export interface ILocationCard {
  card: ICard;
}
