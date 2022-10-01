import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
@Component({
    selector: "app-not-two-found",
    template: `
   <h1>inner child module admin</h1>
   
    `
})
export class AdminInnerChildComponent {
    constructor(public router: Router) {
        //this.router.navigate(["/account"])
    }
}