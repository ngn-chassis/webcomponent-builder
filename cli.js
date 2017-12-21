#!/usr/bin/env node

const Builder = require('./index')

let args = process.argv.splice(2)

let cfg = {
  src: args[0],
  transpile: args.includes('--es5')
}

if (args.length > 1) {
  cfg.dest = args[1]
}

const bwc = new Builder(cfg)

bwc.build()
