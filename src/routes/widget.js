/* ============
 * Routes File
 * ============
 *
 * The routes and redirects for dashboard are defined in this file.
 */
import {
  ROOT,
  ROOT_URL,
} from '../constant/routes';

export default [
  {
    name: ROOT,
    path: ROOT_URL,
    component: () => import('../views/widget/Widget.vue'),
  },
];
