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

__Visural Testing__

To run visual tests locally:

```
npm run test:visual
```

To update image snapshots locally:

```
npm run test:visual-update
```


__Build for production__
```
npm run build
```

## Responsive breakpoints:
```
{
  xs: '0',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px'
}
```

### Examples
```
@include media-breakpoint-up(sm)           { } // Small and up
@include media-breakpoint-down(md)         { } // Medium and down
@include media-breakpoint-between(md, lg)  { } // Between medium and large
```
