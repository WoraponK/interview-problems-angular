import { Component } from '@angular/core';

import { Easy1Component } from '../../components/easy-1/easy-1.component';
import { Easy2Component } from '../../components/easy-2/easy-2.component';
import { Easy3Component } from '../../components/easy-3/easy-3.component';
import { Easy4Component } from '../../components/easy-4/easy-4.component';
import { Medium1Component } from '../../components/medium-1/medium-1.component';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [
    Easy1Component, 
    Easy2Component, 
    Easy3Component, 
    Easy4Component, 
    Medium1Component
  ],
  templateUrl: './works.component.html',
  styles: ``
})
export class WorksComponent {

}
