const common = `--require cucumber-support.js --format progress --retry 1`;

module.exports = {
  default: common + ' features/**/*.feature',
};
