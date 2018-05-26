import { Component } from '@angular/core';
import { HttpClient, HttpHeaders , HttpParams} from '@angular/common/http';
import * as crypto from 'crypto-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(private http: HttpClient) {
    // console.log(crypto)
  }

  ngOnInit(){
    this.clickMe()
  }

  clickMe(){
    // let user = "ali";
    // let pass = "pass123";
    
    // let encrypted = crypto.AES.encrypt(user, pass);
    // console.dir(encrypted.toString());
    // let decrypted = crypto.AES.decrypt(encrypted, pass);
    // console.dir(decrypted.toString(crypto.enc.Utf8));
  }

  generateToken()
  {
    let userid = '123';
    let key = "coded";
    //let encUserID = crypto.AES.encrypt(userid, key);
    const headerOptions = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    let params = new HttpParams()
    params = params.set('userID', userid);
    params = params.set('encode', '1');

    this.http.post('http://localhost/crypto-jwt/ali/jwtTest.php', params, {
      headers: headerOptions,
      responseType: 'json'
    }).subscribe(
      res=>{
        console.log("Result returned from server: "+res);
        localStorage.setItem('user_id_token', JSON.stringify(res));
        console.log("From localStorage: "+localStorage.getItem('user_id_token'))
      },
      error=>{
        console.log(error);
      }
    )
  }

  decodeToken(){
    const headerOptions = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    let val = localStorage.getItem('user_id_token').replace('"','');
    let params = new HttpParams().set('jwtToDecode', val);
    this.http.post('http://localhost/crypto-jwt/ali/jwtTest.php', params, {
      headers: headerOptions,
      responseType: 'json'
    }).subscribe(
      res=>{
        console.log("Original value from server: "+res);
      },
      error=>{
        console.log(error);
      }
    )
  }
}
