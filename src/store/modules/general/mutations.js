/* ============
 * Mutations for the general state
 * ============
 *
 * The mutations that are available on the
 * general state.
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
