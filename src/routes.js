import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// Components
import Home from "./components/home/home";
import NewsMain from "./components/newwsmain/index";
import VideosMain from "./components/videosmain/index";
import Layout from "./hoc/layout/layout";
import NewsArticle from "./components/articles/News/post/index";
import VideosArticle from "./components/articles/videos/index";
class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/news" exact component={NewsMain} />
          <Route path="/videos" exact component={VideosMain} />
          <Route path="/articles/:id" component={NewsArticle} />
          <Route path="/videos/:id" component={VideosArticle} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
