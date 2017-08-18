// Ours
const {BASIC_STORY} = require('../../projects/constants');
const {cmd, ok, opt, sec} = require('../../utils/color');
const {bulleted, indented, listPairs, styleLastSegment} = require('../../utils/strings');

const DEFAULTS = module.exports.DEFAULTS = {
  [BASIC_STORY]: ['build']
};

module.exports.MESSAGES = {
  deletion: paths =>
    paths.length < 1 ? `Nothing to delete` : `Deleted:
${bulleted(paths.map(path => styleLastSegment(path, ok)))}`,
  usage: name => `
Usage: ${cmd(`aunty ${name}`)} ${opt('[glob(s)]')} ${opt('[options]')}

${sec('Arguments')}

  ${opt('glob(s)')} File globs to delete ${opt(`[default: config \`clean\` property | project type defaults* | ""]`)}

  Project type defaults:
    ${indented(listPairs(DEFAULTS, opt), 4)}
`
};