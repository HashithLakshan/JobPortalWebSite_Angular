import { Component, OnInit } from '@angular/core';
import { CatagoryService } from 'src/app/service/coustomer/catagory.service';
import { Categaroy } from 'src/app/shared/category';

@Component({
  selector: 'app-choose-snipper',
  templateUrl: './choose-snipper.component.html',
  styleUrls: ['./choose-snipper.component.css']
})
export class ChooseSnipperComponent implements OnInit {

  catagery: Categaroy[] =[] ;
  

  constructor(private categoryService: CatagoryService){}

  ngOnInit():void{
    this.getAllCategory();
  }

  getAllCategory():void{
    this.categoryService.getAllCatagery().subscribe({
      next:(res)=>{
        console.log(res)
        this.catagery = res.payload[0]
      }
    })
  }


  // test(byteArray: Uint8Array): void {
  //   // Convert byte array to base64 string
  //   const base64String = this.arrayBufferToBase64(byteArray);

  //   // Detect the MIME type (assuming it's PNG for this example)
  //   const mimeType = 'image/png';

  //   // Construct the data URL
  //   this.imgUrlTest = `data:${mimeType};base64,${base64String}`;
  // }

  // // Helper method to convert byte array to base64 string
  // private arrayBufferToBase64(buffer: Uint8Array): string {
  //   let binary = '';
  //   const bytes = new Uint8Array(buffer);
  //   const len = bytes.byteLength;
  //   for (let i = 0; i < len; i++) {
  //     binary += String.fromCharCode(bytes[i]);
  //   }
  //   return window.btoa(binary);
  // }

  // test(img:any){

  //   this.imgUrlTest= 'data:image/png;base64,' + img;
  // }

   getPhotoUrl(imgByte: Uint8Array): string {
    const binary = String.fromCharCode(...imgByte);
   return btoa(binary);
   }
  

 //  getPhotoUrl(blob: any ): string {
    
  // //   let binary = '';
  // //   const len = blob.byteLength;
  // //   for (let i = 0; i < len; i++) {
  // //     binary += String.fromCharCode(blob[i]);
  // //   }
  // //   return 'data:image/jpeg;base64,' + btoa(binary);
  // return URL.createObjectURL(blob);
  // }

  // manageSaveQr(data) {
  //   const canvas = document.createElement('canvas');
  //   const ctx = canvas.getContext('2d');
  
  //   const img = new Image();
  //   img.onload = () => {
  //     canvas.width = img.width;
  //     canvas.height = img.height;
  //     ctx.drawImage(img, 0, 0, img.width, img.height);
  
  //     const dataUrl = canvas.toDataURL('image/png');
  //     this.downloadQRImage(dataUrl);
  //   };
  //   img.src = 'data:image/png;base64,' + data.data.qrByte;
  // }


   }
