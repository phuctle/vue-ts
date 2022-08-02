import { MutationTree } from "vuex";
import { CountState } from ".";
import { MutationTypes } from "./mutations-type";

export const mutations: MutationTree<CountState> = {
    [MutationTypes.SET_COUNTER](state: CountState, payload: number): void {
        state.counter = payload
    }
}