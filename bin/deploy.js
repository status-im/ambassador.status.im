const { promisify } = require('util')
const { publish } = require('gh-pages')
const ghpublish = promisify(publish)

/* fix for "Unhandled promise rejections" */
process.on('unhandledRejection', err => { throw err })

const branch = 'gh-pages'
/* use SSH auth by default */
let url = 'git@github.com:status-im/ambassador.status.im.git'

/* alternative is to use github used and API token */
if (process.env.GH_USER != undefined) {
  url = ( 
    'https://' + process.env.GH_USER + ':' + process.env.GH_TOKEN
    + '@github.com/status-im/ambassador.status.im.git'
  )
}

const main = async (url, branch)=> {
  console.log(`Pushing to: ${url}`)
  console.log(`On branch: ${branch}`)
  await ghpublish('build', {
    repo: url,
    branch: branch,
    dotfiles: true,
    silent: false
  })
}

main(url, branch)
