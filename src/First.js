import React, { Component } from 'react'
import './First.css'
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import AppBarExampleIcon from './Appbar' 
import LinearProgressExampleSimple from './Linearpro'
import * as Colors from 'material-ui/styles/colors';
import { purple500 } from 'material-ui/styles/colors';


const style = {
    margin: 12,
    
  };
export class First extends Component {
    render() {
        return (
            <div className="bgimg">
                <AppBarExampleIcon />
                <div className="text">
                    <h1>MEMORY TEST GAME</h1>
                    <h3>Dont click Any Image Twice!!</h3>
                    <Link to='/Home'>
                    <RaisedButton label="GET STARTED" backgroundColor="#8E24AA" labelColor="white" style={style}  />
                    </Link>
                   <div > <LinearProgressExampleSimple /></div>
                    



                </div>
                

            </div>
                
            
        )
    }
}


export default First;



