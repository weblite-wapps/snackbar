import { toast } from 'react-toastify'
import { globals } from '../helpers/index'

import * as SnackBars from '../components/snackbars/index'

const mergeConfig = config => ({
  ...globals.CONFIG,
  ...config,
})

const systemSnackBarGenerator = severity => ({ title, message, config }) =>
  toast(
    <SnackBars.System title={title} message={message} severity={severity} />,
    mergeConfig(config),
  )

export const success = systemSnackBarGenerator('success')
export const info = systemSnackBarGenerator('info')
export const warn = systemSnackBarGenerator('warn')
export const error = systemSnackBarGenerator('error')

export const clear = toast.dismiss
export const isInView = toast.isActive
export const update = toast.update
