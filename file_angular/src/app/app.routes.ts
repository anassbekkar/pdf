import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileListComponent } from './components/file-list/file-list.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';

export const routes: Routes = [
  { path: 'upload', component: UploadFilesComponent },
  { path: 'file-list', component: FileListComponent },
  // Other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
