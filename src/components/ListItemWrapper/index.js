import React from 'react'
import Card, { CardHeader } from 'material-ui/Card'
import { LinearProgress } from 'material-ui/Progress'

const styles = {
  card: {
    maxWidth: 800,
    padding: 5,
    marginBottom: 15
  },
  listItemWrapper: {
      width: '99%',
      margin: 'auto'
  }
}

const ListIremWrapper = ({
  children,
  className,
  icon,
  onClick,
  progressColor = "primary",
  progressValue,
  title
}) =>
  <div style={styles.listItemWrapper} onClick={onClick}>
    {
      progressValue &&
      <LinearProgress color={progressColor} mode="determinate" value={progressValue} />
    }
    <Card style={styles.card}>
      {
        title &&
        <CardHeader avatar={icon ? icon : null} title={title} />
      }
      {children}
    </Card>
  </div>

export default ListIremWrapper
