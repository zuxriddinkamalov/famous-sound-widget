/* ============
 * Actions for the widget module
 * ============
 *
 * The actions that are available on the
 * widget module
 */

import * as STATE from './mutation-types';

export default {
  setState({ commit }, { key, value = null }) {
    commit(STATE.SET_STATE, {
      key,
      value,
    });
  },
  resetState({ commit }, payload) {
    commit(STATE.RESET_STATE, payload);
  },
};
