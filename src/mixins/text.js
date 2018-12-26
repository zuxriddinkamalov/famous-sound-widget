/* ============
 * Mixins for working with text
 * ============
 *
 */
import { is } from 'ramda';

/* eslint-disable no-param-reassign */
const isFloat = n => Number(n) === n && n % 1 !== 0;

export default {
  filters: {
    shortAddress(address) {
      const newAddr =
        `${address.slice(0, 6)
        }...${
          address.slice(address.length - 4, address.length)}`;

      return newAddr;
    },
    shortEmail(email) {
      const re = /^([a-zA-Z0-9]{1,2})(.+?)@/;
      return email.replace(re, '$1...@');
    },
    slice(text, length) {
      if (!is(String, text)) return;
      if (text.length >= length) {
        return `${text.slice(0, length)}...`;
      }
      return text;
    },
    money(price, fixed = 3) {
      if (price) {
        let val;
        if (isFloat(price)) {
          val = parseFloat(price).toFixed(fixed);
        } else val = parseInt(price, 0);
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      return '0';
    },
    capitalize(value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
};
