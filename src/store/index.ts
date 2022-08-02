import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { count } from "./modules/count";
import { RootState } from "./types";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  modules: {
    count: count
  }
}

export default new Vuex.Store(store);
