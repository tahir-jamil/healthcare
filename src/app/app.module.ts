import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
<<<<<<< HEAD
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ActOfKindnessComponent } from './act-of-kindness/act-of-kindness.component';
=======

import { PagerModule } from "nativescript-pager/angular";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BottomBarComponent } from "./bottom-bar/bottom-bar.component";
// tslint:disable-next-line:ordered-imports
import { CoachComponent } from "./coach/coach.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HomeComponent } from "./home/home.component";
import { LearnComponent } from "./learn/learn.component";
import { RelaxComponent } from "./relax/relax.component";
import { TabPageComponent } from "./tabs/tab-page/tab-page.component";
import { TabsComponent } from "./tabs/tabs.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { PageServiceService } from "./page-service.service";
>>>>>>> 7868136bd324e640ca0dd772116f554ed35cbe59

@NgModule({
   bootstrap: [
      AppComponent
   ],
   imports: [
      AppRoutingModule,
      NativeScriptModule,
<<<<<<< HEAD
      NativeScriptUISideDrawerModule
   ],
   declarations: [
      AppComponent,
      ActOfKindnessComponent
   ],
=======
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
   providers: [PageServiceService],
>>>>>>> 7868136bd324e640ca0dd772116f554ed35cbe59
   schemas: [
      NO_ERRORS_SCHEMA
   ]
})
export class AppModule { }

