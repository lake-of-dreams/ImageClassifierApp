import { Component } from '@angular/core';
import {
  Ng4FilesService,
  Ng4FilesConfig,
  Ng4FilesSelected,
  Ng4FilesStatus
} from 'angular4-files-upload';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public selectedFiles;
  
 public filesSelect(selectedFiles: Ng4FilesSelected): void {
     if (selectedFiles.status !== Ng4FilesStatus.STATUS_SUCCESS) {
       this.selectedFiles = selectedFiles.status;
       return;
       
       // Hnadle error statuses here
     }
  
     this.selectedFiles = Array.from(selectedFiles.files).map(file => file.name);
   }
}
