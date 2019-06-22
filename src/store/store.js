import { action, createStore } from 'easy-peasy'

const profile = {
  username: '',
  repo: '',

  set_profile: action((state, { name, repo }) => {
    state.username = name
    state.repo = repo
  }),
}

const built_with = {
  tools: ['React', 'NodeJS', 'GraphQL', 'MongoDB', 'Python', 'Pandas'],

  add_tool: action((state, tool) => {
    state.tools.push(tool)
  }),
  remove_tool: action((state, tool) => {
    state.tools = state.tools.filter(t => t !== tool)
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
  built_with,
  ui,
})

export default store
