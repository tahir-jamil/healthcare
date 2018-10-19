import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { PagerModule } from "nativescript-pager/angular";
import { BottomBarComponent } from "~/bottom-bar/bottom-bar.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
// tslint:disable-next-line:ordered-imports
import { CoachComponent } from "./coach/coach.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HomeComponent } from "./home/home.component";
import { LearnComponent } from "./learn/learn.component";
import { RelaxComponent } from "./relax/relax.component";
import { TabPageComponent } from "./tabs/tab-page/tab-page.component";
import { TabsComponent } from "./tabs/tabs.component";
import { TimelineComponent } from "./timeline/timeline.component";

@NgModule({
   bootstrap: [
      AppComponent
   ],
   imports: [
      AppRoutingModule,
      NativeScriptModule,
      NativeScriptUISideDrawerModule,
      PagerModule
   ],
   declarations: [
      AppComponent,
      BottomBarComponent,
      HomeComponent,
      TimelineComponent,
      CoachComponent,
      RelaxComponent,
      LearnComponent,
      TabsComponent,
      TabPageComponent,
      DashboardComponent
   ],
   entryComponents: [
      TimelineComponent,
      CoachComponent,
      RelaxComponent,
      LearnComponent,
      DashboardComponent
   ],
   schemas: [
      NO_ERRORS_SCHEMA
   ]
})
export class AppModule { }

