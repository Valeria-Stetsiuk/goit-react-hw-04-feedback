import PropTypes from 'prop-types';
import s from './Notification.module.css';

export const Notification = ({ warning }) => {
  return (
    <>
      <p className={s.notification}>{warning}</p>
    </>
  );
};
Notification.propTypes = {
  warning: PropTypes.string,
};