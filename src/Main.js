import React from "react";
import "./Main.css";
import logo from "./images/profile.jpeg";
import react1 from "./images/react1.jpeg";
import angular from "./images/angular.jpeg";

function Main() {
  return (
    <div className="main">
      <h1>Web Frontend task: 1</h1>
      <div className="account-widget">
        <div className="detail">
          <img className="logo" src={logo} alt="Profile" />
          <div className="details">
            <span className="title">
              Across the Globe<span className="article"> @ATG 20 May 2021</span>
              <span className="tag">
                <br /> edited: 21 Jun 2021
              </span>
            </span>
          </div>
        </div>
        <div className="left-deatils">
          <button className="add">0</button>
          <button className="subs">0</button>
          <button className="star">0</button>
          <button className="link"></button>
        </div>
      </div>
      <div className="task">
        <h2>Basic responsivness task</h2>
      </div>
      <div className="main-two">
        <p>
          Please watch these tutorials. These will help you finish the task
          quickly
          <br />
          <span className="titl">ReactJS</span>
        </p>
      </div>
      <a href="https://www.youtube.com/watch?v=w7ejDZ8SWv8">
        <img className="react" src={react1} />
      </a>
      <a
        className="link"
        href="https://reactjs.org/docs/components-and-props.html"
      >
        https://reactjs.org/docs/components-and-props.html
      </a>
      <p className="angula">Angular</p>
      <a href="https://www.youtube.com/watch?v=3dHNOWTI7H8">
        <img className="angular" src={angular} />
      </a>
      <a
        className="link"
        href="https://justpaste.it/redirect/790h5/https://angular.io/docs"
      >
        https://angular.io/docs
      </a>
      <p className="angula">Mobile responsivness</p>
      <a
        className="lin"
        href="https://justpaste.it/redirect/790h5/https://www.youtube.com/results%3Fsearch_query=make+mobile+responsive+layout+bootstrap"
      >
        <li>
          https://www.youtube.com/results?search_query=make+mobile+responsive+layout+bootstrap
        </li>
      </a>
      <p className="angula">Figma and designer > developer handoff</p>
      <a
        className="lin"
        href="https://justpaste.it/redirect/790h5/https://drive.google.com/open%3Fid=1TbOU5LZk1CwfGy4uY7eh-rxD-Jv10e1i"
      >
        <li className="diff">
          https://drive.google.com/open?id=1TbOU5LZk1CwfGy4uY7eh-rxD-Jv10e1i
        </li>
      </a>
      <a
        className="lin"
        href="https://justpaste.it/redirect/790h5/https://www.youtube.com/watch%3Fv=B242nuM3y2s"
      >
        <li className="dif">https://www.youtube.com/watch?v=B242nuM3y2s</li>
      </a>
      <div className="tasks">
        <p className="angularjs">Task:</p>
        <li className="angular-content">
          1. Make the layout of the page exactly similar to this page using
          either REACTJS or ANGULARJS. Use components and containers.
        </li>
      </div>
      <div className="content-three">
        <a href="https://justpaste.it/redirect/790h5/https://www.figma.com/file/T5XVMuJ7nuo5SxbClAo3UYiP/Groups%3Fnode-id=0%253A1">
          https://www.figma.com/file/T5XVMuJ7nuo5SxbClAo3UYiP/Groups?node-id=0%3A1
        </a>
        <p>
          In the above design, a group page is designed for both mobile and
          desktop. The objective of this task is to get the positioning of the
          elements right according to the device used. Page should be
          responsive.
        </p>
        <p>
          2. The objective of this exercise is to develop a responsive page.
        </p>
      </div>
      <div className="content-four">
        <p>Task submission Guidelines:</p>
        <div className="wtd">
          <ol>
            <li>
              Submit a video of window resize from desktop view to mobile view
              (not using javascript console, but actual drag and resize) the
              view should not get distorted at any point of time during this
              window resize.
            </li>
            <li>
              You need to host this task on a free web hosting server and
              provide the link of the server and submit the link in the task
              submission form that will be provided.
            </li>
            <li>
              Though the task deadline is 5 days for people who don't know
              reactjs or angularjs beforehand, however, preference will be given
              to those candidates who finish the task at the earliest.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Main;
