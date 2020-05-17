import {NbMenuItem} from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/app/dashboard',
    home: true,
  },
  {
    title: 'Clients',
    icon: 'people-outline',
    link: '/app/clients',
  },
  {
    title: 'Vehicles',
    icon: 'car-outline',
    link: '/app/vehicles',
  },
  {
    title: 'Access History',
    icon: 'book-open-outline',
    link: '/app/access-history',
  },
];
