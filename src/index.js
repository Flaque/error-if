const invariant = require("invariant");

const HELP_MESSAGE = `Also, if you're getting stuck by this error, 
feel free to reach out to the project's maintainers/community on Github. 
Thanks so much for using our repo! ❤️ `;

function errorIf(condition, message) {
  invariant(!condition, message + "\n" + HELP_MESSAGE);
}

module.exports = errorIf;
