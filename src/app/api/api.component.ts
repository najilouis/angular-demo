import { Component, OnInit } from '@angular/core';
// import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  sid: any = '';
  constructor(private http: Http) { }

  ngOnInit() { 

  }

  getData(){
    // this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
    //   console.log(data)
    // });
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // headers.append('Access-Control-Allow-Origin', '*');
    // headers.append("Access-Control-Allow-Credentials", "true"); 
    // headers.append("Authorization", "Basic " + btoa("admin:"));
    // headers.append('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization, cookie');
    // headers.append("Access-Control-Allow-Headers", "Access-Control-Allow-Origin, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    // headers.append('Access-Control-Allow-Methods', 'GET');
    // headers.append("Access-Control-Allow-Headers", "Bosch-Sid");
    headers.append('Bosch-Sid', this.sid);
    let params = new URLSearchParams();
    params.append("sid", this.sid);
    

    // let params = new HttpParams();    
    // params = params.set('sid', "111");

    this.http.get('http://ccs1000d.local/api/speakers', { headers: headers, params: params }).subscribe(data => {
        console.log(data)
      });
  }

  postData(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // headers.append('authentication', `hello`);

  //   let options = new RequestOptions({headers: headers});
  //   this.http.post("https://jsonplaceholder.typicode.com/posts",
  //                   JSON.stringify({id: 334, name: 'some'}),options).subscribe();

  // let headers = new HttpHeaders();
  //   headers.append('Content-Type', 'application/json');
  //   headers.append('authentication', `hello`);

    let options = new RequestOptions({headers: headers});
    this.http.post("http://ccs1000d.local/api/login",
      JSON.stringify({username: "admin", password: '', override: true}),options).subscribe(data=>{
        let result = JSON.parse(data['_body']);
        this.sid = result['sid'];
        document.cookie = "sid="+this.sid;  
        console.log(this.sid)

      });

  }

  // login(){

  //   let headers = new HttpHeaders();
  //   headers.append('Content-Type', 'application/json; charset=utf-8');
  //   // headers.append('Access-Control-Allow-Origin', '*');
  //   // headers.append('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization');
  //   // headers.append('Access-Control-Allow-Methods', 'GET');
  //   // headers.append('sid', this.sid);
  //   // let params = new URLSearchParams();
  //   // params.append("sid", '111');

  //   // let params = new HttpParams(); 
  //   // params.set('username', 'admin');
  //   // params.set('password', '');   
  

  //   this.http.post('http://192.168.1.100/api/login',JSON.stringify({username: "admin", password: ''}), { headers: headers }).subscribe(data => {
  //       console.log(data)
        
  //     });
  // }

  // sysInfo(){

  //   let headers = new HttpHeaders();
  //   headers.append('Content-Type', 'application/json; charset=utf-8');
  //   headers.append('sid', '111');
  //   let params = new HttpParams();    
  //   params = params.set('sid', "111");

  //   this.http.get('http://192.168.1.100/api/system-info', { headers: headers , params: params}).subscribe(data => {
  //       console.log(data)
        
  //     });

  // }

}
