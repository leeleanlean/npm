const content = require('./content')
const fs = require('fs')
const path = require('path')

module.exports = {
  views: './views',
  router: '../../router',
  /**
   * hasFolder
   * @param name
   */
  hasFolder (name) {
    if (!name) {
      console.log(`Error: Folder name cannot be empty`)
      return false
    }

    // true
    if (fs.existsSync(path.join(name))) {
      return true
    }

    // false
    console.log('Error: Path does not exist')
    return false
  },

  /**
   * createFolder
   * @param filepath
   */
  createFolder (filepath) {
    const cache = {}
    const arr = filepath.split('/')
    let dir = arr[0]
    for(let i = 1; i < arr.length; i++){
      if(!cache[dir] && !fs.existsSync(dir)){
        cache[dir] = true
        fs.mkdirSync(dir)
      }
      dir = dir + '/' + arr[i]
    }
  },

  /**
   * readFile
   * @param name
   */
  readFile (name) {
    if (!name) {
      console.log(`Error: File name cannot be empty`)
      return false
    }

    if (this.hasFolder(name)) {
      return fs.readFileSync(path.join(name), 'utf-8')
    }
  },

  /**
   * writeFile
   * @param name
   * @param content
   */
  writeFile (first = '', second = '', three = '') {

    // Set name
    let name = ''
    if (!first) {
      console.log(`Error: Route name cannot be empty`)
      return false
    } else {
      first = this.toUpperCase(first)
      second && (second = this.toUpperCase(second))
      three && (three = this.toUpperCase(three))

      if (!second && !three) {
        name = `${first}`
      } else if (second && !three) {
        name = `${first}/${second}`
      } else if (second && three) {
        name = `${first}/${second}/${three}`
      }
    }

    // Does the route exist
    if (fs.existsSync(path.join(`${this.views}/${name}`))) {
      console.log(`Error: Route name already exists`)
    } else {
      // 1. Create folder
      this.createFolder(`${this.views}/${name}/components/`)

      // 2. Generate index.vue
      fs.writeFileSync(path.join(`${this.views}/${name}/index.vue`), content.vue(name))

      // 3. Set router
      // const routes = require(`${this.router}/routes`)
      // console.log(`${this.views}/${name}`)
      // const route = {
      //   path: `/${name}`,
      //   name,
      //   component: () => import(`@/views/${name}`)
      // }
      // routes.push(route)
      // console.log(routes)
    }
  },

  /**
   * deleteFolder
   * @param name
   */
  deleteFolder (name) {
    if (this.hasFolder(name)) {
      fs.readdirSync(name).forEach(file => {
        const currentPath = name + '/' + file
        if(fs.statSync(currentPath).isDirectory()) {
          this.deleteFolder(currentPath)
        } else {
          fs.unlinkSync(currentPath)
        }
      })
      fs.rmdirSync(name)
    }
  },

  /**
   * 
   * @param route
   */
  toUpperCase (name) {
    return name.replace(name[0], name[0].toUpperCase())
  }
}
