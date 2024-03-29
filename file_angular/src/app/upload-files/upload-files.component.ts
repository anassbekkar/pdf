import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent {
  uploadedFiles: File[] = [];

  onFileSelected(event: any): void {
    const files: FileList = event.target.files;
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file: File = files[i];
        this.uploadedFiles.push(file);
      }
    }
  }

  onUpload(): void {
    // Code pour télécharger les fichiers sur le serveur
    console.log('Fichiers téléchargés :', this.uploadedFiles);
    // Vous pouvez implémenter le téléchargement des fichiers sur le serveur ici
  }
}

