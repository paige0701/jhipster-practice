import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RouterPracticeSharedModule } from '../shared';

import { HOME_ROUTE, HomeComponent } from './';
import {FirstHalfComponent} from "./firstHalf.component";
import {SecondHalfComponent} from "./secondHalf.component";
import {AboutComponent} from "./about.component";

@NgModule({
    imports: [
        RouterPracticeSharedModule,
        RouterModule.forChild(HOME_ROUTE)
    ],
    declarations: [
        HomeComponent,
        FirstHalfComponent,
        SecondHalfComponent,
        AboutComponent
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RouterPracticeHomeModule {}
