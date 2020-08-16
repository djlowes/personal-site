import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import { skills, categories } from '../data/resume/skills';

const sections = [
  'Books',
  'Podcasts',
  'Movies',
  'Authors',
  'Peloton Instructors',
];

const Resume = () => (
  <Main>
    <Helmet title="Resume" />
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2><Link to="resume">Top 10's</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <div className="education">
        <div className="link-to" id="books" />
        <div className="title">
          <h3>Books</h3>
        </div>
        <p>1 The Art of Communication	Thich Nhat Hanh</p>
        <p>2 The Checklist Manifesto	Atul Gawande</p>
        <p>3 Moonwalking with Einstein	Joshua Foer</p>
        <p>4 Dare to lead Brene Brown</p>
        <p>5 The Heart of teh Buddha's Teachings Thich Nhat Hanh</p>
        <p>6 Sapiens Yuval Noah Harari</p>
        <p>7 Bold Peter Diamandis</p>
        <p>8 Outliers	Malcolm Gladwell</p>
        <p>9 A Complain Free World</p>
        <p>10 Tools of Titans	Tim Ferriss</p>
      </div>
      <div className="education">
        <div className="link-to" id="podcasts" />
        <div className="title">
          <h3>Podcasts</h3>
        </div>
        <p>1 Joe Rogan</p>
        <p>2 Tim Ferriss</p>
        <p>3 Jocko podcast</p>
        <p>4 Sam Harris Podcast</p>
        <p>5 The SaaS Podcast</p>
        <p>6 Freakonomics Radio</p>
        <p>7 Aubrey Marcus</p>
        <p>8 History becomes her</p>
        <p>9 Drunk women solving crime</p>
        <p>10 My death row pen pal</p>
      </div>
      <div className="education">
        <div className="link-to" id="movies" />
        <div className="title">
          <h3>Movies</h3>
        </div>
        <p>1 Power of one</p>
        <p>2 Now you see me</p>
        <p>3 Shawshank redemption</p>
        <p>4 Fight Club</p>
        <p>5 The Matrix</p>
        <p>6 Die Hard (all)</p>
        <p>7 The Dark Knight</p>
        <p>8 The usual suspects</p>
        <p>9 Toy Story</p>
        <p>10 Back to the </p>
      </div>
      <div className="education">
        <div className="link-to" id="authors" />
        <div className="title">
          <h3>Authors</h3>
        </div>
        1 Thich Nhat Hanh<br/>
        2 Malcolm Gladwell<br/>
        3 Tim Ferriss<br/>
        4 Brene Brown<br/>
        5 Yuval Noah Harari<br/>
        6 Atul Gawande<br/>
        1 Power of one<br/>
      </div>
      <div className="education">
        <div className="link-to" id="peloton instructors" />
        <div className="title">
          <h3>Peloton Instructors</h3>
        </div>
        1 Thich Nhat Hanh<br/>
        2 Malcolm Gladwell<br/>
        3 Tim Ferriss<br/>
        1 Power of one<br/>
        1 Power of one<br/>
        1 Power of one<br/>
        1 Power of one<br/>
      </div>


    </article>
  </Main>
);

export default Resume;
