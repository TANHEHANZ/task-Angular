import { Routes } from '@angular/router';
import { Page1Component } from './component/page1/page1.component';
import { Page2Component } from './component/page2/page2.component';
import { PadreComponent } from './component/padre/padre.component';
import { TableComponent } from './component/table/table.component';

export const routes: Routes = [

    {
        path: 'page1',
        component: Page1Component,
    },
    {
        path: 'page2',
        component: Page2Component,
    }, {
        path: 'padre',
        component: PadreComponent,
    },
    {
        path: 'table',
        component: TableComponent,
    }
];
