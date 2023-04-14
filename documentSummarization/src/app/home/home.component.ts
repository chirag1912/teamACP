import { Component } from '@angular/core';
// import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  username= "Abhi";

  // constructor(private authService: AuthService) {
  //   this.username = authService.getUser().username;
  // }



  uploadFile(event: any) {
    const file = event.target.files[0];
    const fileType = event.target.value.split('.').pop();
  
    if (fileType !== 'txt' && fileType !== 'mp3' && fileType !== 'wav' && fileType !== 'flac') {
      alert('Invalid file type!');
      return;
    }
  
    // TODO: Upload the file using the REST API
  }
  
}
