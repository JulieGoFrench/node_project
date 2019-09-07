import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-file-upload-component',
  templateUrl: './my-file-upload-component.component.html',
  styleUrls: ['./my-file-upload-component.component.css']
})
export class MyFileUploadComponentComponent implements OnInit {
  ImageSource : string;
  constructor(Image : Blob) { let reader = new FileReader();  
    reader.readAsArrayBuffer(Image);
    this.ImageSource = window.URL.createObjectURL(reader.readAsArrayBuffer(Image));   }

  ngOnInit() {
  }

}
