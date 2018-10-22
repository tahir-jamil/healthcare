import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { BottomBarComponent } from "./bottom-bar/bottom-bar.component";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { NgShadowModule } from "nativescript-ng-shadow";


@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,
        NgShadowModule
    ],
    declarations: [
        HomeComponent,
        BottomBarComponent
        
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
