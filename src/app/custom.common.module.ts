import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MyCutsompipe } from "./mycustom.pipe";

import { HttpClientModule } from '@angular/common/http'




@NgModule({
    // com
    declarations: [
        MyCutsompipe
    ],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        HttpClientModule
    ],
    exports: [
        MyCutsompipe,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        HttpClientModule
    ]
})
export class CustomCommonModule {

}