import * as Icon from 'react-feather';

const SidebarData = [
  {
    title: 'Dashboards',
    href: '/dashboards',
    id: 1,
    suffix: '5',
    suffixColor: 'bg-primary',
    icon: <Icon.Home />,
    collapisble: true,
    children: [
      {
        title: 'Modern',
        href: '/dashboards/modern',
        icon: <Icon.Disc />,
        id: 1.1,
        collapisble: false,
      },
      {
        title: 'Awesome',
        href: '/dashboards/awesome',
        icon: <Icon.Disc />,
        id: 1.2,
        collapisble: false,
      },
      {
        title: 'Classy',
        href: '/dashboards/classy',
        icon: <Icon.Disc />,
        id: 1.3,
        collapisble: false,
      },
      {
        title: 'Analytical',
        href: '/dashboards/analytical',
        icon: <Icon.Disc />,
        id: 1.4,
        collapisble: false,
      },
      {
        title: 'Minimal',
        href: '/dashboards/minimal',
        icon: <Icon.Disc />,
        id: 1.5,
        collapisble: false,
      },
    ],
  },

];

export default SidebarData;
