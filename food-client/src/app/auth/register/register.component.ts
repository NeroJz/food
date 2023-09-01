import { Component } from '@angular/core';

import { ROLE_ADMIN, ROLE_CUSTOMER } from '../common/constants';

interface RoleDropdownItem {
  label: string;
  value: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  roles: RoleDropdownItem[] = [
    {
      label: 'Admin',
      value: ROLE_ADMIN,
    },
    {
      label: 'Customer',
      value: ROLE_CUSTOMER,
    }
  ];
}
