import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { RegisterComponent } from './register/register.component';

@Injectable({
  providedIn: 'root'
})
export class RegisterDeactivateGuard implements CanDeactivate<RegisterComponent> {
  canDeactivate(component: RegisterComponent) {
    if (component.userName.dirty || component.userEmail.dirty || component.phoneNumber.dirty) {
      const result = window.confirm('There are unsaved changes! Are you sure?');
      return result;
    }
    return true;
  }
}
