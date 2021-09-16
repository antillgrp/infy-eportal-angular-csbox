import {
  Component,
  AfterViewInit,   
  Input,
  ElementRef,
  ViewChildren, QueryList
  //EventEmitter, Output
} from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'ctrl-error-display',
  template: `
  <!--{{console1.log(errInfo)}}-->
  <div
    *ngIf=  "
            control.invalid && control.errors
            &&
            (control.dirty || control.touched)
            "
  >
      <span *ngFor="let entry of errInfo">
          <small
            class="text-danger"
            *ngIf="control.hasError(entry[0])"
            [innerHTML]="entry[1]"
          >
          </small>
      </span>
  </div>
  `,
  styles: []
  //styleUrls: ['./add-employee.component.css']
})
export class CtrlErrorDisplayComponent
{
  @Input() control: AbstractControl;
  @Input() errInfo: string[][];

  console1=console;
}
