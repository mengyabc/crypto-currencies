# Crypto Currencies

## Environment requirements:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com)
- [Webpack](https://webpack.github.io/)

Quick Start
-----------

__Run locally as development with HMR enabled__
```
npm install
npm start
```

__Run as production__
```
npm run start:prod
```

Note that this includes building, which takes a while

__Testing__
```
npm test
```

__Build for production__
```
npm run build
```

Overview
--------

__Front end__

The front end implementation is based on React and Redux, with webpack as build tool.

The app is hosted on AWS S3 without SSR.


__Back end__

The back end implementation is based on AWS lambda, AWS API gateway, and MongoDB Atlas.

Data is stored and retrieved from MongoDB, which is integrated with AWS lambda.


Responsive breakpoints
----------------------
```
{
  xs: '0',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px'
}
```

__Examples__
```
@include media-breakpoint-up(sm)           { } // Small and up
@include media-breakpoint-down(md)         { } // Medium and down
@include media-breakpoint-between(md, lg)  { } // Between medium and large
```
