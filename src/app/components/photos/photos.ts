import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-photos',
  imports: [NgFor, NgIf],
  templateUrl: './photos.html',
  styleUrl: './photos.css'
})
export class Photos {
  photosGallery:Array<any> = []
  folderPhotos:Array<any> = []
  image:any = ''
  showPhotos:boolean=false;

  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.photosGallery = [
    {
    foldername: 'Eluru event',
    images: ['folder1/0-1.jpg','folder1/0-2.jpg','folder1/0-3.jpg','folder1/0-4.jpg','folder1/0-5.jpg','folder1/0-6.jpg'],
    },
    {
      foldername: 'General',
      images: ['photos1.jpg', 'photos2.jpg', 'photos3.jpg', 'photos4.jpg', 'photos5.jpg'],
    },
  ]
  }

  folderClicked(name:any, index:any){
    console.log(name, index);
    // this.folderPhotos = [{
    //   foldername:'folder1',
    //   images: ['folder1/0-1.jpg','folder1/0-2.jpg','folder1/0-3.jpg','folder1/0-4.jpg','folder1/0-5.jpg','folder1/0-6.jpg']
    // }]
    this.showPhotos = true;
    this.folderPhotos.push(this.photosGallery[index])
    console.log(this.folderPhotos)
    this.image = this.folderPhotos[0].images[0]
  }

  imageClicked(i:any){
    console.log(this.folderPhotos[0].images[i])
    this.image = this.folderPhotos[0].images[i]
  }

}
