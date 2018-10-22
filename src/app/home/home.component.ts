import { Component, OnInit, ViewChild } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import * as platformModule from "tns-core-modules/platform";
import { Page } from "tns-core-modules/ui/page/page";
import { AppComponent } from "../app.component";
import { PageServiceService } from "../page-service.service";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.css"]
})
export class HomeComponent implements OnInit {

    get title() {
        return this.pageService.title;
    }

    actionbar;
    // @ViewChild('RadSideDrawerComponent') drawerComponent: RadSideDrawerComponent;
    // private drawer: RadSideDrawer;
    // tslint:disable-next-line:no-empty
    constructor(private _page: Page, private pageService: PageServiceService, private pageComponent: AppComponent) {}
    // tslint:disable-next-line:no-empty
    ngOnInit(): void  {
        this._page.actionBarHidden = true;
        const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;

        // tslint:disable-next-line:prefer-conditional-expression
        if (platformModule.isIOS) {
            this.actionbar = deviceHeight * 0.10;
        } else {
            this.actionbar = deviceHeight * 0.11;
        }
        // this.drawer = this.drawerComponent.sideDrawer;
    }

    openDrawer() {
        // this.drawer.showDrawer();
        this.pageComponent.openDrawer();
    }

}
