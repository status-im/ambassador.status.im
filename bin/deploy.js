const { promisify } = require('util')
const { publish } = require('gh-pages')
const ghpublish = promisify(publish)
const env = process.env

/* fix for "Unhandled promise rejections" */
process.on('unhandledRejection', err => { throw err })

const branch = 'gh-pages'
/* use SSH auth by default */
let url = 'git@github.com:status-im/ambassador.status.im.git'

/* alternative is to use github used and API token */
if (env.GH_USER != undefined) {
  url = url.replace('git@', `https://${env.GH_USER}:${env.GH_TOKEN}@`)
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
