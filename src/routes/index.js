/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

import widget from './widget';

export default [
  {
    path: '/',
    component: () => import('../views/Index.vue'),
    children: [
      ...widget,
    ],
  },
  {
    path: '/*',
    redirect: '/',
  },
];
