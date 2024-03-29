import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AppRoutingModule } from './app.routes'; // Adjust the path as needed
import { FileListComponent } from './components/file-list/file-list.component'; // Adjust the path as needed
import { FileUploadService } from './services/file-upload.service'; // Adjust the path as needed
import { UploadFilesComponent } from './upload-files/upload-files.component'; // Adjust the path as needed


@NgModule({
  declarations: [
    UploadFilesComponent,
    FileListComponent
    // Other components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Import the routing module here
    PdfViewerModule
  ],
  providers: [
    FileUploadService,

    // Other services
  ],
  bootstrap: [UploadFilesComponent] // Adjust if needed, consider using AppComponent as the bootstrap component
})
export class AppModule { }
