/* ============
 * Mixins for working with time
 * ============
 *
 */

import moment from 'moment';

export default {
  filters: {
    relativeTime(date, sourceFormat) {
      if (!date) return '';
      if (sourceFormat) return moment(date, sourceFormat).fromNow();
      return moment(date).fromNow();
    },
    time(date, format, sourceFormat) {
      if (!date) return '';
      if (sourceFormat) return moment(date, sourceFormat).format(format);
      return moment(date).format(format);
    },
  },
};
