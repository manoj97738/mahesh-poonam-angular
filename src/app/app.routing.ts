import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AccountComponent } from './account/account.component';
import { ContactComponent } from './contact/contact.component';
import { CustomCommonModule } from "./custom.common.module";

import { NotFoundComponent } from "./not-found/not-found.component";

const myRoute: Routes = [
    { path: "", component: ContactComponent },
    { path: "account/:accountid/:type?", component: AccountComponent, data: { title: 3434324 } },
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
    { path: "**", component: NotFoundComponent }
]

@NgModule({
    declarations: [
        ContactComponent,
        AccountComponent,
        NotFoundComponent,
    ],
    imports: [
        RouterModule.forRoot(myRoute),
        CustomCommonModule,
    ],

    exports: [
        RouterModule, // this line is important
        ContactComponent,
        AccountComponent,
        NotFoundComponent,
    ]
})
export class AppRoutingModule {

}