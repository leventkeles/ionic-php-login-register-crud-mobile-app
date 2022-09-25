import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../api.service';


@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.page.html',
  styleUrls: ['./profiles.page.scss'],
})
export class ProfilesPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _apiService: ApiService

    ) {
      this.route.params.subscribe((param:any) => {
        this.user_id = param.user_id;
        console.log(this.user_id);
        this.getUser(this.user_id);
      })

    }

  username: string;
  anggota: any;
  user_id:number;
  fullname: string;
  profile_desc: string;
  user_phone: string;
  user_mail: string;

  // image: any;
  // fileDirectory: null;
  // selectedFile = null;

  // selectedFile(event){
  //   this.image = event.target.files[0];
  // }

  // onClick(){
  //   const formData = new FormData();
  //   formData.append('image', this.image);
  //   this.http.post('http://localhost/serverapi1/uploads.php', formData).subscribe((response: any) => {
  //     console.log(response);
  //   });
  // }

  getUser(id){
    this._apiService.getUser(id).subscribe((res:any) => {
      console.log("SUCCESSGET", res);
      let user = res[0];
      this.fullname = user.fullname;
      this.profile_desc = user.profile_desc;
      this.username = user.username;
      this.user_mail = user.user_mail;
      this.user_phone = user.user_phone;
    },(err:any) => {
      console.log("ERROR", err)
    })
  }

  async ngOnInit() {

  }



//   onFileChanged(event) {
//     this.selectedFile = <File>event.target.files[0]
// }

//   onUpload() {

//   const uploadData = new FormData();
//   uploadData.append('file', this.selectedFile, this.selectedFile.name);
//   this.http.post('http://localhost/serverapi1/uploads.php', uploadData).subscribe(res => {
//     console.log(res);
//   });
// }

}
