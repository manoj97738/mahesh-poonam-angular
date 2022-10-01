import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MyCutsompipe } from "./mycustom.pipe";




@NgModule({
    // com
    declarations: [
        MyCutsompipe
    ],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule
    ],
    exports: [
        MyCutsompipe,
        ReactiveFormsModule,
        FormsModule,
        CommonModule
    ]
})
export class CustomCommonModule {

}