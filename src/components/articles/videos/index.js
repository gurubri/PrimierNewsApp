import React, { Component } from "react";

import axios from "axios";

import { URL } from "../../../config";
import Header from "./header";

class VideosArticle extends Component {
  state = {
    article: [],
    team: [],
  };

  componentDidMount() {
    axios.get(`${URL}/videos?id=${this.props.match.params.id}`).then((res) => {
      let article = res.data[0];

      axios.get(`${URL}/teams?id=${article.team}`).then((res) => {
        this.setState({
          article,
          team: res.data,
        });
      });
    });
  }
  render() {
    const article = this.state.article;
    const team = this.state.team;
    return (
      <div>
        <Header teamData={team[0]} />
        <div className="videoWrapper">
          <h1>{article.title}</h1>
          <iframe
            src={`https://www.youtube.com/embed/${article.url}`}
            title="videoplayer"
            width="98%"
            height="300px"
          ></iframe>
        </div>
      </div>
    );
  }
}

export default VideosArticle;
