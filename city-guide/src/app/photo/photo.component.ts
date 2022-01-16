import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { AlertifyService } from '../services/alertify.service';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../models/Photo';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { CityService } from '../services/city.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
})
export class PhotoComponent implements OnInit {
  fileName = '';
  // origin: string = location.origin;
  origin: string = 'http://localhost:8080';

  cityPhotoAddForm: FormGroup;
  photo: any;

  photos: Photo[];
  uploader: FileUploader;
  hasBaseDropZoneOver: boolean;
  hasAnotherDropZoneOver: boolean;
  response: string;
  // TODO
  // baseUrl: string = 'http://localhost:8080';
  baseUrl: string = location.origin;

  currentMainPhoto: Photo;
  currentCityId: any;

  constructor(
    private authService: AuthService,
    private cityService: CityService,
    private alertifyService: AlertifyService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) {
    this.cityPhotoAddForm = this.createCityForm();

    this.photos = [];
    this.currentMainPhoto = new Photo('', '', false, '', '', -1);
    this.currentCityId = this.activatedRoute.snapshot.params['cityId'];

    // this.uploader = new FileUploader({
    //   url: this.baseUrl + 'api/cities/' + this.currentCityId + '/photos/upload',
    //   authToken: 'Bearer ' + localStorage.getItem('token'),
    //   isHTML5: true,
    //   allowedFileType: ['image'],
    //   removeAfterUpload: true,
    //   autoUpload: false,
    //   maxFileSize: 10 * 1024 * 1024,
    //   disableMultipart: true, // 'DisableMultipart' must be 'true' for formatDataFunction to be called.
    //   formatDataFunctionIsAsync: true,
    //   formatDataFunction: async (item: any) => {
    //     return new Promise((resolve, reject) => {
    //       resolve({
    //         name: item._file.name,
    //         length: item._file.size,
    //         contentType: item._file.type,
    //         date: new Date(),
    //       });
    //     });
    //   },
    // });

    // this.hasBaseDropZoneOver = false;
    // this.hasAnotherDropZoneOver = false;

    // this.response = '';

    // this.uploader.response.subscribe((res) => (this.response = res));

    this.uploader = new FileUploader({
      url:
        this.baseUrl + '/api/cities/' + this.currentCityId + '/photos/upload',
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
      authToken: 'Bearer ' + localStorage.getItem('token'),
    });

    this.uploader.options.authTokenHeader = 'Authorization';
    // this.uploader.options.headers = [];

    this.hasBaseDropZoneOver = false;
    this.hasAnotherDropZoneOver = false;

    this.response = '';

    this.uploader.response.subscribe((res) => (this.response = res));

    // console.log(this);
  }

  ngOnInit(): void {
    // this.initializeUploader();
  }

  createCityForm() {
    return this.formBuilder.group({
      image: new FormControl('', Validators.required),
    });
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

  addPhoto() {
    if (this.cityPhotoAddForm.valid) {
      this.photo = Object.assign({}, this.cityPhotoAddForm.value);
      console.log(this.photo);

      this.cityService.addPhoto(this.currentCityId, this.photo).subscribe({
        next: (next) => {
          this.alertifyService.success('Photo added successfully');
          this.cityPhotoAddForm.reset();
          // this.photos.push(next);
        },
        error: (error) => {
          this.alertifyService.error(error);
        },
      });
    }
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;

      const formData = new FormData();

      formData.append('thumbnail', file);

      const upload$ = this.httpClient.post(
        this.origin + '/api/cities/' + this.currentCityId + '/photos/upload',

        formData,
        {
          headers: {
            // 'Content-Type': 'application/json',
            // Accept: 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        }
      );

      upload$.subscribe();
    }
  }
}
