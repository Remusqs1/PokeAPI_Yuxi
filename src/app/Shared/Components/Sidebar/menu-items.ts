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
    path: '/Users',
    title: 'menu.administration.users',
    icon: 'mdi mdi-account-settings-variant mdi-24px',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: [],
    actions: [],
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
  }
];
export const MENUOPTIONS = [
  {
    name: 'Home',
    path: '/Home'
  },
  {
    name: 'Registros',
    path: '/Registers'
  }
];
