import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";
import work from "../data/work";

import { Modal } from "react-responsive-modal";

const style = { alignItems: "center" };

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
                Startup guy, fascinated by
                performance psychology
              </p>
            </div>
          </header>
          <p>My condensed resume:</p>
          <b>Now:</b>
          <div style ={{'whiteSpace': 'pre-wrap'}}>
          {
          <span style={style}>
            <img src={work.junction.image} alt="junction" height={18} width={18} />
            &nbsp;COO at{" "}
            <a href="https://www.getjunction.io" target="_blank">
              Junction.&nbsp;
            </a>
            The future of work.
          </span>
          }
          </div>
          <div style ={{'whiteSpace': 'pre-wrap'}}>
          {
          <span style={style}>
            <img src={work.sales_coder.image} alt="sales_coder" height={18} width={18} />
            &nbsp;Experimenting at{" "}
            <a href="https://www.salescoder.com" target="_blank">
              Sales Coder.&nbsp;
            </a>
            Teaching AEs how to code.
          </span>
          }
          </div>
          <div style ={{'whiteSpace': 'pre-wrap'}}>
          {
          <span style={style}>
            <img src={work.austin_angel.image} alt="sales_coder" height={18} width={18} />
            &nbsp;Volunteer at{" "}
            <a href="https://www.austinangels.com/" target="_blank">
              Austin Angels.&nbsp;
            </a>
          </span>
          }
          </div>
          <b>Previous:</b>
          <div style ={{'whiteSpace': 'pre-wrap'}}>
          {
          <span style={style}>
            <img src={work.twilio.image} alt="twilio" height={18} width={18} />
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
          }
          </div>
          <div style ={{'whiteSpace': 'pre-wrap'}}>
          {
          <span style={style}>
            <img src={work.yc.image} alt="yc" height={18} width={18} />
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
          }
          </div>
          <div style ={{'whiteSpace': 'pre-wrap'}}>
          {
          <span style={style}>
            <img src={work.google.image} alt="google" height={18} width={18} />
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
          }
          </div>
          <div style ={{'whiteSpace': 'pre-wrap'}}>
          {
          <span style={style}>
            <img src={work.denovo.image} alt="de_novo" height={18} width={18} />
            &nbsp;Built a{" "}
            <a
              href="https://web.archive.org/web/20170218071207/http://www.denovodigital.com.au/"
              target="_blank"
            >
              &nbsp;digital agency&nbsp;
            </a>{" "}
            and sold it to private equity.
          </span>
          }
          </div>
          <div style ={{'whiteSpace': 'pre-wrap'}}>
          {
          <span style={style}>
            <img
              src={work.ebrandz.image}
              alt="de_novo"
              height={18}
              width={18}
            />
            &nbsp;Built a{" "}
            <a
              href="https://web.archive.org/web/20171201071607/http://www.ebrandz.com.au/"
              target="_blank"
            >
              &nbsp;white-labelled SEO dashboard&nbsp;
            </a>{" "}
            and sold it to private equity.
          </span>
          }
          </div>
          <br />
          <p>
            If you want to know more about me, here's an
            <Link to="/about">&nbsp;extended bio</Link>. Sometimes <a href="https://djlowes.substack.com/" target="_blank">I write about things</a> at the intersection of business, technology and psychology. I've worked with some{" "}
            <Link to="/worked-with">world class teams</Link> and I like to learn and <Link to="/about#books">read</Link>. I've ticked a few things off my
            <Link to="/bucket-list"> bucket list</Link>, but there's still lots to see and do.
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
