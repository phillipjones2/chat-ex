
import { autorun, observable } from 'mobx'

class MainStore {
  @observable val = 5
}

const store = window.store = new MainStore

export default store

autorun(() => {
  console.log(store.val);
})
