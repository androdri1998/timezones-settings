const Africa = require('./timezones/Africa');

const timezones = {
  "UTC": {
    timezone_name: "UTC",
    gmt: 0,
    gmt_dst: 0
  },
  "Africa": {
    ...Africa
  }
}

module.exports = timezones