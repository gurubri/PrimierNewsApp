import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { URL } from "../../../config";

import VideosListTemplate from "./videolisttemplate";
export default class componentName extends Component {
  state = {
    teams: [],
    videos: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount,
  };
  loadmore = () => {
    let end = this.state.end + this.props.amount;
    this.setState({ end });
    this.request(this.state.end, end);
  };

  componentWillMount() {
    this.request(this.state.start, this.state.end);
  }
  request = (start, end) => {
    if (this.state.teams.length < 1) {
      axios
        .get(`${URL}/teams`)
        .then((res) => this.setState({ teams: res.data }));
    }

    axios.get(`${URL}/videos?_start=${start}&_end=${end}`).then((res) => {
      this.setState({
        videos: [...this.state.videos, ...res.data],
      });
    });
  };
  renderVideos = () => {
    let template = null;
    switch (this.props.type) {
      case "card":
        template = (
          <VideosListTemplate
            data={this.state.videos}
            teams={this.state.teams}
          />
        );
        break;
      default:
    }
    return template;
  };
  renderTitle = () => {
    return this.props.title ? (
      <h3>
        <strong>Premier League Videos</strong>
      </h3>
    ) : null;
  };
  renderButton = () => {
    return this.props.loadmore ? (
      <div className="loadmore " onClick={() => this.loadmore()}>
        Load more
      </div>
    ) : (
      <div className="loadmore">
        <Link to="/videos">More videos</Link>
      </div>
    );
  };
  render() {
    return (
      <div className="videolist">
        {this.renderTitle()}
        {this.renderVideos()}
        {this.renderButton()}
      </div>
    );
  }
}
