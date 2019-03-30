const { createElement } = require('react');
const express = require('express');
const { renderToString } = require('react-dom/server');
const { Ellipsis } = require('react-css-spinner');

const port = 3000;
const app = express();

app.get('*', (req, res) => {
  const html = renderToString(createElement(Ellipsis));

  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
  </head>
  <body>
      ${html}
  </body>
  </html>
  `);
});

app.listen(port, () => console.log(`http:localhost:${port}`));
