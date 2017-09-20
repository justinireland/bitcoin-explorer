import React from 'react'
import { TimelineEvent } from 'react-event-timeline'
import DateTime from '../../components/DateTime'
import FormattedText from '../../components/FormattedText'

const Event = ({ className, children, color, icon, onClick, timestamp, title, eventLabel }) =>
  <TimelineEvent
    className={className}
    title={<FormattedText text={eventLabel} type="caption" />}
    contentStyle={{
      boxShadow: 'none',
      padding: 0
    }}
    createdAt={<DateTime timestamp={timestamp} />}
    icon={<div style={{marginLeft: -4, marginTop: -12}}>{icon}</div>}
    iconColor={color}
    onClick={onClick}
    >
    {children}
  </TimelineEvent>

export default Event
