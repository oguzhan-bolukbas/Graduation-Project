import React, {Component} from 'react';
import '../App.css'
// Components
import AppbarHome from "../components/appbarHome";
import PaperGAApplications from "../components/paperGAApplications";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';


class whatisGA extends Component{
  componentDidMount() {
    document.body.style.background = "#fff";
    document.body.style.marginLeft = "370px";
    document.body.style.marginRight = "100px";
  }
  render() {
    return (
      <div className="home">
        <AppbarHome/>
        <PaperGAApplications/>
        <Button variant="contained" color="primary" style={{float: 'left', marginTop: "5px"}} className="float-right"
                component={Link} to="/dersler/genetik-algoritma-nedir">
          <NavigateBeforeIcon/> GERİ </Button>
        <Button variant="contained" color="primary" style={{float: 'left', marginLeft: "2px", marginTop: "5px"}}
                className="float-right" component={Link} to="/dersler/genetik-algoritma-nasil-calisir">
          İLERİ <NavigateNextIcon/> </Button>
      </div>
    );
  }
}

export default whatisGA;