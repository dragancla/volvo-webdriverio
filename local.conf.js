const { TimelineService } = require("wdio-timeline-reporter/timeline-service");

exports.config = {
  specs: ["./test/**/*.e2e.js"],
  exclude: [],
  maxInstances: 10,
  capabilities: [
    {
      maxInstances: 5,
      browserName: "chrome",
      acceptInsecureCerts: true,
    },
  ],
  logLevel: "error",
  bail: 0,
  baseUrl: process.env.BASE_URL
    ? process.env.BASE_URL
    : "https://www.volvocars.com/intl/v/car-safety/a-million-more",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: "mocha",
  services: ["chromedriver", [TimelineService]],
  reporters: [
    "spec",
    [
      "timeline",
      {
        outputDir: "./results",
      },
    ],
  ],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
