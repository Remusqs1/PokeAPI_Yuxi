import { Routes, RouterModule } from '@angular/router';
import { GenerateCertificateComponent } from './Components/generate-certificate/generate-certificate.component';


const GenerateCertificateRoutes: Routes = [
    {
        path: '',
        data: {
            title: 'Certificado de cuenta',
            urls: [
                { title: 'route.breadcrumb.management.generateCertificate.url', url: '/GenerateCertificate' },
                { title: 'route.breadcrumb.management.generateCertificate.url' }
            ]
        },
        component: GenerateCertificateComponent
    },
];

// tslint:disable-next-line:eofline
export const GENERATECERTIFICATE_ROUTES = RouterModule.forChild(GenerateCertificateRoutes);