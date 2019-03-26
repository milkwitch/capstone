import React from 'react'
import {Prediction, InputSummary, InputChart} from './'
import moment from 'moment'

export default function SingleDay(props) {
  return (
    <div>
      <h4>
        Day Summary: {moment(props.entry.createdAt).format('dddd MMM Do')}
      </h4>
      <div className="col s6">
        <InputSummary input={props.entry} />
        <InputChart input={props.entry} />
      </div>
      <div className="col s6">
        <Prediction
          tension={props.entry.tension}
          pleasant={props.entry.pleasant}
          energy={props.entry.energy}
        />
      </div>
    </div>
  )
}
