let Store: any = null;
export function saveStore(createdStore: any) {
  Store = createdStore;
}

export function getStore() {
  return Store;
}

export function clearStore() {
  Store = null;
  return Store;
}
