import { RootState } from "@/store/types";
import { Module } from "vuex";
import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";

const state = {
    counter: 0,
}

export type CountState = typeof state

export const count: Module<CountState, RootState> = {
    state,
    actions,
    mutations,
    getters
}