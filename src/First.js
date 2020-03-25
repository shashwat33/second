import React, { Component } from 'react'
import './First.css'
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

export class First extends Component {
    render() {
        return (
            <div className="bgimg">
                <div className="text">
                    <h1>MEMORY TEST GAME</h1>
                    <h3>Dont click Any Image Twice!!</h3>
                    <Link to='/Home'>
                    <RaisedButton label="GET STARTED" primary={true} style={style}  />
                    </Link>



                </div>

            </div>
                
            
        )
    }
}

const style = {
    margin: 12,

  };

export default First;



