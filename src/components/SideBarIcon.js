import { Button } from '@material-ui/core'
import React, { Component } from 'react'


import { connect } from 'react-redux'
import './SideBarIcon.css'



class SideBarIcon extends Component {
  render() {
    const {Icon,text}=this.props
    console.log(this.props,' I m from somewhere')
    return (
      <div>
               <Button className="sidebaricon" onClick={()=>   
               this.props.fetchMyMovie(ComedyMovies)}>
              <Icon />

              {text}
            </Button>

      </div>
    )
  }
}



const mapStateToProps=state=> {
  console.log(state,' Im from there')
  return {movies:state}
}

export default connect(mapStateToProps,{fetchMyMovie})(SideBarIcon)
