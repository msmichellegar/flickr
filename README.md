# Flickr Project

This is a reusable module that allows users to search for images from Flickr, able to be further developed by an offshore team.

### Features

* Photos are returned using the Flickr API for any given keyword
* Flickr results are searchable and paginated
* The module is able to be reused multiple times on the same page
* Smaller parts of this module are also able to be reused on the same page

### Tech Stack

This app is built with *React* on the front-end for dynamic rendering. SASS has also been used on the front-end. The back-end is built in *Node.js*, using *Hapi.js* as a configuration framework, and *Inert* for serving static files. Tests have been written client and server-side in *Tape*, with *Enzyme* used specifically for testing React.

### Requirements

* The module must be able to be used in multiple locations on the same page.
* The results should be searchable and pageable.
* A README.md file that gives a brief overview of your solution and highlights any part you wish to draw attention to.

### Notes

* Consideration for best practice - accessibility, performance, progressive enhancement, etc. - is expected.
* If you must use a plugin or library please include a clear description of why it is needed.
* Please only create the social tooltip as a placeholder, you do not need to integrate the social behaviour.
* Please include a brief description of your solution and what decisions you made in its creation.
* Please package (rar) your solution and ensure your name forms part of the package file name.
