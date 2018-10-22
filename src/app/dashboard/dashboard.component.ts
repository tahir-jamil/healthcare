import { Component, OnInit } from "@angular/core";
import * as platformModule from "tns-core-modules/platform";

@Component({
  selector: "ns-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
  moduleId: module.id
})
export class DashboardComponent implements OnInit {

  boxHeight: any = "";
  boxWidth: any = "";

  
  imageWidth: any = "";
  imageHeight: any = "";

  // tslint:disable-next-line:no-empty
  constructor() { }

  // tslint:disable-next-line:no-empty

  ngOnInit(): void {
    // Init your component properties here.
    const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.boxHeight = deviceHeight * 0.20;
    this.boxWidth = deviceWidth * 0.38;
    this.imageWidth = deviceHeight * 0.13;
    this.imageHeight = deviceWidth * 0.18;
  }
}
