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
    actions: [],
    company: "Credifinanciera"
  },
  {
    path: '/Records',
    title: 'menu.administration.home.records',
    icon: 'mdi mdi-database mdi-24px',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: [],
    actions: [],
    company: "Credifinanciera"
  }
];
export const MENUOPTIONS = [
  {
    name: 'Home',
    path: '/Home'
  },
  {
    name: 'Registros',
    path: '/Registros'
  }
];
