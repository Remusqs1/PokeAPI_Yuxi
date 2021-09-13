import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

  {
    path: '/Home',
    title: 'menu.administration.home',
    icon: 'mdi mdi-home-variant mdi-24px',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: [],
    actions: [],
    // company: "Credifinanciera"
  },
  {
    path: '',
    actions: [],
    title: 'menu.administration.title', icon: 'mdi mdi-desktop-mac mdi-24px', class: 'has-arrow', label: '', labelClass: '', extralink: false,
    submenu: [
      {
        path: '/Permissions',
        title: 'menu.administration.permissions',
        icon: 'mdi mdi-key-variant mdi-24px',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [],
        actions: [],
        // company: "Credifinanciera"
      },
      {
        path: '/Profiles',
        title: 'menu.administration.profiles',
        icon: 'mdi mdi-account-key mdi-24px',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [],
        actions: [],
        //company: "Credifinanciera"
      },
      {
        path: '/Users',
        title: 'menu.administration.users',
        icon: 'mdi mdi-account-settings-variant mdi-24px',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [],
        actions: [],
        //company: "Credifinanciera"
      }
    ],
  },
  {
    path: '/Indicatives',
    title: 'menu.administration.indicatives',
    icon: 'mdi mdi-database mdi-24px',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: [],
    actions: [],
    // company: "Credifinanciera"
  },
  {
    path: '/KPI',
    title: 'menu.administration.kpi',
    icon: 'mdi mdi-file mdi-24px',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: [],
    actions: [],
  },
  {
    path: '/Projects',
    title: 'menu.administration.projects',
    icon: 'mdi mdi-briefcase mdi-24px',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: [],
    actions: [],
  },
  {
    path: '/DevCells',
    title: 'menu.administration.cells',
    icon: 'mdi mdi-account-multiple mdi-24px',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: [],
    actions: [],
  }
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
    name: 'Perfiles',
    path: '/Profiles'
  },
  {
    name: 'Usuarios',
    path: '/Users'
  },
  {
    name: 'Registros',
    path: '/Registers'
  },
  {
    name: 'Proyectos',
    path: '/Projects'
  },
  {
    name: 'Células',
    path: '/DevCells'
  }
];
