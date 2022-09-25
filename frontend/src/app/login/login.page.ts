import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from '../../providers/post-provider';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string;
  password: string;

  constructor(
    private router: Router,
    private postPvdr: PostProvider,
    public toastCtrl: ToastController,
    private storage: Storage,
    public menuCtrl: MenuController
  ) { }

  ngOnInit() {
    this.menuCtrl.close();

  }

  formRegister() {
    this.router.navigate(['/register']);
  }

  async prosesLogin() {

    if (this.username != "" && this.password != "") {
      let body = {
        username: this.username,
        password: this.password,
        aksi: 'login'
      };
      this.postPvdr.postData(body, 'proses-api.php').subscribe(async data => {
        var alertmsg = data.msg;
        if (data.success) {
          this.storage.set('session_storage', data.result); //Crea Storage

  this.router.navigateByUrl('tabs/homepage')
  .then(() => {
    window.location.reload();
  });

          const toast = await this.toastCtrl.create({
            message: 'Giriş Başarılı!',
            duration: 2000
          });
          toast.present();
          console.log(data);
        }
        else {
          const toast = await this.toastCtrl.create({
            message: alertmsg,
            duration: 2000
          });
          toast.present();
        }
      });

    }

    else {
      const toast = await this.toastCtrl.create({
        message: 'Kullanıcı adı veya şifre geçersiz!',
        duration: 2000
      });
      toast.present();
    }





  }




}

