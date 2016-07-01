# Flickr Gallery

This is a React component that allows users to search for and view images from Flickr. This module is able to be reused multiple times on the same page, and smaller parts of the module are also reusable.

This is actually my first ever project built in React. I chose React for its strengths in dynamic rendering with the virtual DOM, and also for its easy approach to creating a reusable piece of code. This module could easily be developed further by modifying its components and the states in which they render.

## Tech Stack

This app is built with *React* on the front-end for dynamic rendering. Source files are bundled together with *Webpack*. *SASS* has been used for writing CSS. The back-end is built in *Node.js*, using *Hapi.js* as a configuration framework, and *Inert* for serving static files. Tests have been written client and server-side in *Tape*, with *Enzyme* integrated for testing React. The project is deployed to *Heroku*. To communicate with the Flickr API, I used the *Flickr API* Node-wrapper library by @Pomax.

## Features

The gallery component has the following features:

* Photos are returned using the Flickr API for any given keyword
* Flickr results are searchable and paginated
* Results are displayed in both a grid and in a carousel
* A share button is displayed below the carousel on hover

## Components

The gallery has been broken up into the following mini-components and sub-components, which can each be reused multiple times as necessary:

* *Navigation:* where users can input keywords in the search box
* *Carousel:* where one image at a time is displayed full size
    * *Share button:* where users have the option to share the current image displayed in the carousel
* *Grid:* where one page of 15 results at a time is displayed for the current search
    * *Tile:* where a single image from the search reuslts is displayed inside the grid
    * *Pagination:* where the user can navigate up to 6 pages of search results

Any component, including the full gallery module itself, can be replicated simply by rendering the React tag with the appropriate props. For example:

```js
ReactDOM.render(
  <App />,
  document.getElementById("app")
);
```

## Accessibility

Pains have been taken to ensure this module takes into account accessibility. The site has been checked against [AChecker](http://achecker.ca/) and [WAVE](http://wave.webaim.org/) standards. Accessibility features include:

* Document language is defined for screen readers in the `index.html` head
* A `<nav>` tag and `<h1>` tag are present to guide the structure of the page
* Alt text has been added to all images on the site, including icons
* The input box has a corresponding label for screen readers

## Performance

This project has been checked against [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/). Measures taken to improve performance include:

* JavaScript is minified with the Webpack build
* Script tags are placed at end of the HTML
* Images fetched from the Flickr API use a suffix to ensure the file is not too large, and this is dynamic for the grid and carousel components

In the future, I'd be interested to explore server-side rendering as a way of optimising the application's performance.

## Progressive Enhancement

Styling is optimised across all devices, with a functional view at every screen width. Media queries adjust styling at 750px. Mobile views have been tested in Chrome dev tools.

## Running this Project

You can check out a live version of this project hosted on Heroku [here](http://flickr-search.herokuapp.com). Or if you'd like to run the project locally, follow these steps:

###### 1. Clone this repository

Clone this repository to your local machine using the following command:

```
$ git clone https://github.com/msmichellegar/flickr.git
```

###### 2. Install dependencies

Install dependencies listed in the `package.json` by running the following command:

```
$ npm install
```

###### 3. Obtain and set environment variables

You will need Flickr API keys to run this project. Obtain them [here](https://www.flickr.com/services/api/). Once you have a public and secret key for the Flickr API, set them in the terminal using the following commands:

```
$ export FLICKR_KEY=[your public key]
$ export FLICKR_SECRET=[your secret key]
```

###### 4. Run the tests

To ensure the project is functioning correctly, run the tests with the following command:

```
$ npm run test
```

###### 5. Start the server

To start the server in development mode, run this command, and navigate to http://localhost:9000/

```
$ npm run dev
```

###### Optional: Run build scripts

If you are making edits to the React source files, you will want to run the webpack build command in another terminal window:

```
$ npm run build
```

And if you are making edits to the SASS files, you will also want to run the following command in another terminal window:

```
$ npm run sass
```
