import { action, createStore } from 'easy-peasy'

let state = {
  username: '',
  repo: '',
  license: '',
  shields: [],
  project_description: '',
  built_with: [],
}

const actions = {
  set_name: action((state, name) => state.username = name),
  set_repo: action((state, repo) => state.repo = repo),
  set_license: action((state, license) => state.license = license),
}

const store = createStore({
  ...state,
  ...actions,
})

export default store
