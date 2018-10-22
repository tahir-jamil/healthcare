import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { ActOfKindnessComponent} from "~/app/act-of-kindness/act-of-kindness.component"



const routes: Routes = [
    { path: "", redirectTo: "/actofkindness", pathMatch: "full" },
    { path: "actofkindness", component:ActOfKindnessComponent  },
    
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }