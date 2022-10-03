import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CustomCommonModule } from "./../custom.common.module";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { AdminInnerChildComponent } from "./adimin-inner-child/adimin-inner-child.component";


const myRoute: Routes = [
    {
        path: '', component: AdminDashboardComponent, children: [
            { path: "notone", component: AdminInnerChildComponent }
        ]
    }
]

@NgModule({
    declarations: [
        AdminDashboardComponent,
        AdminInnerChildComponent
    ],
    imports: [
        RouterModule.forChild(myRoute),
        CustomCommonModule,
    ],
    exports: [
        RouterModule, // this line is important
    ]
})
export class AdminRoutingModule {

}