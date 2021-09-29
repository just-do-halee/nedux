export const createStore = (reducer) => {
  const validateAction = (action) => {
    if (!(action instanceof Object)) {
      throw new Error(
        `Actions must be plain objects. Instead, the actual type was: '${typeof action}'. `
      );
    }
    if (!action.type) {
      throw new Error(
        `Actions may not have an undefined "type" property. You may have misspelled an action type string constant.`
      );
    }
  };

  let subscribers = [];
  let data = reducer(undefined, { type: "@@iRedux/INITx.z.c.4.y.e" }); // init

  return {
    dispatch: function (action) {
      validateAction(action);
      data = reducer(data, action);
      for (let subs of subscribers) {
        subs();
      }
    },
    getState: function () {
      return data;
    },
    subscribe: function (callback) {
      subscribers.push(callback);
    },
  };
};
