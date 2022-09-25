import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-advert-detail',
  templateUrl: './advert-detail.page.html',
  styleUrls: ['./advert-detail.page.scss'],
})
export class AdvertDetailPage implements OnInit {

  id: any;
  advert_title: any;
  advert_desc: any;
  location: any;
  price: any;
  deadline: any;
  workarea:any;
  userId_FK: any;
  invertImg: any;
  minDate: string = new Date().toISOString();

  advertt: any = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _apiService: ApiService
  ) {

    this.route.params.subscribe((param:any) => {
      this.id = param.id;
      console.log(this.id);
      this.getAdvert(this.id);
    })

   }

  ngOnInit() {

  }

  getAdvert(id){
    this._apiService.getAdvert(id).subscribe((res:any) => {
      console.log("SUCCESSGET", res);
      let advertt = res[0];
      this.advert_title = advertt.advert_title;
          this.advert_title = advertt.advert_title;
          this.location = advertt.location;
          this.price = advertt.price;
          this.deadline = advertt.deadline;
          this.workarea = advertt.workarea;
          this.userId_FK = advertt.userId_FK;
          this.invertImg = advertt.invertImg;
          this.advert_desc = advertt.advert_desc;
    },(err:any) => {
      console.log("ERROR", err)
    })
  }

  // getAdvert(id){
  //   this._apiService.getAdvert(id).subscribe((res:any) => {
  //     console.log("SUCCESSGET", res);
  //     let advertt = res[0];
  //     this.advert_title = advertt.advert_title;
  //     this.advert_title = advertt.advert_title;
  //     this.location = advertt.location;
  //     this.price = advertt.price;
  //     this.deadline = advertt.deadline;
  //     this.workarea = advertt.workarea;
  //     this.userId_FK = advertt.userId_FK;
  //     this.invertImg = advertt.inverImg;
  //   },(err:any) => {
  //     console.log("ERROR", err)
  //   })
  // }



}
