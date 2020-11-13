import React, { Component } from "react";
import axios from "axios";

import { URL } from "../../../config";

import SliderTemplates from "./slider_templates";
class NewsSlider extends Component {
  state = {
    news: [],
  };

  componentWillMount() {
    axios
      .get(
        `${URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`
      )
      .then((res) => {
        this.setState({
          news: res.data,
        });
      });
  }
  render() {
    return (
      <SliderTemplates
        data={this.state.news}
        type={this.props.type}
        settings={this.props.settings}
      />
    );
  }
}
export default NewsSlider;
