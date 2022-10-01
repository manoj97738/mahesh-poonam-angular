import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { AccountComponent } from './account/account.component';
import { ContactComponent } from './contact/contact.component';
import { CustomCommonModule } from "./custom.common.module";
import { MyCutsompipe } from "./mycustom.pipe";
import { NotFoundComponent } from "./not-found/not-found.component";

const myRoute: Routes = [
    { path: "", component: ContactComponent },
    { path: "account", component: AccountComponent }
]

@NgModule({
    // com
    declarations: [
        ContactComponent,
        AccountComponent,
        NotFoundComponent,
    ],
    imports: [
        RouterModule.forRoot(myRoute),
        CustomCommonModule
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