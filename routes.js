const routes = [
  {
    name: 'Getting Started',
    path: '/documentation/quick-start',
    routes: [
      {
        path: '/documentation/quick-start',
        name: 'Quick Start',
      },
    ],
  },
  {
    name: 'CSS Components',
    path: '/documentation/css/alerts',
    routes: [
      {
        path: '/documentation/css/alerts',
        name: 'Alerts',
      },
      {
        name: 'Buttons',
        state: 'buttonsState',
        subRoutes: [
          {
            path: '/documentation/css/buttons/small/filled',
            name: 'Small Filled',
          },
          {
            path: '/documentation/css/buttons/regular/filled',
            name: 'Regular Filled',
          },
          {
            path: '/documentation/css/buttons/large/filled',
            name: 'Large Filled',
          },
          {
            path: '/documentation/css/buttons/small/outline',
            name: 'Small Outline',
          },
          {
            path: '/documentation/css/buttons/regular/outline',
            name: 'Regular Outline',
          },
          {
            path: '/documentation/css/buttons/large/outline',
            name: 'Large Outline',
          },
          {
            path: '/documentation/css/buttons/links',
            name: 'Links',
          },
        ],
      },
    ],
  },
  {
    name: 'React.js Components',
    path: '/documentation/react/alerts',
    routes: [
      {
        path: '/documentation/react/alerts',
        name: 'Alerts',
      },
      {
        path: '/documentation/react/dropdowns',
        name: 'Dropdowns',
      },
      {
        path: '/documentation/react/menus',
        name: 'Menus',
      },
      {
        path: '/documentation/react/modals',
        name: 'Modals',
      },
      {
        path: '/documentation/react/navbars',
        name: 'Navbars',
      },
      {
        name: 'Popovers',
        state: 'reactPopoversState',
        subRoutes: [
          {
            path: '/documentation/react/popovers/left',
            name: 'Left',
          },
          {
            path: '/documentation/react/popovers/top',
            name: 'Top',
          },
          {
            path: '/documentation/react/popovers/right',
            name: 'Right',
          },
          {
            path: '/documentation/react/popovers/bottom',
            name: 'Bottom',
          },
        ],
      },
      {
        name: 'Tabs',
        state: 'reactTabsState',
        subRoutes: [
          {
            path: '/documentation/react/tabs/text',
            name: 'Text',
          },
          {
            path: '/documentation/react/tabs/icons',
            name: 'Icons',
          },
        ],
      },
      {
        name: 'Tooltips',
        state: 'reactTooltipsState',
        subRoutes: [
          {
            path: '/documentation/react/tooltips/left',
            name: 'Left',
          },
          {
            path: '/documentation/react/tooltips/top',
            name: 'Top',
          },
          {
            path: '/documentation/react/tooltips/right',
            name: 'Right',
          },
          {
            path: '/documentation/react/tooltips/bottom',
            name: 'Bottom',
          },
        ],
      },
    ],
  },
];

export default routes;