const { TimelineService } = require("wdio-timeline-reporter/timeline-service");
const { join } = require("path");

exports.config = {
  specs: ["./test/**/*.visual.js"],
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
  services: [
    "chromedriver",
    [TimelineService],
    [
      "image-comparison",
      {
        baselineFolder: join(process.cwd(), "./screenshots/baseline/"),
        formatImageName: "{tag}-{logName}-{width}x{height}",
        screenshotPath: join(process.cwd(), "./results"),
        savePerInstance: true,
        blockOutStatusBar: true,
        blockOutToolBar: true,
      },
    ],
  ],
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
