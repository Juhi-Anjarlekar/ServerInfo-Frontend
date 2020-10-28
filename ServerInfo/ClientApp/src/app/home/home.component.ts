import { Component } from '@angular/core';
import { ServergroupsModel, ServerModel } from './home.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent {
  
  public serverGroups: ServergroupsModel[] = [];
  public serverInfo: ServerModel = new ServerModel;

  constructor(private http: HttpClient) {

    this.http.get<ServergroupsModel[]>('http://localhost:8080/serverInfo').subscribe(result => {
      
      this.serverGroups = result;

      for (var i = 0; i < this.serverGroups.length; i++) {
        for (var j = 0; j < this.serverGroups[i].servers.length; j++) {
          this.serverGroups[i].servers[j].ip = result[i].servers[j].ip;
        }
      }
      
    }, error => console.error(error));
    
  }

  public onExecute(ipAddress) {

    this.http.get<ServerModel>('http://localhost:8080/serverInfo/' + ipAddress).subscribe(result => {
      
      this.serverInfo.isClicked = false;
      this.serverInfo = new ServerModel();
      this.serverInfo = <ServerModel>result;
      this.serverInfo.isClicked = true;

      //Printing groupname, pathatserver and ip in console
      console.log("Group name : " + this.serverInfo.groupname);
      console.log("Path at server : " + this.serverInfo.pathatserver);
      console.log("IP : " + this.serverInfo.ip);
      
    }, error => console.error(error));
  }

}

