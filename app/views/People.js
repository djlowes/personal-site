import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import Main from "../layouts/Main";

import Site from "../components/Stats/Site";

const People = () => (
  <Main>
    <Helmet title="Stats" />
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2>
            <Link to="/want-to">Who I want to work with</Link>
          </h2>
          <p>
            This is a list of people I would love to work with one day. If you
            know one of them, perhaps you could make an introduction!
          </p>
        </div>
      </header>
      <Site />
    </article>
  </Main>
);

export default People;
