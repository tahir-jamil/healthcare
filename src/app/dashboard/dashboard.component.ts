// tslint:disable-next-line:ordered-imports

import { Label } from "ui/label";

import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

import * as platformModule from "tns-core-modules/platform";

@Component({
  selector: "ns-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
  moduleId: module.id

})

export class DashboardComponent implements OnInit {

  heroes =  [
    {
        name: "Windstorm",
        state: "inactive"
    },
    {
        name: "Batman",
        state: "active"
    }
];

  @ViewChild("label") label: ElementRef;
  boxHeight: any = "";
  boxWidth: any = "";

  dashboardVisiblity = true;

  imageWidth: any = "";
  imageHeight: any = "";

  actImageWidth: any = "";
  actImageHeight: any = "";
  titleActHeight: any = "";

  labelHeight: any = "";

  // tslint:disable-next-line:no-empty
  constructor() { }

  toggleState(hero) {
    hero.state = hero.state === "active" ? "inactive" : "active";
  }
  // tslint:disable-next-line:no-empty

  ngOnInit(): void {
    // Init your component properties here.
    const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.boxHeight = deviceHeight * 0.20;
    this.boxWidth = deviceWidth * 0.38;
    this.imageWidth = deviceHeight * 0.13;
    this.imageHeight = deviceWidth * 0.18;

    this.actImageWidth = deviceHeight * 0.15;
    this.actImageHeight = deviceWidth * 0.22;
    this.titleActHeight = deviceHeight * 0.08;

  }

  onloaded() {
    this.labelHeight = this.label.nativeElement.getMeasuredHeight();
  }

  positiveEmotions() {
    this.dashboardVisiblity = false;
  }

  iconTap() {
    this.hideLabel();
  }

  hideLabel() {
    this.label.nativeElement.animate({
      scale: { x: 1, y: 0 },
      duration: 500
    }).then(() => {
      console.log("Animation finished.");
    }).catch((e) => {
      console.log(e.message);
    });
  }

  showLabel() {
    this.label.nativeElement.animate({
      scale: { x: 1, y: 1 },
      duration: 500
    }).then(() => {
      console.log("Animation finished.");
    }).catch((e) => {
      console.log(e.message);
    });
  }

}
