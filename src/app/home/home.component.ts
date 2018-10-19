import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import * as platformModule from "tns-core-modules/platform";
// tslint:disable-next-line:ordered-imports
import { CoachComponent } from "../coach/coach.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { LearnComponent } from "../learn/learn.component";
import { RelaxComponent } from "../relax/relax.component";
import { TabsComponent } from "../tabs/tabs.component";
import { TimelineComponent } from "../timeline/timeline.component";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    // tslint:disable-next-line:no-empty
    ngOnInit(): void  { }

    // tslint:disable-next-line:member-ordering
    filters = [
        { name: "Home" },
        { name: "Timeline" },
        { name: "Coach" },
        { name: "Relax" },
        { name: "Learn" }
    ];

    // tslint:disable-next-line:member-ordering
    components = [
        { component: DashboardComponent },
        { component: TimelineComponent },
        { component: CoachComponent },
        { component: RelaxComponent },
        { component: LearnComponent }
    ];
}


