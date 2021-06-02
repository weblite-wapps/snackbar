import { toast } from 'react-toastify'
import CloseButton from '../components/close-button/index'
export const SNACKBAR_POSITIONS = toast.POSITION
export const SNACKBAR_TYPES = toast.TYPE

export const CONFIG = {
  position: SNACKBAR_POSITIONS.BOTTOM_CENTER,
  autoClose: 3200, // android standard
  closeOnClick: false,
  hideProgressBar: true,
  closeButton: CloseButton,
}

/* MODIFIERS */
export const position = snackBarPosition => {
  CONFIG.position = SNACKBAR_POSITIONS[snackBarPosition]
}

export const autoClose = autoCloseDurationInMs => {
  if (process.env.NODE_ENV === 'development') {
    if (typeof autoCloseDurationInMs !== 'number')
      console.log('[autoClose] => value:number')
    if (autoCloseDurationInMs < 100)
      console.log('[autoClose] => value in ms, you may need value * 1000 ')
  }

  CONFIG.autoClose = autoCloseDurationInMs
}
