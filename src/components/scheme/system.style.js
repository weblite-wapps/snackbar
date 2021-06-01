import { makeStyles } from '@material-ui/core'

export default makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: '5px 5px 5px 0',
    userSelect: 'none',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    flexGrow: 2,
    overflow: 'hidden',
  },
  title: {
    fontSize: 14,
    lineHeight: '16px',
    color: '#000',
    fontWeight: 700,
    fontFamily: 'inherit',
  },
  message: {
    fontSize: 12,
    lineHeight: '16px',
    color: '#7f7f7f',
    fontWeight: 500,
    // multi line clamp
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: props => props.maxLine || 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    wordBreak: 'break-word',
    fontFamily: 'inherit',
  },
  mark: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: 28,
    height: 28,
    borderRadius: 28,
    flexShrink: 0,
    backgroundColor: props => props.color,

    marginLeft: 13,
  },
  markContent: {
    fontSize: 23,
    lineHeight: '16px',
    fontWeight: 700,
    color: '#fff',
  },
})
