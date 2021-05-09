import { toast } from 'react-toastify'
import { globals } from '../helpers'

import * as SnackBarsSchemes from '../components/snackbars'

const mergeConfig = config => ({
  ...globals.CONFIG,
  ...config,
})

export const success = ({ title, message, config }) =>
  toast.success(
    <SnackBarsSchemes.Success title={title} message={message} />,
    mergeConfig(config),
  )

export const clear = toast.dismiss
export const isInView = toast.isActive
export const update = toast.update
