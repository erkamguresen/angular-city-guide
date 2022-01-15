import { Photo } from './Photo';

export class City {
  id: number;
  name: string;
  description: string;
  userId: number;
  url: string;
  photos: Photo[];

  constructor(
    id: number,
    name: string,
    description: string,
    userId: number,
    url: string,
    photos: Photo[]
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.userId = userId;
    this.url = url;
    this.photos = photos;
  }
}
