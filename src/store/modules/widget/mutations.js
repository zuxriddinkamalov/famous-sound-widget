/* ============
 * Mutations for the widget module
 * ============
 *
 * The mutations that are available on the
 * widget module.
 */

import { forEach } from 'ramda';
import * as STATE from './mutation-types';

/* eslint-disable no-param-reassign */
export default {
  [STATE.SET_STATE](state, { key, value = null }) {
    state[key] = value;
  },
  [STATE.RESET_STATE](state, keys = []) {
    forEach((key) => {
      state[key] = null;
    }, keys);
  },
};
