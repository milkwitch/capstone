import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllEntries} from '../store'
import SingleDay from './single-day-view'

class UserHistory extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.getEntries()
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.allEntries.map(entry => (
            <SingleDay key={entry.id} entry={entry} />
          ))}
        </ul>
      </div>
    )
  }
}

const mapState = state => ({
  allEntries: state.eveningEntry.allEntries
})

const mapDispatch = dispatch => ({
  getEntries: () => dispatch(getAllEntries())
})

export default connect(mapState, mapDispatch)(UserHistory)