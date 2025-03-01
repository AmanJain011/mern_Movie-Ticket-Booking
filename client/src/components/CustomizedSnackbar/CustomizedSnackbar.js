// import React from 'react';
// import PropTypes from 'prop-types';
// import Snackbar from '@material-ui/core/Snackbar';
// import SnackbarContentWrapper from '../SnackbarContentWrapper';

// const CustomizedSnackbar = props => {
//   const [open, setOpen] = React.useState(false);
//   const { isOpen, vertical, horizontal, variant, message } = props;

//   function handleClose(event) {
//     setOpen(false);
//   }

//   return (
//     <Snackbar
//       anchorOrigin={{
//         vertical,
//         horizontal
//       }}
//       open={isOpen}>
//       <SnackbarContentWrapper
//         style={{ color: '#fff' }}
//         onClose={handleClose}
//         variant={variant}
//         message={message}
//       />
//     </Snackbar>
//   );
// };

// CustomizedSnackbar.propTypes = {
//   isOpen: PropTypes.bool,
//   vertical: PropTypes.string,
//   horizontal: PropTypes.string,
//   variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
//   message: PropTypes.string
// };
// export default CustomizedSnackbar;


import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContentWrapper from '../SnackbarContentWrapper';

const CustomizedSnackbar = ({ isOpen, vertical, horizontal, variant, message, onClose }) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical,
        horizontal
      }}
      open={isOpen}
      onClose={onClose} // ✅ Ensure the Snackbar can close
    >
      <SnackbarContentWrapper
        style={{ color: '#fff' }}
        onClose={onClose} // ✅ Pass onClose correctly
        variant={variant}
        message={message}
      />
    </Snackbar>
  );
};

CustomizedSnackbar.propTypes = {
  isOpen: PropTypes.bool.isRequired, // ✅ Mark as required if always needed
  vertical: PropTypes.string,
  horizontal: PropTypes.string,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
  message: PropTypes.string.isRequired, // ✅ Ensured message is required
  onClose: PropTypes.func.isRequired // ✅ Added missing prop validation for onClose
};

export default CustomizedSnackbar;
