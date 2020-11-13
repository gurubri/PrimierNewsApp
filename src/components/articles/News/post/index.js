import React, { Component } from "react";
import axios from "axios";

import { URL } from "../../../../config";
import Header from "./header";

class NewsArticle extends Component {
  state = {
    article: [],
    team: [],
  };

  componentDidMount() {
    axios
      .get(`${URL}/articles?id=${this.props.match.params.id}`)
      .then((res) => {
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
      <div className="articleWrapper">
        <Header
          teamData={team[0]}
          date={article.date}
          author={article.author}
        />
        <div className="article">
          <h1 className="article-header">{article.title}</h1>
          <div
            className="article-image"
            style={{
              background: `url('/images/articles/${article.image}')`,
            }}
          ></div>
          <p className="article-paragraph">{article.body}</p>
        </div>
      </div>
    );
  }
}

export default NewsArticle;
