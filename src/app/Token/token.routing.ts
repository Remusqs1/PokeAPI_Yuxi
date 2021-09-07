import { Routes, RouterModule } from '@angular/router';
import { TokenComponent } from './Components/token.component';

const TokenRoutes: Routes = [
  {
    path: 'Validate',
    component: TokenComponent,
    data: {
      title: 'route.breadcrumb.administration.usersMo.title',
      urls: [{ title: 'route.breadcrumb.administration.usersMo.url', url: 'Validate' },
      { title: 'route.breadcrumb.administration.usersMo.url' }]
    }
  },
];

export const TOKEN_ROUTES = RouterModule.forChild(TokenRoutes);