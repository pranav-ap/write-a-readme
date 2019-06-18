import { action, createStore } from 'easy-peasy'

const profile = {
  username: '',
  repo: '',

  set_profile: action((state, { name, repo }) => {
    state.username = name
    state.repo = repo
  }),
}

const ui = {
  active_slide: 0,
  next_slide: action(state => {
    state.active_slide += 1
  }),
}

const store = createStore({
  profile,
  ui,
})

export default store
