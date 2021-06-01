import { IconButton } from '@material-ui/core'
// style
import useStyle from './close-button.style'

export default function CloseButton({ closeToast }) {
  const classes = useStyle()
  return (
    <IconButton onClick={closeToast} className={classes.root} disableRipple>
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15">
        <path
          d="M15 13.62L8.88 7.5l6.11-6.12L13.63 0 7.5 6.12 1.38 0 0 1.38 6.13 7.5 0 13.62 1.38 15 7.5 8.87l6.12 6.12z"
          fill="#575757"
        />
      </svg>
    </IconButton>
  )
}
