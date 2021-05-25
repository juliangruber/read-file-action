'use strict'

const core = require('@actions/core')
const { promises: fs } = require('fs')

const main = async () => {
  const path = core.getInput('path')
  const trim = core.getBooleanInput('trim')
  let content = await fs.readFile(path, 'utf8')
  if (trim) {
    content = content.trim()
  }

  core.setOutput('content', content)
}

main().catch(err => core.setFailed(err.message))
