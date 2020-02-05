# liquidjs-barcode

Plugin developed to generate barcode using liquify

Below the scenes, the plugin uses the [bwip-js](https://github.com/metafloor/bwip-js#working-with-bwip-js-methods) package, it is possible to use all configuration parameters.

# Usage

```shel
npm i liquidjs-barcode
```

```javascript
const { Liquid } = require("liquidjs");
const liquidjsBarcode = require("liquidjs-barcode");

const liquid = new Liquid();

liquid.plugin(liquidjsBarcode());

const template = `{{ barCode | barcode: "bcid: 'code128', scale: 3, height: 10, includetext: true, textxalign: 'center'" }}`;

const data = {
  barCode: "1234-foo"
};

const html = await liquid.parseAndRender(template, data);
```
