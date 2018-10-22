import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
// import { SearchBarComponent } from '~/theme';

@Component({
  selector: "tu-tab-page",
  templateUrl: "./tab-page.component.html",
  styleUrls: ["./tab-page.component.css"],
  moduleId: module.id
})

export class TabPageComponent implements OnInit {
  @Input() component;
  @ViewChild("container", { read: ViewContainerRef }) container: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {

    const factory = this.componentFactoryResolver.resolveComponentFactory(this.component);
    this.container.createComponent(factory);
      // componentRef.instance.isActive = false
  }

}

