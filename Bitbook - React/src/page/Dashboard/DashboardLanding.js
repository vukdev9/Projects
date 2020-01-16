import React from "react";
import Title from "../../components/title/Title"
import Header from '../../components/header/Header'
import Dashboard from "./Dashboard";
import { Link, withRouter } from 'react-router-dom'


const DashboardLanding = () => (
  <div className="container">


    <Title title="Dashboard" />
    <Dashboard />

  </div>
);

export default DashboardLanding