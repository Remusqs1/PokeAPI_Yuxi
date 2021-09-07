import { Company } from '../../../Commons/Entities/company';
import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

  {
    path: '/Home',
    title: 'menu.administration.home.title',
    icon: 'mdi mdi-home-variant mdi-24px',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: [],
    actions: [17],
    company: "Credifinanciera"
  },
  {
    path: '',
    actions: [31],
    title: 'menu.administration.title', icon: 'mdi mdi-desktop-mac mdi-24px', class: 'has-arrow', label: '', labelClass: '', extralink: false,
    submenu: [
      {
        path: '/Permissions',
        title: 'menu.administration.permissions.title',
        icon: 'mdi mdi-key-variant mdi-24px',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [],
        actions: [11],
        company: "Credifinanciera"
      },
      {
        path: '/Roles',
        title: 'menu.administration.roles.title',
        icon: 'mdi mdi-account-key mdi-24px',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [],
        actions: [6],
        company: "Credifinanciera"
      },
      {
        path: '/Users',
        title: 'menu.administration.users.title',
        icon: 'mdi mdi-account-settings-variant mdi-24px',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [],
        actions: [2],
        company: "Credifinanciera"
      },
      {
        path: '/Home-page',
        title: 'Configuración Home Page',
        icon: 'mdi mdi-home-variant mdi-24px',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [],
        actions: [40],
        company: "Credifinanciera"
      },
    ],
    company: "Credifinanciera"
  },
  // {
  //   path: '', 
  //   actions: [],
  //   title: 'menu.administration.ally.title', icon: 'mdi mdi-credit-card-plus mdi-24px', class: 'has-arrow', label: '', labelClass: '', extralink: false,
  //   submenu: [
  //     {
  //       path: '/Associated',
  //       title: 'menu.management.ally.OTPForwarding.title',
  //       icon: 'mdi mdi-fast-forward mdi-24px',
  //       class: '',
  //       label: '',
  //       labelClass: '',
  //       extralink: false,
  //       submenu: [],
  //       actions: [15],
  // company : "Credifinanciera"
  //     },     
  //   ]
  // },
  {
    path: '/Help',
    title: 'menu.administration.help.title',
    icon: 'mdi mdi-help-circle mdi-24px',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: [],
    actions: [1],
    company: "Credifinanciera"
  },
  {
    path: '/Audit',
    title: 'menu.administration.audit.title',
    icon: 'mdi mdi-paperclip mdi-24px',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: [],
    actions: [16],
    company: "Credifinanciera"
  },
  {
    path: '/Catalogs',
    actions: [43],
    title: 'Catálogos Admon',
    icon: 'mdi mdi-settings mdi-24px',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: [],
    company: "Credifinanciera"
  },
  {
    path: '/Management',
    actions: [32],
    title: 'Catálogos',
    icon: 'mdi mdi-folder-multiple-outline mdi-24px',
    class: 'has-arrow',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: [
      {
        path: '/Campaign',
        title: 'Campañas',
        icon: 'mdi mdi-folder-outline mdi-24px',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [],
        actions: [26],
        company: "Credifinanciera"
      },
      {
        path: '/Parameters',
        title: 'Parámetros',
        icon: 'mdi mdi-folder-outline mdi-24px',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [],
        actions: [27],
        company: "Credifinanciera"
      },
    ],
    company: "Credifinanciera"
  },
  
  {
    path: '/SavingsAccount',
    actions: [33],
    title: 'Cuentas', icon: 'mdi mdi-plus-circle mdi-24px', class: 'has-arrow', label: '', labelClass: '', extralink: false,
    submenu: [
      {
        path: '/LegalPerson',
        title: 'Persona jurídica',
        icon: 'mdi mdi-filter-variant mdi-24px',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [],
        actions: [23],
        company: "Credifinanciera"
      },
      {
        path: '/ResetKey',
        title: 'Reiniciar clave',
        icon: 'mdi mdi-chart-arc mdi-24px',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [],
        actions: [24],
        company: "Credifinanciera"
      },
      {
        path: '/SystemParameters',
        title: 'Parámetros',
        icon: 'mdi mdi-format-align-justify mdi-24px',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [],
        actions: [25],
        company: "Credifinanciera"
      },
      {
        path: '/LinkingAccounts',
        title: 'Asociar Cuentas',
        icon: 'mdi mdi-link-variant mdi-24px',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [],
        actions: [29],
        company: "Credifinanciera"
      },
      {
        path: '/GenerateCertificate',
        title: 'Generar Certificado',
        icon: 'mdi mdi-link-variant mdi-24px',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [],
        actions: [30],
        company: "Credifinanciera"
      },
      {
        path: '/movements',
        title: 'Movimiento Cuenta',
        icon: 'mdi mdi-currency-usd mdi-24px',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [],
        actions: [41],
        company: "Credifinanciera"
      },
      {
        path: '/summary-acount',
        title: 'Resumen Cuenta',
        icon: 'mdi mdi-file mdi-24px',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [],
        actions: [42],
        company: "Credifinanciera"
      },
    ],
    company: "Credifinanciera"
  },
  
  {
    path: '/Cases',
    actions: [34],
    title: 'Casos', icon: 'mdi mdi-view-list mdi-24px', class: 'has-arrow', label: '', labelClass: '', extralink: false,
    submenu: [
      {
        path: '/ListCases',
        title: 'Casos por asesor',
        icon: 'mdi mdi-human-greeting mdi-24px',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [],
        actions: [28],
        company: "Credifinanciera"
      },

    ],
    company: "Credifinanciera"
  },

  {
    path: '/Pymes',
    actions: [35],
    title: 'Pymes', icon: 'ti ti-bag ti-24px', class: 'has-arrow', label: '', labelClass: '', extralink: false,
    submenu: [
      {
        path: '/peace-save',
        title: 'Paz y salvo',
        icon: 'mdi mdi-currency-usd mdi-24px',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [],
        actions: [38],
        company: "Credifinanciera"
      },
      {
        path: '/balances',
        title: 'Certificado al día',
        icon: 'mdi mdi-file mdi-24px',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [],
        actions: [37],
        company: "Credifinanciera"
      },
    ],
    company: "Credifinanciera"
  },
  {
    path: '/DocumentManager',
    actions: [36],
    title: 'Gestión Documental', icon: 'ti ti-book', class: 'has-arrow', label: '', labelClass: '', extralink: false,
    submenu: [
      {
        path: '/loadDocuments',
        title: 'Cargar Documentos',
        icon: 'mdi mdi-file mdi-24px',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [],
        actions: [39],
        company: "Credifinanciera"
      }
    ],
    company: "Credifinanciera"
  },
  {
    path: '/ConsumerCredit',
    actions: [44],
    title: 'Crédito de consumo', icon: 'icon-briefcase', class: 'has-arrow', label: '', labelClass: '', extralink: false,
    submenu: [
      {
        path: '/extracts',
        title: 'Extracto mensual',
        icon: 'mdi mdi-file mdi-24px',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [],
        actions: [45],
        company: "Credifinanciera"
      },
      {
        path: '/liquidacion',
        title: 'Liquidación de pago total',
        
        icon: 'mdi mdi-calculator mdi-24px',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [],
        actions: [46],
        company: "Credifinanciera"
      },
      {
        path: '/abonoacapital',
        title: 'Abono a capital',
        icon: 'mdi mdi-calculator mdi-24px',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [],
        actions: [47],
        company: "Credifinanciera"
      },
      {
        path: '/pazysalvo',
        title: 'Paz y Salvo',
        icon: 'mdi mdi-file-powerpoint mdi-24px',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [],
        actions: [48],
        company: "Credifinanciera"
      },
      {
        path: '/certificadoaldia',
        title: 'Certificado al día',
        icon: 'mdi mdi-file-document mdi-24px',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [],
        actions: [49],
        company: "Credifinanciera"
      },
      {
        path: '/cartaaprobacion',
        title: 'Certificado condiciones de aprobación',
        icon: 'mdi mdi-file-multiple mdi-24px',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [],
        actions: [50],
        company: "Credifinanciera"
      },    
      {
        path: '/planamortizacion',
        title: 'Plan de Amortización',
        icon: 'mdi mdi-note-text mdi-24px',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [],
        actions: [52],
        company: "Credifinanciera"
      },      
    ],
    company: "Credifinanciera"   
  },
  {
    path: '/CertificateNoLink',
    title: 'Certificado no vínculo',
    icon: 'mdi mdi-library-books mdi-24px',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: [],
    actions: [51],
    company: "Credifinanciera"
  },
  
];
export const MENUOPTIONS = [
  {
    name: 'Home',
    path: '/Home'
  },
  {
    name: 'Permisos',
    path: '/Permissions'
  },
  {
    name: 'Roles',
    path: '/Roles'
  },
  {
    name: 'Usuarios',
    path: '/Users'
  },
  {
    name: 'Auditoria',
    path: '/Audit'
  },
  {
    name: 'Campañas',
    path: '/Campaign'
  },
  {
    name: 'Parametros',
    path: '/Parameters'
  },
  {
    name: 'Persona Juridica',
    path: '/LegalPerson'
  },
  {
    name: 'Reiniciar Clave',
    path: '/ResetKey'
  },
  {
    name: 'Parametros del Sistema',
    path: '/SystemParameters'
  },
  {
    name: 'Asociar Cuentas',
    path: '/LinkingAccounts'
  },
  {
    name: 'Generar certificado',
    path: '/GenerateCertificate'
  },
  {
    name: 'Movimiento cuenta',
    path: '/movements'
  },
  {
    name: 'Resumen Cuenta',
    path: '/summary-acount'
  },
  {
    name: 'Casos',
    path: '/ListCases'
  },
  {
    name: 'Paz y salvo',
    path: '/peace-save'
  },
  {
    name: 'Certificado al día',
    path: '/balances'
  },
  // {
  //   name: 'Certificado no vinculo',
  //   path: '/CertificateNoLink',
  // },
];
