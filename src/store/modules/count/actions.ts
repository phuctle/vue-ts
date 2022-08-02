import { RootState } from "@/store/types";
import { ActionTree } from "vuex";
import { CountState } from ".";
import { ActionTypes } from "./action-types";
import { MutationTypes } from "./mutations-type";

export const actions: ActionTree<CountState, RootState> = {
    [ActionTypes.GET_COUNTER]({ commit }) {
        return new Promise((resolve) => {
            const data = 100;
            setTimeout(() => {
                commit(MutationTypes.SET_COUNTER, data)
                resolve(data)
            }, 500)
        })
    }
}