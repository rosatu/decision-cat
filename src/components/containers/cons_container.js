import React, {Component} from 'react';
import '../../stylesheets/containers.css'
import Factor from '../factor'

export default class FactorsContainer extends Component{
  render() {
    return(
    <div className='column'>
    <h3 className='title'>CONS</h3>
    <div className="taskList"></div>
    </div>
  )
  }
}
