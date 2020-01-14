import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

const form = () => (<div><p>商品注文ページ</p></div>)

const Order = () => {
    return(
        <Router>
            <div>
                <div>
                    <p><Link to='/form'>注文へ進む</Link></p>
                </div>
                <div>
                    <Route path='/form' exact component={form}/>   
                </div>
            </div>
        </Router>
    )
}

export default Order;