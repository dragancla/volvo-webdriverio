const { TimelineService } = require("wdio-timeline-reporter/timeline-service");

exports.config = {
  specs: ["./test/**/*.e2e.js"],
  exclude: [],
  maxInstances: 10,
  capabilities: [
    {
      maxInstances: 1,
      browserName: "chrome",
      acceptInsecureCerts: true,
      "goog:chromeOptions": {
        args: [
          "--no-sandbox",
          "--disable-infobars",
          "--headless",
          "--disable-gpu",
          "--window-size=1440,735",
        ],
      },
    },
  ],
  logLevel: "error",
  protocol: "http",
  hostname: "127.0.0.1",
  path: "/wd/hub",
  port: 4444,
  bail: 0,
  baseUrl: process.env.BASE_URL
    ? process.env.BASE_URL
    : "https://www.volvocars.com/intl/v/car-safety/a-million-more",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: "mocha",
  services: [[TimelineService]],
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
