// index.js
import React from "react";
import ReactDOM from "react-dom";
import pepeHands from "./images/pepehands.jpg";
import image from './images/frontend_technologies.png'
// To get the root element from the HTML document
// JSX element, header
const welcome = "Welcome to 30 Days Of React";
const title = "Getting Started React";
const subtitle = "JavaScript Library";
const author = {
  firstName: "Edmund",
  lastName: "Yu",
};
const date = "Oct 2, 2020";

const headerStyles = {
  backgroundColor: '#61DBFB',
  fontFamily: 'Helvetica Neue',
  padding: 25,
  lineHeight: 1.5,
}

// JSX element, header
const header = (
  <header>
    <div className="header-wrapper">
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
);

const numOne = 3;
const numTwo = 2;

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
);

const yearBorn = 1820;
const currentYear = new Date().getFullYear();
const age = currentYear - yearBorn;
const personAge = (
  <p>
    {" "}
    {author.firstName} {author.lastName} is {age} years old
  </p>
);

// JSX element, main
const techs = ["HTML", "CSS", "JavaScript"];
const techsFormatted = techs.map((tech) => <li>{tech}</li>);

// JSX element, main
const main = (
  <main>
    <div className="main-wrapper">
      <p>
        Prerequisite to get started{" "}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>
      {result}
      {personAge}
    </div>

    <div className="form-wrapper">
    <h1>Subscribe</h1>
    <p>Sign up with your email address to receive news and updates</p>
    <form action=''>
     <label for="fname">First name:</label>
     <input type="text" id="fname" name="fname"><br>
     <label for="lname">Last name:</label>
     <input type="text" id="lname" name="lname"><br>
      <input type="submit" value="Submit">
        <button type="button">Click Me!</button>
      </form>
    </div>
   

  </main>
);

const copyRight = "Copyright 2020";

// JSX element, footer
const footer = (
  <footer>
      <div>
    <img src={pepeHands} alt="pepehands" />
    <img src={image} alt="image" />
    </div>
    <div className="footer-wrapper">
      <p>{copyRight}</p>
    </div>
   
  </footer>
);

const tech = (
  <div>
    <img src={image} alt="images" />
  </div>
);

// JSX element, app
const app = (
  <div className="app">
    {header}
    {main}
    {footer}
  </div>
);

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement);
