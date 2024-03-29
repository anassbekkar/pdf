import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient) { }

  uploadFile(file: File): Promise<string> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post<string>('http://localhost:8080/upload-single-file', formData)
      .toPromise()
      .then(response => {
        console.log('File uploaded successfully:', response);
        return response as string;
      })
      .catch(error => {
        console.error('Error uploading file:', error);
        throw error;
      });
  }
}
