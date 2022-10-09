import { HttpClient } from "@angular/common/http";
import { Component, Input, Output, EventEmitter, AfterViewInit } from "@angular/core";
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, FormBuilder, FormArray } from "@angular/forms";
import { ActivatedRoute, ActivatedRouteSnapshot, ParamMap, Router, RouterState, RouterStateSnapshot } from "@angular/router";
import { switchMap } from "rxjs";

import { formHelper } from "../heleper";
import { myService } from "../myservice";
import { getControls, customValidators } from "../myvalidation";
@Component({
    selector: "app-account",
    templateUrl: "./account.component.html",

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
        password: this.formHelp.getControl("", Validators.required),
        cnfpassword: this.formHelp.getControl("", Validators.required),
        address: new FormGroup({
            line1: this.formbuilder.control("", [Validators.required, Validators.minLength(5)]),
            line2: this.formbuilder.control(""),
            state: this.formbuilder.group({
                statename: new FormControl("", [Validators.required, Validators.minLength(5)]),
                pincode: this.formbuilder.control("", []),
            })
        }),
        myFruits: new FormArray([new FormControl("Sample")]), //this.fb.array([])
        addresses: new FormArray([this.getSingleAddrGroup()]) //this.fb.array([])
    }, [this.formLevelVal]);


    getSingleAddrGroup() {
        return new FormGroup({
            pincode: this.formbuilder.control("pincode"),
            line1: this.formbuilder.control("ine1s"),
        })
    }
    getAddressControl() {
        return this.myForm.get('addresses') as FormArray;
    }

    delAddress(i: any) {
        this.getAddressControl().removeAt(i);
    }

    addAddress() {
        this.getAddressControl().push(this.getSingleAddrGroup());
    }
    // single control
    fruits() {
        return this.myForm.get('myFruits') as FormArray;
    }
    delFruits(i: any) {
        this.fruits().removeAt(i);
    }

    addFruits() {
        this.fruits().push(new FormControl("Sample"));
    }

    // Read Dynamic Route
    constructor(
        public formHelp: formHelper,
        public actived: ActivatedRoute,
        public formbuilder: FormBuilder,
        public http: myService
    ) {


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
        this.http.getRequest()
            .subscribe((data) => {
                console.log(data);
            });
        this.isSubmit = true;
        // if (this.myForm.valid) {
        //     console.log(this.myForm.value);
        //     this.http.get("https://jsonplaceholder.typicode.com/todos")
        //         .subscribe((data) => {
        //             console.log(data);
        //         });
        // } else {
        //     alert("Please enter valid data")
        // }
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