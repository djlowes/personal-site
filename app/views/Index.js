import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";
import work from "../data/work";

import { Modal } from "react-responsive-modal";

const style = { display: "flex", alignItems: "center" };

class Index extends React.Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    console.log("working");
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
    return (
      <Main>
        <article className="post" id="index">
          <header>
            <div className="title">
              <h2>
                <Link to="/">Me?</Link>
              </h2>
              <p>
                Startup guy, always wearing lots of hats, fascinated by
                performance psychology
              </p>
            </div>
          </header>
          <p>Here's a snapshot of what I've been doing lately:</p>
          <span style={style}>
            <img src={work.twilio.image} alt="de_novo" height={22} width={22} />
            &nbsp;Technical lead through rocketship growth at{" "}
            <a href="https://twilio.com" target="_blank">
              &nbsp;twilio.&nbsp;
            </a>
            Joined{" "}
            <a href="#" onClick={this.onOpenModal}>
              &nbsp;here
            </a>
            <Modal open={open} onClose={this.onCloseModal} center>
              <img src={work.marketcap.image} alt="marketcap" />
            </Modal>
            , now market cap is{" "}
            <a
              href="https://ycharts.com/companies/TWLO/market_cap"
              target="_blank"
            >
              &nbsp;here.
            </a>
          </span>
          <span style={style}>
            <img src={work.yc.image} alt="de_novo" height={24} width={24} />
            &nbsp;Lead revenue at{" "}
            <a href="https://snappr.co" target="_blank">
              &nbsp;Snappr.&nbsp;
            </a>
            We were the{" "}
            <a
              href="https://mattermark.com/the-top-25-y-combinator-winter-2017-demo-day-startups/"
              target="_blank"
            >
              &nbsp;fastest growing company&nbsp;
            </a>{" "}
            in{" "}
            <a href="https://www.ycombinator.com/" target="_blank">
              &nbsp;YCombinator's&nbsp;
            </a>{" "}
            W17 batch.
          </span>
          <span style={style}>
            <img src={work.google.image} alt="de_novo" height={24} width={24} />
            &nbsp;Taught{" "}
            <a
              href="https://www.thinkwithgoogle.com/marketing-resources/micro-moments/micro-moments-understand-new-consumer-behavior/"
              target="_blank"
            >
              &nbsp;micro-moments&nbsp;
            </a>{" "}
            at{" "}
            <a
              href="https://www.google.com/search?sxsrf=ALeKk01s0Y-q6n1bUQNqN5fsW9Kvx1J6Rw%3A1594499974392&source=hp&ei=hiMKX_ftFMnksAXBkbGoBw&q=what+you+searching+for%3F&oq=what+you+searching+for%3F&gs_lcp=CgZwc3ktYWIQAzIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeOgcIIxDqAhAnOgQIIxAnOgUIABCRAjoICAAQsQMQgwE6BQgAELEDOgIIADoECAAQClCtCVi7ImC-I2gBcAB4AIABaogBrAySAQQyMi4xmAEAoAEBqgEHZ3dzLXdperABCg&sclient=psy-ab&ved=0ahUKEwj3yMKkh8bqAhVJMqwKHcFIDHUQ4dUDCAk&uact=5"
              target="_blank"
            >
              &nbsp;Google.&nbsp;
            </a>
          </span>
          <span style={style}>
            <img src={work.denovo.image} alt="de_novo" height={22} width={22} />
            &nbsp;Built a{" "}
            <a
              href="https://web.archive.org/web/20170218071207/http://www.denovodigital.com.au/"
              target="_blank"
            >
              &nbsp;digital agency&nbsp;
            </a>{" "}
            and sold it in an all-cash deal.
          </span>
          <span style={style}>
            <img
              src={work.ebrandz.image}
              alt="de_novo"
              height={24}
              width={24}
            />
            &nbsp;Built a{" "}
            <a
              href="https://web.archive.org/web/20171201071607/http://www.ebrandz.com.au/"
              target="_blank"
            >
              &nbsp;white-labelled SEO dashboard&nbsp;
            </a>{" "}
            and sold it in an all-cash deal.
          </span>
          <br />
          <p>
            If you want to read more about me, you can do that
            <Link to="/about">&nbsp;here</Link>, or you can check out{" "}
            <Link to="/writing">my writing</Link>, who I've{" "}
            <Link to="/worked-with">worked with</Link>, or my{" "}
            <Link to="/top-10s">top 10 books, blogs, podcasts and products</Link>.
          </p>
          <p>
            {" "}
            Source for this site available{" "}
            <a href="https://github.com/djlowes/personal-site" target="_blank">
              here
            </a>
            .
          </p>
        </article>
      </Main>
    );
  }
}

export default Index;
