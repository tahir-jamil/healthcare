import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import * as platformModule from "tns-core-modules/platform";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

    boxHeight: any = "";
    boxWidth: any = "";


    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
        const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
        this.boxHeight = deviceHeight * 0.20;
        this.boxWidth =  deviceWidth * 0.38;
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}

