const yargs = require("yargs");
const geoip = require("geoip-lite");
const localip = require("local-ip")(interface);
const weather = require("./my_modules/weather");

const ip = localip;
const geo = geoip.lookup(ip);
const ipCity = geo.city;

const city = {
  describe: "Name of City",
  demand: true,
  alias: "c"
};

const argv = yargs.command("t", "temperature", {
  city
}).argv;

weather(() => argv.c || argv.city || ipCity);
