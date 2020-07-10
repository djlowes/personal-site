import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

// Validates the first half of an email address.
const validateText = (text) => {
  // NOTE: Passes RFC 5322 but not tested on google's standard.
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))$/;
  return re.test(text) || text.length === 0;
};

const messages = [
  'anything',
  'like',
  'hi',
  'whatsup',
  'gday-mate',
  'you-can-contact-me-on-anything',
  'well, not anything!',
  'but-most-things',
  'you get the point..',
  'whoops',
  'if-you-would-like-to-reach-me',
  'be-specific-and-use-an-email-such-as',
  'work',
  'roadmap',
  'or-even',
  'coffee',
  'i-will-stop-distracting-you-now',
  'or-will-I.....',
  'thanks',
];

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay) {
      const id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }
    return () => {}; // pass linter
  }, [delay]);
};

const Nav = () => {
  const hold = 50; // ticks to wait after message is complete before rendering next message
  const delay = 50; // tick length in mS

  const [idx, updateIter] = useState(0); // points to current message
  const [message, updateMessage] = useState(messages[idx]);
  const [char, updateChar] = useState(messages[idx].length); // points to current char
  const [isActive, setIsActive] = useState(true); // disable when all messages are printed

  useInterval(() => {
    let newIdx = idx;
    let newChar = char;
    if (char - hold >= messages[idx].length) {
      newIdx += 1;
      newChar = 0;
    }
    if (newIdx === messages.length) {
      setIsActive(false);
    } else {
      updateMessage(messages[newIdx].slice(0, newChar));
      updateIter(newIdx);
      updateChar(newChar + 1);
    }
  }, isActive ? delay : null);

  return (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpeg`} alt="" />
      </Link>
      <header>
        <h2>David J Lowes</h2>
        <b>Get in touch at</b>
        <div
          className="inline-container"
          style={validateText(message) ? {} : { color: 'red' }}
          onMouseEnter={() => setIsActive(false)}
          onMouseLeave={() => (idx < messages.length) && setIsActive(true)}
        >
          <a href={validateText(message) ? `mailto:${message}@djlowes.com` : ''}>
            <span>{message}</span>
            <span>@djlowes.com</span>
          </a>
        </div>
      </header>
    </section>



    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">Site built on react using<Link to="https://github.com/mldangelo/personal-site"> Michael D&apos;Angelo's react app</Link>. Using <Link to="https://www.sanity.io/">Sanity</Link> as headless CMS</p>
    </section>
  </section>
);
};

export default Nav;
