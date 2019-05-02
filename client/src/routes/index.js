import React from  'react'
import {Route,BrowserRouter } from 'react-router-dom'
import HelloWorld from '../screens/helloWorld'

const Routes =()=>(
  <BrowserRouter>
      <Route exact path="/" component={HelloWorld}/>
  </BrowserRouter>
)

export default Routes
