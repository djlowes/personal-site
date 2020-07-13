import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Main from '../layouts/Main';
import data from '../data/clients';
import url from 'url';

// const list2 = ["uber", "netflix", "walmart", "slack", "doordash", "amazon", "square", "lyft", "southwest", "dell", "airbnb", "wish", "intuit", "circlek", "zillow", "yelp", "wag", "frost-bank", "USAA", "valero", "houzz", "greendot", "UT", "HEB", "splunk", "rover", "rackspace", "nubank", "mindbody", "tinder", "loandepot", "medallia", "lime", "insightly", "gympass"];
const list = ["../data/companies/dell.png", "../data/companies/uber.png", "../data/companies/netflix.png", "../data/companies/rover.png", "../data/companies/slack.png", "../data/companies/square.png"]
const images = list.map(image => {
   return <img key={image} src={image} className="img-responsive" />
});

const Clients = () => (
  <Main>
    <Helmet title="Projects" />
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2><Link to="/worked-with">Who I've worked with</Link></h2>
          <p>In the last 10 years I've worked with product teams, engineering teams and executives at these companies</p>
          <img src="./dell.png" />
        </div>
      </header>
      <div className="container">
      <footer className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <h4>Some text</h4>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
           { images }
        </div>
    </footer>
    </div>
    </article>
  </Main>
);

export default Clients;
