import * as React from 'react'
import { Typography } from '@material-ui/core'
// style
import cns from 'clsx'
import useStyle from './system.style'

export default function SystemSnackBar({
  title,
  message,
  className,
  color,
  iconOrText: IconOrText,
}) {
  const classes = useStyle({ color })
  return (
    <div className={cns(classes.root, className)}>
      <div className={classes.mark}>
        <Typography
          component="span"
          data-type="icon"
          className={classes.markContent}
        >
          {IconOrText}
        </Typography>
      </div>

      <div className={classes.content}>
        <Typography
          align="right"
          component="h1"
          data-type="title"
          className={classes.title}
        >
          {title}
        </Typography>

        <Typography
          align="right"
          data-type="message"
          className={classes.message}
        >
          {message}
        </Typography>
      </div>
    </div>
  )
}
