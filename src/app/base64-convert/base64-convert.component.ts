import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Base64Service } from '../Service/base64.service';
import { BasImage } from './base64-convert.component.model';

@Component({
  selector: 'app-base64-convert',
  templateUrl: './base64-convert.component.html',
  styleUrls: ['./base64-convert.component.scss']
})
export class Base64ConvertComponent implements OnInit {

  formValue !: FormGroup;
  myImage : any = '';
  Image : any = '';

  BasImageObj : BasImage = new BasImage();

  constructor(private base64sevice : Base64Service, private formBuilder : FormBuilder,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      image : [''],
      imageId: [''],
      boAcReqId : [''],
      branchCode : [''],
      imageType: [''],
      operationStamp: [''],
      timeStamp: [''],
      status: [''],
      updateBy: [''],
      updateDate: [''],
    })
    this.ImageGetById();
  }

  ImageGetById(){
    this.base64sevice.GetImageById(1).subscribe(res=>{
      // console.log(res);
       this.myImage =res.image;
      let objectURL = 'data:image/png;base64,' + res.image;
      // console.log(objectURL)
      this.myImage = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      // this.ImageLoaded(res);
    },
    err=>{
     alert(err)
    });
  }


  NewImageSave(){
    console.log("Successfully!")
    console.log("FormValue :-"+this.formValue.value.image)
  }



  
}
