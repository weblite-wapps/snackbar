import * as React from 'react'
import SystemSnackBarScheme from '../scheme/system'
// const
import { SEVERITY_TO_TITLE } from './system.local'
import { SEVERITY_TO_COLOR } from '../../style/index'

export default function SystemSnackBar({ title, message, severity }) {
  return (
    <SystemSnackBarScheme
      title={title || SEVERITY_TO_TITLE[severity]}
      message={message}
      color={SEVERITY_TO_COLOR[severity]}
      iconOrText="!"
    />
  )
}
