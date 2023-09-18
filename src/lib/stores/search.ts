import { writable } from "svelte/store"

export interface SearchStoreModel<T extends Record<PropertyKey>> {
  data:T[]
  filtered:[]
  search: string
}

export const createSearchStore = <T extends Record<PropertyKey>>(data) => {
  const { subscribe, set, update } = writable<SearchStoreModel<T>>({
    data: data,
    filtered: data,
    search: "",
  })

  return {
    subscribe,
    set,
    update,
  }
}

export const searchHandler = <T extends Record<PropertyKey>>(store: SearchStoreModel<T>) => {
  const searchTerm = store.search.toLowerCase() || ""
  store.filtered = store.data.filter((item) => {
    return item.searchTerms.toLowerCase().includes(searchTerm)
  })
}
