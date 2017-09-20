import React from 'react'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import Typography from 'material-ui/Typography'

const styles = {
  text: {
    overflow: 'hidden'
  },
  ellipsisLeft: {
    direction: 'rtl',
    textOverflow: 'ellipsis'
  },
  ellipsisRight: {
    direction: 'ltr',
    textOverflow: 'ellipsis'
  }
}
const styleSheet = createStyleSheet('FormattedText', theme => ({
  text: {
    overflow: 'hidden'
  },
  ellipsisLeft: {
    direction: 'rtl',
    textOverflow: 'ellipsis'
  },
  ellipsisRight: {
    direction: 'ltr',
    textOverflow: 'ellipsis'
  }
}));

const FormattedText = ({
  align = "left",
  classes,
  className,
  containerWidth,
  color,
  ellipsis = false,
  text,
  truncate = false,
  type,
  style,
  ...props
}) =>
  <Typography
    align={align}
    style={{...styles.text, ...style }}
    className={`
      ${className}
      ${ellipsis === 'left' ? classes.ellipsisLeft : ellipsis === 'right' ? classes.ellipsisRight : ''}
    `}
    color={color}
    type={type}
    >
    {text}
  </Typography>

export default withStyles(styleSheet)(FormattedText)
