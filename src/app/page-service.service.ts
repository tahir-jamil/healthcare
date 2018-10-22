import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PageServiceService {

  title: string = "Home";
  currentBottomMenuIndex: number = 0;
  // tslint:disable-next-line:no-empty
  constructor() { }

}
