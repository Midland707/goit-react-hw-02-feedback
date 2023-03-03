import PropTypes from 'prop-types';
import css from './Notification.module.css';

export const Notification = ({ message }) => (
  <span className={css.notifi}>{message}</span>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
