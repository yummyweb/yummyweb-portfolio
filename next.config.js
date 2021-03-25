const path = require('path')
const withMDX = require('@next/mdx')()

module.exports = withMDX({
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
})