import assert from 'assert'
import { expect } from 'chai'
import sinon from 'sinon'
import * as someComponent from '../src/some-component'
// import rewire from 'rewire'
import get from '../src/index'
// import get, {__ResetDependency__, __Rewire__} from '../src/index'
// import get, { __Rewire__ as get__Rewire, __RewireAPI__ as get__RewireAPI } from '../src/index'
//
// const get = rewire('../src/index')

// import * as get from '../src/index'

// console.log(get__Rewire)

describe('Get', function() {
  // beforeEach(() => sinon.createSandbox())
  // afterEach(() => sinon.restore())

  it('blah', function() {

  // console.log('?', get__RewireAPI.__get__('imports'))

  // get__Rewire('imports', {multiply: function() { return 8 }})

  let myStub = sinon.stub(someComponent, 'multiply')
  myStub.callsFake(() => 8)

  // pooh('multiply', () => 8)
  // pooh('imports', Object.assign({},,c{multiply: () => 8})
  // __Rewire__('multiply', () => 8)
  // get.__Rewire__('multiply', () => 8)

  // console.log(get.imports)
  // get.__Rewire__('imports', {multiply: () => 8})

  // console.log(get.__get__imports)

  // get.default__set__("imports", {multiply: () => 8})

    // const fakeFunc = (myArg) => {
    //   console.log('Hi')
    //   console.log('myArg:', myArg)
    // }

    // console.log('~>', get.default)
    // const myStub = sinon.stub(get.default.prototype, 'imports').value('bloop')
    expect(get('multiply')(3,3)).to.equal(8)
    // return {}
  })
})
