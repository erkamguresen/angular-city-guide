import { Photo } from './Photo';

export class City {
  id: number;
  name: string;
  description: string;
  userId: string;
  url: string;
  country: string;
  countryCode: string;
  photos: Photo[];

  constructor(
    id: number,
    name: string,
    description: string,
    userId: string,
    country: string,
    countryCode: string,
    url: string = '',
    photos: Photo[] = []
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.userId = userId;
    this.url = url;
    this.country = country;
    this.countryCode = countryCode;
    this.photos = photos;
  }
}
