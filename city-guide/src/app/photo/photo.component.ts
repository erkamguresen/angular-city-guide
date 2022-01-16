import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { AlertifyService } from '../services/alertify.service';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../models/Photo';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
})
export class PhotoComponent implements OnInit {
  photos: Photo[];
  uploader: FileUploader;
  hasBaseDropZoneOver: boolean;
  hasAnotherDropZoneOver: boolean;
  response: string;
  // TODO
  baseUrl: string = 'http://localhost:8080';
  currentMainPhoto: Photo;
  currentCityId: any;

  constructor(
    private authService: AuthService,
    private alertifyService: AlertifyService,
    private activatedRoute: ActivatedRoute
  ) {
    this.photos = [];
    this.uploader = new FileUploader({
      url: this.baseUrl + 'api/cities/' + this.currentCityId + '/photos/upload',
      authToken: 'Bearer ' + localStorage.getItem('token'),
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024,
      disableMultipart: true, // 'DisableMultipart' must be 'true' for formatDataFunction to be called.
      formatDataFunctionIsAsync: true,
      formatDataFunction: async (item: any) => {
        return new Promise((resolve, reject) => {
          resolve({
            name: item._file.name,
            length: item._file.size,
            contentType: item._file.type,
            date: new Date(),
          });
        });
      },
    });

    this.hasBaseDropZoneOver = false;
    this.hasAnotherDropZoneOver = false;

    this.response = '';

    this.uploader.response.subscribe((res) => (this.response = res));

    this.currentMainPhoto = new Photo('', '', false, '', '', -1);
    this.currentCityId = this.activatedRoute.snapshot.params['cityId'];
    // console.log(this);
  }

  ngOnInit(): void {
    this.initializeUploader();
  }

  initializeUploader(): void {
    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if (response) {
        const res: Photo = JSON.parse(response);
        const photo = new Photo(
          res.cityId,
          res.description,
          res.isMain,
          res.url,
          res.publicId,
          res.userId
        );
        this.photos.push(photo);
        if (photo.isMain) {
          this.currentMainPhoto = photo;
        }
      }
    };
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }
}
