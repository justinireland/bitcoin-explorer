import React from 'react'
import moment from 'moment'
import Typography from 'material-ui/Typography'

const DateTime = ({ timestamp }) =>
  <Typography>
    {moment.unix(timestamp).format('dddd, MMMM Do, YYYY h:mm:ss A')}
  </Typography>

export default DateTime
