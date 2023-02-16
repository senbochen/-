
import { initGlobalState } from 'qiankun'

const initState = {
  name: '陈松柏',
  age: '12岁'
}

const actions = initGlobalState(initState)
actions.onGlobalStateChange((state, prev) => {
  console.log('主应用数据变更前，', prev)
  console.log('主应用数据变更后', state)
  localStorage.setItem('newState', state)
})


export default actions


