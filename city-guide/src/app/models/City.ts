import { Photo } from './Photo';

export class City {
  id: number;
  name: string;
  description: string;
  userId: number;
  photos: Photo[];

  constructor(
    id: number,
    name: string,
    description: string,
    userId: number,
    photos: Photo[]
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.userId = userId;
    this.photos = photos;
  }
}
