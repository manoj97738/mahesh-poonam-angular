import { AbstractControl, FormControl, ValidatorFn, Validators } from "@angular/forms"

export const customValidators = () => {
    return (control: AbstractControl): ValidatorFn | null | { [key: string]: any } => {
        const val: any = control.value;
        if (val == "") {
            return { valuenotmatch: true }
        }
        if (val != "male" || val != "female") {
            return { valuenotmatch: { isrq: true } }
        }
        return null;

    }
}

export const getControls = (value: string | number | null, valObj: { [key: string]: any }): FormControl => {
    const valitorArray: Array<ValidatorFn> = [];
    if (valObj['req'] == true) {
        valitorArray.push(Validators.required)
    }
    return new FormControl(value, valitorArray);
}

