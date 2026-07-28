const { test: base } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const test = base.extend({
  sharedContext: async ({}, use) => {
    await use({});
  },
});

const { expect } = test;

module.exports = { test, expect, fs, path };