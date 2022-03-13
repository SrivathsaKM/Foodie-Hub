import { useContext, useEffect, useState, FC, SyntheticEvent } from 'react';
import { Snackbar } from '@mui/material';
import { GlobalContext } from '../context/GlobalContext';

const ToastMessage: FC = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const [open, setOpen] = useState(false);
  const { toastLists } = state;

  useEffect(() => {
    if (toastLists.length) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [toastLists.length]);

  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch({
      type: 'HIDE_TOAST',
      payload: {},
    });
    setOpen(false);
  };

  return (
    <div>
      <Snackbar open={open} style={{ zIndex: '999999', marginTop: '0' }} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} className='snackbar'>
        {toastLists[0] && (
          <div className={toastLists[0].toastType}>
            <p className={toastLists[0].toastType}>
              <img className='toastIcon' src={'toast_' + toastLists[0].toastType + '.svg'} alt=' ' />

              <span className='toastMessage'>{toastLists[0].message}</span>
              <img onClick={() => handleClose()} className='closeIcon' src={'toast_' + toastLists[0].toastType + '_close.svg'} alt=' ' />
            </p>
          </div>
        )}
      </Snackbar>
    </div>
  );
};

export default ToastMessage;
