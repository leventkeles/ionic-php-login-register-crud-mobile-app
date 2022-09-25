import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  userData:any;

  constructor(
    public http: HttpClient
  ) {


  }

  invertAdd(data){
    return this.http.post('http://localhost/paradar/create.php', data);
  }

  getAdverts(){
    return this.http.get('http://localhost/paradar/getAdverts.php');
  }

  deleteAdvert(id){
    return this.http.delete('http://localhost/paradar/delete.php?id='+id);

  }

  getAdvert(id){
    return this.http.delete('http://localhost/paradar/getadvert.php?id='+id);
  }

  getUser(id){
    return this.http.delete('http://localhost/paradar/getuserinfo.php?user_id='+id);
  }

  getMyAdverts(user_id){
    return this.http.get('http://localhost/paradar/getmyadverts.php?user_id='+user_id);

  }

  advertGuncelle(id, data){
    return this.http.put('http://localhost/paradar/advertguncelle.php?id='+id, data);
  }

  profileUpdate(user_id, data){
    return this.http.put('http://localhost/paradar/profileupdate.php?user_id='+user_id, data);
  }

  //add new user
//   public adduser(userData)
//   {
//     return this.http.post('http://192.168.1.27/php-ionic-crud/users.php'
// , userData).subscribe((res: Response) => {

//   });
//   }

}
