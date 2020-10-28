export class ServergroupsModel {
    constructor(
      public groupname: string = "",
      public serverport: string = "",
      public pathatserver : string = "",
      public servers: any[]=[],
      public ip: string = ""
    ) {
    }
}


export class ServerModel {
  constructor(
    public groupname: string = "",
    public pathatserver: string = "",
    public ip: string = "",
    public isClicked: boolean = false
  ) {
  }
}
