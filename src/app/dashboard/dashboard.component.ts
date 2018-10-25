// tslint:disable-next-line:ordered-imports

import { Label } from "ui/label";

import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

import * as platformModule from "tns-core-modules/platform";
import { VirtualTimeScheduler } from "rxjs";
import { Color } from "tns-core-modules/color/color";

@Component({
  selector: "ns-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
  moduleId: module.id

})

export class DashboardComponent implements OnInit {

  heroes = [
    {
      name: "Windstorm",
      state: "inactive"
    },
    {
      name: "Batman",
      state: "active"
    }
  ];


  boxHeight: any = "";
  boxWidth: any = "";

  dashboardVisiblity = true;

  imageWidth: any = "";
  imageHeight: any = "";

  actImageWidth: any = "";
  actImageHeight: any = "";
  titleActHeight: any = "";

  @ViewChild("labelThree") labelThreeRef: ElementRef;
  @ViewChild("iconOne") iconOne: ElementRef;
  @ViewChild("iconTwo") iconTwo: ElementRef;
  @ViewChild("iconThree") iconThree: ElementRef;
  @ViewChild("headingOne") headingOne: ElementRef;
  @ViewChild("headingTwo") headingTwo: ElementRef;
  @ViewChild("headingThree") headingThree: ElementRef;
  getVisiblity = "hidden";
  labelOne = 0;
  labelTwo = 0;
  labelThree = 0;
  maxlabelHeight = 0;

  activeLabelOne = false;
  activeLabelTwo = false;
  activeLabelThree = false;

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

    this.actImageWidth = deviceHeight * 0.15;
    this.actImageHeight = deviceWidth * 0.22;
    this.titleActHeight = deviceHeight * 0.075;
  }

  positiveEmotions() {
    this.dashboardVisiblity = false;
  }


  onLoaded() {
  }


  // this.hideLabel();
  iconTap(id) {
    this.maxlabelHeight = this.labelThreeRef.nativeElement.getMeasuredHeight() + 30;

    // if (this.activeLabelThree == false){
    //     this.activeLabelThree == true;
    // }



    switch (id) {
      case 1:
        {
          if (this.activeLabelOne == false) {
            this.activeLabelOne = true;
            this.showLabel(id);
            this.iconOne.nativeElement.animate({
              rotate: 90,
              duration: 400,
            });
            this.headingOne.nativeElement.animate({
              backgroundColor: new Color("rgb(244, 244, 244)"),
              duration: 400,
            });

          } else {
            this.activeLabelOne = false;
            this.hideLabel(id);
            this.iconOne.nativeElement.animate({
              rotate: 0,
              duration: 400,
            });
            this.headingOne.nativeElement.animate({
              backgroundColor: new Color("#ffffff"),
              duration: 400,
            });
          }
        }
        break;
      case 2: {
        if (this.activeLabelTwo == false) {
          this.activeLabelTwo = true;
          this.showLabel(id);
          this.iconTwo.nativeElement.animate({
            rotate: 90,
            duration: 400,
          });
          this.headingTwo.nativeElement.animate({
            backgroundColor: new Color("rgb(244, 244, 244)"),
            duration: 400,
          });

        } else {
          this.activeLabelTwo = false;
          this.hideLabel(id);
          this.iconTwo.nativeElement.animate({
            rotate: 0,
            duration: 400,
          });
          this.headingTwo.nativeElement.animate({
            backgroundColor: new Color("#ffffff"),
            duration: 400,
          });
        }
      }
        break;
      case 3: {
        if (this.activeLabelThree == false) {
          this.activeLabelThree = true;
          this.showLabel(id);
          this.iconThree.nativeElement.animate({
            rotate: 90,
            duration: 400,
          });
          this.headingThree.nativeElement.animate({
            backgroundColor: new Color("rgb(244, 244, 244)"),
            duration: 400,
          });
          
        } else {
          this.activeLabelThree = false;
          this.hideLabel(id);
          this.iconThree.nativeElement.animate({
            rotate: 0,
            duration: 400,
          });
          this.headingThree.nativeElement.animate({
            backgroundColor: new Color("#ffffff"),
            duration: 400,
          });
        }
      }
        break;

      default:
        break;
    }

  }


  get getlabelOne() {
    return this.labelOne;
  }

  get getlabelTwo() {
    return this.labelTwo;
  }

  get getlabelThree() {
    return this.labelThree;
  }

  hideLabel(id) {

    switch (id) {
      case 1:
        {
          setTimeout(() => {
            this.labelOne = this.labelOne - 1;
            if (this.labelOne !== 0) {
              this.hideLabel(id);
            }
          }, 2.2);
        }
        break;
      case 2: {
        setTimeout(() => {
          this.labelTwo = this.labelTwo - 1;
          if (this.labelTwo !== 0) {
            this.hideLabel(id);
          }
        }, 2.2);
      }
        break;
      case 3: {
        setTimeout(() => {
          this.labelThree = this.labelThree - 1;
          if (this.labelThree !== 0) {
            this.hideLabel(id);
          }
        }, 2.2);
      }
        break;

      default:
        break;
    }

  }


  showLabel(id) {
    switch (id) {
      case 1:
        {
          setTimeout(() => {
            this.labelOne = this.labelOne + 4;
            if (this.labelOne <= this.maxlabelHeight / 3) {
              this.showLabel(id);
            }
          }, 10);
        }
        break;
      case 2: {
        setTimeout(() => {
          this.labelTwo = this.labelTwo + 4;
          if (this.labelTwo <= this.maxlabelHeight / 3) {
            this.showLabel(id);
          }
        }, 10);
      }
        break;
      case 3: {
        setTimeout(() => {
          this.labelThree = this.labelThree + 4;
          if (this.labelThree <= this.maxlabelHeight / 3) {
            this.showLabel(id);
          }
        }, 10);
      }
        break;

      default:
        break;
    }

  }

}
