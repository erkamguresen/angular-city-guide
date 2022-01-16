export class Photo {
  //   id: string;
  cityId: string;

  description: string;
  isMain: boolean;
  url: string;
  publicId: string;
  userId: number;
  dateAdded: Date;

  constructor(
    cityId: string,
    description: string,
    isMain: boolean,
    url: string,
    publicId: string,
    userId: number,
    dateAdded: Date = new Date()
  ) {
    this.cityId = cityId;
    this.dateAdded = dateAdded;
    this.description = description;
    this.isMain = isMain;
    this.url = url;
    this.publicId = publicId;
    this.userId = userId;
  }
}
