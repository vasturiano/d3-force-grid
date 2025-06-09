d3.forceGrid
==================

[![NPM package][npm-img]][npm-url]
[![Build Size][build-size-img]][build-size-url]
[![NPM Downloads][npm-downloads-img]][npm-downloads-url]

A force that pulls nodes to a grid system with customizable steps. Each of the node's dimensions is pulled towards the closest grid line with a spring-like force whose intensity increases linearly with distance.

This force plugin is designed to be used with the [d3-force](https://github.com/d3/d3-force) simulation engine. It is also compatible with [d3-force-3d](https://github.com/vasturiano/d3-force-3d) and can function in a one, two (default) or three-dimensional space.

## Quick start

```js
import d3ForceGrid from 'd3-force-grid';
```
or using a *script* tag
```html
<script src="//cdn.jsdelivr.net/npm/d3-force-grid"></script>
```
then
```js
d3.forceSimulation()
  .nodes(<myNodes>)
  .force('grid', d3.forceGrid()
    .step(15)
  );
```

## API reference

| Method                                 | Description                                                                                                                                                                                                                                                      |        Default         |
|----------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------:|
| <b>step</b>([<i>num</i>]) | Sets or gets the grid step, symmetrically across all dimensions.                                                                                                                                | 10 |
| <b>stepX</b>([<i>num</i>]) | Sets or gets the grid step just along the X dimension.                                                                                                                                | 10 |
| <b>stepY</b>([<i>num</i>]) | Sets or gets the grid step just along the Y dimension.                                                                                                                                | 10 |
| <b>stepZ</b>([<i>num</i>]) | Sets or gets the grid step just along the Z dimension (for 3D graphs).                                                                                                                                | 10 |
| <b>strength</b>([<i>num</i>]) | Sets or gets the force strength. This defines how strong is the snapping attraction to the grid. A strength of `1` applies full force; `0` disables it. | 0.3 |
| <b>considerAlpha</b>([<i>num</i>]) | Sets or gets whether the force intensity should decrease or not as alpha decays and the simulation cools down.                                                                                                              | `false` |

## ❤️ Support This Project

If you find this module useful and would like to support its development, you can [buy me a ☕](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=L398E7PKP47E8&currency_code=USD&source=url). Your contributions help keep open-source sustainable!
[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=L398E7PKP47E8&currency_code=USD&source=url)

[npm-img]: https://img.shields.io/npm/v/d3-force-grid
[npm-url]: https://npmjs.org/package/d3-force-grid
[build-size-img]: https://img.shields.io/bundlephobia/minzip/d3-force-grid
[build-size-url]: https://bundlephobia.com/result?p=d3-force-grid
[npm-downloads-img]: https://img.shields.io/npm/dt/d3-force-grid
[npm-downloads-url]: https://www.npmtrends.com/d3-force-grid
