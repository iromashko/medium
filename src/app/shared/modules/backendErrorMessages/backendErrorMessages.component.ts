import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from '../../types/backend-errors.interface';

@Component({
  selector: 'app-mc-backend-error-messages',
  templateUrl: './backendErrorMessages.component.html',
  styleUrls: ['./backendErrorMessages.component.scss'],
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps: BackendErrorsInterface;

  errorMessages: string[];

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrorsProps).map(
      (name: string) => {
        const messages = this.backendErrorsProps[name].concat(' ');
        return `${name} ${messages}`;
      }
    );
  }
}
