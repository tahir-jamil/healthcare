import { Component, Input, OnInit, OnChanges, SimpleChanges } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import * as platformModule from "tns-core-modules/platform";
import { PageServiceService } from "../page-service.service";
import { TabsComponent } from "../tabs/tabs.component";

@Component({
  selector: "tu-bottom-bar",
  templateUrl: "./bottom-bar.component.html",
  styleUrls: ["./bottom-bar.component.css"],
  moduleId: module.id
})
export class BottomBarComponent implements OnInit, OnChanges {

  @Input() visible = true;
  @Input() currentIndex = 0;

  bottomMenu = [
    { name: "Home", icon: "&#xe80c;" },
    { name: "Timeline", icon: "&#xe916;" },
    { name: "Cooch", icon: "&#xe42e;" },
    { name: "Relax", icon: "&#xe80c;" },
    { name: "Learn", icon: "&#xe80c;" }
  ];

  bottomBarHeight: any = "";
  imgHeight: any = "";
  activeIndex = 0;

  constructor(private pageService: PageServiceService, private tabs: TabsComponent) { }

  ngOnInit() {
    const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.imgHeight = deviceHeight * 0.10;
  }

  // tslint:disable-next-line:no-empty
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.currentIndex) {
      this.activeIndex = this.currentIndex;
    }
  }

  onChangeIndex(args) {
    this.activeIndex = args;
    this.visible = true;

    switch (this.activeIndex) {
      case 0: {
        this.tabs.tabIndexChanged(0);
      }
              break;
      case 1: {
        this.tabs.tabIndexChanged(1);
      }
              break;
      case 2: {
        this.tabs.tabIndexChanged(2);
      }
              break;
      case 3: {
        this.tabs.tabIndexChanged(3);
      }
              break;
      case 4: {
        this.tabs.tabIndexChanged(4);
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
