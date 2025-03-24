import { Component } from '@angular/core';
import {LayoutBodyComponent} from "../../layout/layout-body/layout-body.component";
import {LayoutFooterComponent} from "../../layout/layout-footer/layout-footer.component";
import {LayoutHeaderComponent} from "../../layout/layout-header/layout-header.component";
import {ResultPlaceComponent} from "../../layout/components/result-place/result-place.component";

@Component({
  selector: 'flex-lesson-khinkali-flex',
    imports: [
        LayoutBodyComponent,
        LayoutFooterComponent,
        LayoutHeaderComponent,
        ResultPlaceComponent
    ],
  templateUrl: './khinkali-flex.component.html',
  styleUrl: './khinkali-flex.component.scss'
})
export class KhinkaliFlexComponent {

}
