export const state = () => ({
  counter: 100,
  lists: [
    { text: 'inc state',
      done: true
    },
    { text: 'inc mutation',
      done: false
    },
    { text: 'inc action',
      done: false
    }
  ]
})

export const mutations = {
  // increment(state) {
  //   state.counter++
  // },
  increment(state, payload) {
    state.counter += payload
  },
  toggle(state, todo) {
    todo.done = !todo.done
    // state.list.done = todo.done
    console.log('index mapMutations-toggle')
  },
  remove(state, { todo }) {
    console.log(todo)
    console.log('remove')
    state.lists.splice(state.lists.indexOf(todo), 1)
  },
  add(state, addTodo) {
    console.log(addTodo)
    state.lists.push({
      text: addTodo.text,
      done: false
    })
    console.log('commit-add')
  }
}
