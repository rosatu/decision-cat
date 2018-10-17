import React from 'react';
import '../../stylesheets/containers.css'
import {connect} from 'react-redux'
import {handleProSlider} from '../../redux/actions'

 const ProsContainer = ({pros,handleProSlider,weight}) =>  {
    return(
    <div className='column'>
    <h3 className='title'>PROS</h3>
    <label>{"Once you select your pros, drag slider to left for something thats really important, drag to right if it's less important"}</label>
    {pros.map(pro => <div><div className="taskList">{pro.name}</div> <input onChange={(e)=>handleProSlider(pro,e)}type="range" min="0" max="1" name="pro-slider" value={pro.weight} step="0.10" class="slider" id="myRange" key={pro.name} /></div> )}

    </div>
  )
  }

const mapStateToProps = state => {
  return{
    ...state,
    pros: state.pros,
    weight: state.weight
  }
}
export default connect(mapStateToProps, {handleProSlider})(ProsContainer)
