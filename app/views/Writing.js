import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import Main from "../layouts/Main";

const Writing = () => (
  <Main>
    <Helmet title="Stats" />
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2>
            Writing
          </h2>
        </div>
      </header>
      Writing has moved to my <a href="https://djlowes.substack.com/" target="_blank">Substack</a>
    </article>
  </Main>
);

export default Writing;
