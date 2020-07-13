import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import Main from "../layouts/Main";
import data from "../data/images";
import url from "url";
import Cell from "../components/Projects/Cell";

const Clients = () => (
  <Main>
    <Helmet title="Projects" />
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>
            <Link to="/worked-with">Who I've worked with</Link>
          </h2>
          <p>
            In the last 10 years I've worked with product teams, engineering
            teams and executives at these companies
          </p>
        </div>
      </header>
      <div className="mini-post">
          {data.map((project) => (
            <div className="image">
            <Cell data={project} key={project.title} />
            </div>
          ))}
        </div>
    </article>
  </Main>
);

export default Clients;
