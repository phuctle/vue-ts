<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ user.name }}</h1>
    <user-detail :user="user" />
    <p>{{ counter }}</p>
    <button @click="changeName('Typescript')">Change name</button>
    <button @click="changeAge(20)">Change age</button>
    <button @click="setCounter">set counter</button>
    <button @click="getCounter">get counter</button>
  </div>
</template>

<script lang="ts">
// import { CountState } from "@/store/modules/count";
import { ActionTypes } from "@/store/modules/count/action-types";
import { MutationTypes } from "@/store/modules/count/mutations-type";
import { RootState } from "@/store/types";
import Vue from "vue";
import { mapState } from "vuex";
import { User } from "../type";
import UserDetail from "./UserDetail.vue";

export interface Data {
  user: User;
  text: string;
}

export interface MapState {
  counter: (state: RootState) => number;
}

export default Vue.extend({
  components: { UserDetail },
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data(): Data {
    return {
      user: {
        name: "s",
        age: 1,
      },
      text: "test",
    };
  },
  computed: {
    ...mapState<RootState, MapState>({
      counter: (state: RootState): number => state.count.counter,
    }),
  },
  methods: {
    changeName(name: string): void {
      this.user.name = name;
    },
    changeAge(age: number) {
      this.user.age = age;
    },
    setCounter() {
      this.$store.commit(MutationTypes.SET_COUNTER, 10);
    },
    async getCounter() {
      const result = await this.$store.dispatch(ActionTypes.GET_COUNTER);
      console.log("result :>> ", result);
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
