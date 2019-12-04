require('colors');
const express = require('express');
const bodyParser = require('body-parser');
const ora = require('ora');
const boxen = require('boxen');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

module.exports = (port, type) => {
  const spinner = ora('Starting server...').start();
  app.use('*', async (req, res) => {
    const { url, body } = req;
    console.log(
      boxen(
        `New ${req.method} request\n` +
          `URL: ${url.bgMagenta.white}\nTIme: ${new Date().toTimeString()}`
      )
    );
    console.log('Body:');
    console.log(JSON.stringify(body, null, 2).green);
  });
  app.listen(port, () => {
    spinner.succeed('Server started on port ' + port);
  });
};
