import {Route, Routes} from '@angular/router';

import { HomeComponent } from './';
import {AboutComponent} from "./about.component";

export const HOME_ROUTE: Routes = [{
    path: '',
    component: HomeComponent,
    data: {
        authorities: [],
        pageTitle: 'home.title',
    }},
    { path: 'about', component: AboutComponent }];
