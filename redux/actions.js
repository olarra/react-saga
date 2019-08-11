import types from "./types";

export const textChanged = text => {
  return {
    type: types.TEXT_CHANGED,
    payload: text
  };
};
