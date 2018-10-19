import { Component, Input, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import * as platformModule from "tns-core-modules/platform";

@Component({
  selector: "tu-bottom-bar",
  templateUrl: "./bottom-bar.component.html",
  styleUrls: ["./bottom-bar.component.css"],
  moduleId: module.id
})
export class BottomBarComponent implements OnInit {

  @Input() visible = true;

  bottomMenu = [
    { name: "Home" , icon: "&#xe80c;"},
    { name: "Timeline" , icon: "&#xe916;"},
    { name: "Cooch" , icon: "&#xe42e;"},
    { name: "Relax" , icon: "&#xe80c;"},
    { name: "Learn" , icon: "&#xe80c;" }
  ];

  bottomBarHeight: any = "";
  imgHeight: any = "";
  activeIndex = 0;

  constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit() {
    const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.imgHeight = deviceHeight * 0.10;
  }

  onChangeIndex(args) {
    this.activeIndex = args;
    this.visible = true;

    switch (this.activeIndex) {
      case 0: {
        this.routerExtensions.navigate(["/home"], {
            transition: {
            name: "fade",
            curve: "linear"
            }
        });
      }
              break;
      case 1: {
        this.routerExtensions.navigate(["home/timeline"], {
            transition: {
            name: "fade",
            curve: "linear"
            }
        });
      }
              break;
      case 2: {
        this.routerExtensions.navigate(["home/coach"], {
            transition: {
            name: "fade",
            curve: "linear"
            }
        });
      }
              break;
      case 3: {
        this.routerExtensions.navigate(["home/relax"], {
            transition: {
            name: "fade",
            curve: "linear"
            }
        });
      }
              break;
      case 4: {
        this.routerExtensions.navigate(["/learn"], {
            transition: {
            name: "fade",
            curve: "linear"
            }
        });
      }
              break;
      default:
        break;
    }
  }

  get activeIndexValue() {
    return this.activeIndex;
  }
}
