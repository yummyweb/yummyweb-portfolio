import glob from 'glob'

const globs = {
  camelCaseFile: '[A-Z]*.{js,ts}',
  camelCaseDir: '[A-Z]*/{index,[A-Z]*}.{js,ts}',
  jsxFile: '*.{jsx,tsx,mdx}',
}

/**
 * List react component files inside a directory
 */
const listFS = (cwd: string): Promise<string[]> => {
  const patterns = Object.keys(globs).map(key => globs[key])
  const pattern = `**/{${patterns.join(',')}}`
  const ignore = [
    '**/node_modules/**',
    '**/{__tests__,test,tests}/**',
    '**/*.{test,spec}.*',
  ]

  return new Promise((resolve, reject) => {
    glob(pattern, { cwd, ignore }, (err, files) => {
      if (err) {
        reject(err)
      }
      resolve(files)
    })
  })
}

export default listFS