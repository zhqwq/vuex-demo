import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
  state() {
    // 数据层
    return {
      count: 0
    }
  },
  // 动作层：响应组件实例中的$store.dispatch，在这里实现业务逻辑、调用后端API并执行 commit 方法推进数据流
  actions: {
    increment(context, value) {
      setTimeout(() => context.commit('increment', value), 500)
    }
  },
  // 修改层：通过 actions 传递的 value，直接修改数据 state
  mutations: {
    increment(state, value) {
      state.count += value
    }
  }
})

export default store
