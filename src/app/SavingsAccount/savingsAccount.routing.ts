import { RouterModule, Routes } from "@angular/router";
import { FullComponent } from "../Shared/Components/Layouts/Full/full.component";
import { AuthGuard } from "../Shared/Services/auth.guard";

const SavingsAccountRoutes: Routes = [
  {
    path: "LegalPerson",
    canActivate: [AuthGuard],
    component: FullComponent,
    loadChildren: () =>
      import("./Components/LegalPerson/legalPerson.module").then(
        (module) => module.LegalPersonModule
      ),
  },
  {
    path: "ResetKey",
    canActivate: [AuthGuard],
    component: FullComponent,
    loadChildren: () =>
      import("./Components/ResetKey/resetKey.module").then(
        (module) => module.ResetKeyModule
      ),
  },
  {
    path: "SystemParameters",
    canActivate: [AuthGuard],
    component: FullComponent,
    loadChildren: () =>
      import("./Components/SystemParameters/systemParameters.module").then(
        (module) => module.SystemParameterModule
      ),
  },
  {
    path: "LinkingAccounts",
    canActivate: [AuthGuard],
    component: FullComponent,
    loadChildren: () =>
      import("./Components/LinkingAccounts/linkingAccounts.module").then(
        (module) => module.LinkingAccountsModule
      ),
  },
  {
    path: "GenerateCertificate",
    canActivate: [AuthGuard],
    component: FullComponent,
    loadChildren: () =>
      import("./Components/GenerateCertificate/generateCertificate.module").then(
        (module) => module.GenerateCertificateModule
      ),
  },
];

export const SAVINGSACCOUNT_ROUTES = RouterModule.forChild(
  SavingsAccountRoutes
);
