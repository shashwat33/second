import React,{ Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './Home';
import First from './First';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class Ap extends Component{
  render(){
    return(
      <MuiThemeProvider>
      <BrowserRouter>
           <Fragment>

      <div>
      <Route  exact path="/" component={First} />
        <Route  path="/Home" component={App} />
      </div>
      </Fragment>
      </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}
export default Ap;