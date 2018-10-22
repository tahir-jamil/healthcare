import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { filter } from "rxjs/operators";
import * as app from "tns-core-modules/application";

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit, AfterViewInit {

    @ViewChild(RadSideDrawerComponent) drawerComponent: RadSideDrawerComponent;

    private _activatedUrl: string;
    private _sideDrawerTransition: DrawerTransitionBase;
    private drawer: RadSideDrawer;

    // tslint:disable-next-line:max-line-length
    constructor(private router: Router, private routerExtensions: RouterExtensions, private _changeDetectionRef: ChangeDetectorRef) {
        // Use the component constructor to inject services.
    }


    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    openDrawer() {
        this.drawer.showDrawer();
    }

    onCloseDrawerTap() {
        this.drawer.closeDrawer();
    }

    ngOnInit(): void {
        this._activatedUrl = "/home";
        this.drawer = this.drawerComponent.sideDrawer;
        this._sideDrawerTransition = new SlideInOnTopTransition();
        this.router.events
        .pipe(filter((event: any) => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => this._activatedUrl = event.urlAfterRedirects);
    }

    isComponentSelected(url: string): boolean {
        return this._activatedUrl === url;
    }

    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });

        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }
}
