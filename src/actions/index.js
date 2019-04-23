const itemsLoaded = newData => {
  return {
    type: "DATA_LOADED",
    payload: newData
  };
};

const itemsError = error => {
  return {
    type: "DATA_ERROR",
    payload: error
  };
};

export { itemsLoaded, itemsError };
