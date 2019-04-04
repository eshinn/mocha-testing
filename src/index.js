// import { multiply } from './some-component'
import * as imports from './some-component'

console.log(imports)

// const imports = {
//   multiply,
// }

const get = (func) => (...xargs) => {
  // console.log('I say...', multiply)
  return imports[func](...xargs)
}

// console.log(get('multiply')(2,10))
// get('multiply')

// module.exports = get
export default get
