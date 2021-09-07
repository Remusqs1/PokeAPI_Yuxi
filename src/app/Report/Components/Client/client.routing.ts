import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './Components/client/client.component';


const routes: Routes = [
    {
        path: '',
        data: {
            title: 'route.breadcrumb.report.client.title',
            urls: [
                { title: 'route.breadcrumb.report.client.url', url: '/Report' },
                { title: 'route.breadcrumb.report.client.url' }
            ]
        },
        component: ClientComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CLIENT_ROUTING { }
