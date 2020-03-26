import React,{ Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './Home';
import First from './First';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Colors from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    textColor: Colors.darkBlack,
    primary1Color: Colors.purple500,
    primary2Color: Colors.indigo700,
    accent1Color: Colors.redA200,
    pickerHeaderColor: Colors.darkBlack,
    alternateTextColor: Colors.white
  },
  
});
class Ap extends Component{
  render(){
    return(
      <MuiThemeProvider muiTheme={muiTheme}>
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