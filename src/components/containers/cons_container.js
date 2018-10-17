import React, {Component} from 'react';
import '../../stylesheets/containers.css'
import {connect} from 'react-redux'
import {handleConSlider} from '../../redux/actions'

class ConsContainer extends Component{
  render() {
    return(
    <div className='column'>
    <h3 className='title'>CONS</h3>
    <label>{"Once you select your cons, drag slider to left for something thats really important, drag to right if it's less important"}</label>
  {this.props.cons.map(con => <div><div className="taskList">{con.name}</div> <input onChange={(e)=>this.props.handleConSlider(con,e)}type="range" min="0" max="1" name="con-slider" value={con.weight} step="0.10" class="slider" id="myRange" key={con.name}/> </div>)}
    </div>
  )
  }
}

const mapStateToProps = state => {
  return{
    ...state,
    cons: state.cons
  }
}
export default connect(mapStateToProps, {handleConSlider})(ConsContainer)
