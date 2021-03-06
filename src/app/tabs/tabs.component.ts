import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import * as platformModule from "tns-core-modules/platform";
// tslint:disable-next-line:ordered-imports
import { CoachComponent } from "../coach/coach.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { LearnComponent } from "../learn/learn.component";
import { PageServiceService } from "../page-service.service";
import { RelaxComponent } from "../relax/relax.component";
import { TimelineComponent } from "../timeline/timeline.component";

@Component({
  selector: "tu-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.css"],
  moduleId: module.id
})
export class TabsComponent implements OnInit {

  get getGrid() {
    return this.gridLayout;
  }

  get activeTabIndex() {
    return this.selectedIndex;
  }

  @Input() filters = [
    { name: "Home" },
    { name: "Timeline" },
    { name: "Coach" },
    { name: "Relax" },
    { name: "Learn" }
  ];

  @Input() components = [
    { component: DashboardComponent },
    { component: TimelineComponent },
    { component: CoachComponent },
    { component: RelaxComponent },
    { component: LearnComponent }
];

  @Input() type = "";
  gridLayout: string = "";
  activeTab = 0;
  imgwidth;
  imgHeight;

  // tslint:disable-next-line:member-ordering
  currentPagerIndex = 0;
  // tslint:disable-next-line:member-ordering
  latestReceivedIndex = 0;
  // tslint:disable-next-line:member-ordering
  selectedIndex = 0;

  // tslint:disable-next-line:member-ordering
  items: any;

  // tslint:disable-next-line:member-ordering
  @ViewChild("pager") pager: ElementRef;

  // tslint:disable-next-line:no-empty
  constructor(private pageService: PageServiceService) {
  }

  ngOnInit(): void {
    if (this.filters.length === 2) {
      console.log("two");
      this.gridLayout = "two";
    } else if (this.filters.length === 3) {
      console.log("thre");
      this.gridLayout = "three";
    } else {
      // console.log("scroll");
      // tslint:disable-next-line:prefer-conditional-expression
      if (this.type === "category") {
        this.activeTab = 2;
      } else {
        this.activeTab = 0;
      }
      const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
      const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
      this.imgwidth = deviceWidth * 0.094;
      this.imgHeight = deviceHeight * 0.0523;
      this.gridLayout = "scroll";
    }
  }

  tabIndexChanged(newIndex) {
    console.log("new lsdjflsd " + newIndex);
    this.selectedIndex = newIndex;
    console.log("index is changed" + this.selectedIndex);
    switch (newIndex) {
      case 0: {
        this.pageService.title = "Home";
      }
              break;
      case 1: {
        this.pageService.title = "Timeline";
      }
              break;
      case 2: {
        this.pageService.title = "Coach";
      }
              break;
      case 3: {
        this.pageService.title = "Relax";
      }
              break;
      case 4: {
        this.pageService.title = "Learn";
      }
              break;
      default:
        break;
    }
  }

  loadedImage($event) {
    // console.log(`loaded image ${$event}`);
  }

  onIndexChanged($event) {
    debugObj($event);
    this.latestReceivedIndex = $event.value;
    this.selectedIndex = $event.value;

    switch (this.latestReceivedIndex) {
      case 0: {
        this.pageService.title = "Home";

      }
              break;
      case 1: {
        this.pageService.title = "Timeline";

      }
              break;
      case 2: {
        this.pageService.title = "Coach";

      }
              break;
      case 3: {
        this.pageService.title = "Relax";

      }
              break;
      case 4: {
        this.pageService.title = "Learn";

      }
              break;
      default:
        break;
    }
  }

  pageChanged(index: number) {
    // console.log(`pageChanged ${JSON.stringify(index)}`);
    debugObj(index);
  }
}

function debugObj(obj: any) {
  for (const key of Object.keys(obj)) {
    console.log(`${key} = ${obj[key]}`);
  }

}
