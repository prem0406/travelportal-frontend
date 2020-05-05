import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private httpClient: HttpClient) { }

  uploadFile(ticketId: number, uploadImageData :FormData){
    return this.httpClient.post(`http://localhost:8080/image/upload/${ticketId}`, uploadImageData, { observe: 'response' });

  }

  getFile(ticketId: number) {
    return this.httpClient.get(`http://localhost:8080/image/get/${ticketId}`);
  }


}
