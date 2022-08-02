import { RootState } from '@/store/types'
import { GetterTree } from 'vuex'
import { CountState } from '.'

export const getters: GetterTree<CountState, RootState> = {
    doubledCounter: (state: CountState): number => {
        return state.counter * 2
    },
}