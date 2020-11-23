#!/usr/bin/env node
const file = require('./utils/file')

class Command {
  constructor() {
    this.version = '1.0.0'
    this.help = `
      -h:        help
      --help:    help
      -v:        version
      --version: version
    `
  }

  /**
   * Run
   * @param argv 
   */
  run (argv) {
    const [ action, first, second, three ] = argv
    switch (action) {
      /**
       * Help
       */
      case '-h':
      case '--help':
        console.log(this.help)
        break

      /**
       * Version
       */
      case '-v':
      case '--version':
        console.log(this.version)
        break

      /**
       * Generate route
       */
      case 'route':
        this.generateRoute(first, second, three)
        break

      /**
       * Default
       */
      default:
        console.log(this.help)
        break
    }
  }

  // generateRoute
  generateRoute (first, second, three) {
    // console.log(file.readFile('./views/aaaa.txt'))
    // file.readFile('./views/bbb/bbb.txt')
    file.writeFile(first, second, three)
    // file.deleteFolder('./views')
  }
}

new Command().run(process.argv.slice(2))
