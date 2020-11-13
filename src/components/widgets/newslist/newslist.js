import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link } from "react-router-dom";
import axios from "axios";

import { URL } from "../../../config";
import CardInfo from "../cardinfo/cardinfo";

class Newslist extends Component {
  state = {
    teams: [],
    items: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount,
  };

  componentDidMount() {
    this.request(this.state.start, this.state.end);
  }
  request = (start, end) => {
    if (this.state.teams.length < 1) {
      axios
        .get(`${URL}/teams`)
        .then((res) => this.setState({ teams: res.data }));
    }

    axios.get(`${URL}/articles?_start=${start}&_end=${end}`).then((res) => {
      this.setState({
        items: [...this.state.items, ...res.data],
      });
    });
  };
  loadmore = () => {
    let end = this.state.end + this.props.amount;
    this.setState({ end });
    this.request(this.state.end, end);
  };
  renderNews = (type) => {
    let template = null;

    switch (type) {
      case "card":
        template = this.state.items.map((item, i) => (
          <CSSTransition
            classNames={{
              enter: "newsListWrapper",
              enterActive: "newsListWrapper_enter",
            }}
            key={i}
            timeout={500}
          >
            <div>
              <div className="newslistItem">
                <Link to={`/articles/${item.id}`}>
                  <CardInfo
                    teams={this.state.teams}
                    team={item.team}
                    date={item.date}
                  />
                  <h2>{item.title}</h2>
                </Link>
              </div>
            </div>
          </CSSTransition>
        ));
        break;
      default:
        template = null;
    }

    return template;
  };

  render() {
    return (
      <div className="mainList">
        <TransitionGroup component="div" className="list">
          {this.renderNews(this.props.type)}
        </TransitionGroup>
        <div onClick={() => this.loadmore()} className="loadmore">
          Load more
        </div>
      </div>
    );
  }
}

export default Newslist;
