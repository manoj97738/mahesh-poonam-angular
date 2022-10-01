import { Component, Input, Output, EventEmitter, AfterViewInit } from "@angular/core";
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from "@angular/forms";
import { ActivatedRoute, ActivatedRouteSnapshot, ParamMap, Router, RouterState, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
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


    // Read Dynamic Route
    constructor(public actived: ActivatedRoute ) {
       
         
        this.name = "";
        // this is for /sdasd/3234243 dynamic parameters
        this.actived.params.subscribe((params: any) => {
            console.log(params.accountid);
            console.log(params.type);
            this.name = params.accountid;
        });
        // this is for ?t=3234623
        this.actived.queryParams.subscribe((params: any) => {
            console.log(params.accountid);
            console.log(params.type);
            this.name = params.accountid;
        });

        this.actived.data.subscribe((data: any) => {
            console.log(data);
           
        });
    }

    // form
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

    localhndler(data: any) {
        console.log(data);
        this.edit = true;
        //this.studentForm.patchValue(data);

    }
}