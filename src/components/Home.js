import React from 'react';
import styles from '../modules/Home.module.css';
import GitHub from '../assets/GitHub.png';
import Linkedin from '../assets/Linkedin.png';
import Twitter from '../assets/Twitter.png';
import Facebook from '../assets/Facebook.png';
import YouTube from '../assets/YouTube.png';

function Home() {
  return (
    <div className={styles.home}>
      <h2>Welcome to our page!</h2>
      <p className={styles.p}>
        Encarta Math Magicians is an app developed by Anyars Yussif, a Full
        Stack Software Development student at Microverse. Microverse is an
        online school that uses peer-programming and project building to teach.
        <br />
        <br />
        Encarta Maths Magicians is a Calculator app that performs arithmetic calculations.
        The page has been devided into three sections:&nbsp;
        <strong>Home</strong>
        ,&nbsp;
        <strong>Calculator</strong>
        , and&nbsp;
        <strong>Quote</strong>
        .
        <br />
        <br />
        The Home section displays basic information about the author as well as what
        the app does. The Calculator section displays the calculator which you can
        use to perform arithmetic calculations. The Quote sections displays quotes
        fetched from API Ninjas. Every displayed quote refreshes after every 15 seconds
        to display a new quote.
        <br />
        <br />
        Have fun using&nbsp;
        <strong>Encarta Math Magicians!</strong>
        <br />
        <br />
        Follow the Author on:
      </p>
      <br />

      <div className={styles.followContainer}>
        <a className={styles.follow} href="https://github.com/anyars-encarta" target="_blank" rel="noreferrer">
          <img src={GitHub} alt="GitHub logo" />
        </a>
        <br />
        <a className={styles.follow} href="https://www.linkedin.com/in/anyars-yussif-1a179769/" target="_blank" rel="noreferrer">
          <img src={Linkedin} alt="Linkedin logo" />
        </a>
        <br />
        <a className={styles.follow} href="https://twitter.com/anyarsencarta" target="_blank" rel="noreferrer">
          <img src={Twitter} alt="Twitter logo" />
        </a>
        <br />
        <a className={styles.follow} href="https://web.facebook.com/encartadegreat?_rdc=1&_rdr" target="_blank" rel="noreferrer">
          <img src={Facebook} alt="Facebook logo" />
        </a>
        <br />
        <a className={styles.follow} href="https://www.youtube.com/channel/UC8ROvrdEomu6xYI0HrzT61A" target="_blank" rel="noreferrer">
          <img src={YouTube} alt="Youtube logo" />
        </a>
      </div>
    </div>
  );
}

export default Home;
