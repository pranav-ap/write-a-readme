import { action, createStore } from 'easy-peasy'

const profile = {
  repo: '',

  set_profile: action((state, repo) => {
    state.repo = repo
  }),
}

const license = {
  type: '',
  set_license: action((state, type) => {
    state.type = type
  }),
}

const dev_setup = {
  content: '',
  set_content: action((state, content) => {
    state.content = content
  }),
}

const description = {
  content: '',
  set_content: action((state, content) => {
    state.content = content
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
  license,
  description,
  dev_setup,
  built_with,
  ui,
})

export default store
