import React from "react";
import { userRequests } from '../../services/userFetch'
import { Row } from '../../components/Row/Row'
import DashboardEnclose from './DashboardEnclose'
import './DashBoard.css'

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      users: [],
      comments: []
    };
  }

  getInfo() {
    userRequests.posts()
      .then(posts => this.setState({ posts }));
    userRequests.users()
      .then(users => this.setState({ users }));
    userRequests.comments()
      .then(comments => this.setState({ comments }));
  }
  componentDidMount() {
    this.getInfo();
  }

  render() {


    return (
      <Row>
        <DashboardEnclose src="https://cdn3.iconfinder.com/data/icons/social-media-2172/128/posts-512.png" number={this.state.posts.length} text="Total posts" />
        <DashboardEnclose src="https://cdn0.iconfinder.com/data/icons/free-daily-icon-set/512/Comments-512.png" number={this.state.comments.length} text="Total comments" />
        <DashboardEnclose src="https://cdn3.iconfinder.com/data/icons/rcons-user-action/32/boy-512.png" number={this.state.users.length} text="Users" />
      </Row>
    );
  }
}

export default Dashboard;


