import { Routes, RouterModule } from '@angular/router';
import { LinkingAccountsComponent } from './Components/LinkingAccounts/linking-accounts.component';

const LinkingAccountsRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'Asociar cuentas',
      urls: [
        {
          title: 'route.breadcrumb.management.linkingAcounts.url',
          url: '/LinkingAccounts',
        },
        { title: 'route.breadcrumb.management.linkingAcounts.url' },
      ],
    },
    component: LinkingAccountsComponent,
  },
];

export const LINKINGACCOUNTS_ROUTES = RouterModule.forChild(
  LinkingAccountsRoutes
);
