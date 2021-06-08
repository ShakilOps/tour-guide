import React from 'react';
import Data from '../../fakeData/fakeData';
import Header from '../Header/Header';
import "./Booking.css";

const Booking = () => {
           
    return (
        <div className="main overlay">
            <Header></Header>
            <div className="row">
                <div className="placeDetails">
                    <div className="details">
                        <h1>fghbfg</h1>
                        <p>jhsdbbcjdb</p>
                    </div>
                </div>
                <div style = {{width :'20%', right: '135px'}}>
                    <div className="form-container">
                        <form>
                            <label htmlFor="">Origin</label>
                            <input className="input" type="text" placeHolder="Enter your origin"/>
                            <label htmlFor="">Destination</label>
                            <input className="input" type="text"/>
                            <div className="row" style = {{width : '100%', marginBottom: '50px'}}>
                                <div style = {{width: '45%', marginLeft: '15px'}}>
                                    <label htmlFor="">From</label>
                                    <input className = "input" type="date"/>
                                </div>
                                <div style = {{width : '50%'}}>
                                    <label htmlFor="">To</label>
                                    <input className="input" type="date"/>
                                </div>
                            </div>
                            <input type="submit" value  = "Start Booking"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;