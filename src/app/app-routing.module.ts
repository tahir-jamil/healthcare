import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { CoachComponent } from "./coach/coach.component";
import { HomeComponent } from "./home/home.component";
import { LearnComponent } from "./learn/learn.component";
import { RelaxComponent } from "./relax/relax.component";
import { TimelineComponent } from "./timeline/timeline.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "timeline", component: TimelineComponent },
    { path: "coach", component: CoachComponent },
    { path: "relax", component: RelaxComponent },
    { path: "learn", component: LearnComponent }

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
