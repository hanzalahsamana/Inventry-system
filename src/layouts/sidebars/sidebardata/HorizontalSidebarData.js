import * as Icon from 'react-feather';

const SidebarData = [
  { caption: 'Home' },
  {
    title: 'Dashboards',
    href: '/dashboards',
    id: 1,
    suffix: '4',
    suffixColor: 'bg-info',
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

  // {
  //   title: 'DD Menu',
  //   href: '/',
  //   id: 7,
  //   collapisble: true,
  //   icon: <Icon.Disc />,
  //   children: [
  //     {
  //       title: 'Simple dd 1',
  //       href: '/',
  //       icon: <Icon.Disc />,
  //     },
  //     {
  //       title: 'Simple dd 2',
  //       href: '/',
  //       icon: <Icon.Disc />,
  //     },
  //     {
  //       title: 'Simple dd 3',
  //       href: '/',
  //       icon: <Icon.Disc />,
  //       children: [
  //         {
  //           title: 'Simple dd 1.1',
  //           href: '/alerts',
  //           icon: <Icon.Disc />,
  //         },
  //       ],
  //     },
  //   ],
  // },
];

export default SidebarData;
