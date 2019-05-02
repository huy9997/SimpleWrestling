import React from  'react'
import {Route,BrowserRouter } from 'react-router-dom'
import Login from '../screens/Login'

const Routes =()=>(
  <BrowserRouter>
      <Route exact path="/" component={Login}/>
  </BrowserRouter>
)

export default Routes
