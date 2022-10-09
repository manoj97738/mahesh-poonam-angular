import { Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";
@Injectable({ providedIn: "root" })
export class formHelper {
    getControl(initstat: string, validation: any) {
        return new FormControl(initstat, validation);
    }
    getFormGroup(control: any) {
        return new FormControl(control);
    }
}


