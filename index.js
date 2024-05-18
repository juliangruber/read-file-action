'use strict';

const core = require('@actions/core');
const { readFile } = require('fs/promises');

const main = async () => {
  try {
    const path = core.getInput('path');
    const trim = core.getBooleanInput('trim');
    const content = await readFile(path, 'utf8');
    core.setOutput('content', trim ? content.trim() : content);
  } catch (err) {
    core.setFailed(err.message);
  }
};

main();
