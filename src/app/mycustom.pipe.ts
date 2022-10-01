import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'mahesh', pure: true })
export class MyCutsompipe implements PipeTransform {
    transform(xyz: any, first: any, second?: any, third?: any): string {
        return "Sum  is " + (xyz + xyz) + first + second
    }
}

