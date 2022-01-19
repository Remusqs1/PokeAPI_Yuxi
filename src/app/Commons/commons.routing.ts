
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../Shared/Services/auth.guard';
import { FullComponent } from '../Shared/Components/Layouts/Full/full.component';

const SharedRoutes: Routes = [

];

export const COMMONS_ROUTES = RouterModule.forChild(SharedRoutes);
