import React from 'react';
import {Col, Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import $ from 'jquery';
const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger'];

import 'react-bootstrap/dist/react-bootstrap.min.js';
import { ButtonToolbar,DropdownButton,MenuItem  } from 'react-bootstrap';
class TopMenu extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        $('#menuBtn a').on('click', function () {
            $('#menuBtn .dropdown-toggle').click()
        })
    }
    render()
    {
       return(
           <div className=" bg-light">


               <img src="/images/blockfreight_logo_grey.svg" width="300px" />
           <nav className="navbar navbar-expand-lg navbar-light bg-light float-right">
            {/*<a className="navbar-brand" href="#">Navbar</a>*/}

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="dashboard">Dashboard <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="messages">Messages</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="payment">License Transactions</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="profile">Profile</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="logout">Logout</a>
                    </li>
                </ul>
            </div>

        </nav>
           </div>
               )
    }
}
export default  TopMenu;