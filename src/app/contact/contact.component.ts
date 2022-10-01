import { Component, Input, Output, EventEmitter } from "@angular/core";
@Component({
    selector: "app-contact",
    template: `
    <p>new component</p>
   
    <h1>age is {{age}}</h1>
    <table *ngIf="!edit">
    <tr *ngFor="let x of nameList ">
        <td>{{x.name}}</td>
        <td>{{x.age}}</td>
        <td><button type="button" (click)="emitParent(x)">edit</button></td>
    </tr>
    </table>
    <app-not-found></app-not-found>
   
    `
})
export class ContactComponent {
    @Input() nameList: Array<any> = [];
    @Input() age: number = 0;
    @Output() clickedRow: EventEmitter<any> = new EventEmitter();
    edit = false;
    @Input() editInput: boolean = false
    emitParent(data:any) {
        this.edit = true;
        this.clickedRow.emit(data);
    }
}