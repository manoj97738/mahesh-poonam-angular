import { Component, Input, Output, EventEmitter, AfterViewInit } from "@angular/core";
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from "@angular/forms";
import { getControls, customValidators } from "../myvalidation";
@Component({
    selector: "app-account",
    templateUrl: "./account.component.html"
})
export class AccountComponent implements AfterViewInit {
    title = 'hello';
    longText = 'THis Is SOMEThing BaD';
    name: string;
    edit = false;
    isSubmit = false;
    salary = 3620034568.123456
    myBirthday = new Date();
    gender = ["male", "female"]
    dtStudent = [
        { name: "manie", age: 20 },
        { name: "rahul", age: 30 }
    ]
    myForm: FormGroup = new FormGroup({
        name: getControls("", { req: true }),
        age: getControls("", { req: true }),
        gender: new FormControl("", [Validators.required, customValidators()]),
        password: new FormControl("", Validators.required),
        cnfpassword: new FormControl("", Validators.required),
        address: new FormGroup({
            line1: new FormControl("", [Validators.required, Validators.minLength(5)]),
            line2: new FormControl(""),
            state: new FormGroup({
                statename: new FormControl("", [Validators.required, Validators.minLength(5)]),
                pincode: new FormControl(""),
            })
        })
    }, [this.formLevelVal]);

    formLevelVal(form: any): ValidatorFn | null | { [key: string]: any } {
        const forVal: any = form.value;
        if (forVal.password != ""
            && forVal.password !== forVal.cnfpassword) {
            return { passwordMatch: true }
        }
        return null;
    }
    ngAfterViewInit() {
        const control: AbstractControl | null = this.myForm.get("name");
        if (control) {
            control.valueChanges.subscribe((value: any) => {
                console.log('value', value)
            })
        }

    }
    xyz($event: any) {
        console.log($event)
    }
    updateDtae() {
        this.isSubmit = true;
        if (this.myForm.valid) {
            console.log(this.myForm.value)
        } else {
            alert("Please enter valid data")
        }
    }
    getErrors(control: string) {
        const controlRef: any = this.myForm.get(control);
        if (controlRef && controlRef.errors != null && controlRef.touched && this.isSubmit) {
            if (controlRef.errors.required) {
                return "This field is required";
            }
            if (controlRef.errors.minlength) {
                return "minimum " + controlRef.errors.minlength.requiredLength + " is required";
            }
            if (controlRef.errors.valuenotmatch == true) {
                return "valuenotmatch error occures";
            }
        }
        return "";
    }
    constructor() {
        this.name = "";
    }
    localhndler(data: any) {
        console.log(data);
        this.edit = true;
        //this.studentForm.patchValue(data);

    }
}