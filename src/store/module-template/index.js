import state from "./state.js";
import * as actions from "./actions.js";
import * as getters from "./getters.js";
import * as mutations from "./mutations.js";

const myCustomModule = {
  actions,
  getters,
  mutations,
  namespaced: true,
  state,
};

export default myCustomModule;
