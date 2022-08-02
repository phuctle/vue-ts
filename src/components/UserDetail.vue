<template>
  <p>{{ user.name }} - {{ user.age }}</p>
</template>

<script lang='ts'>
import { User } from "@/type";
import Vue from "vue";
import { PropType } from "vue/types/v3-component-props";

export default Vue.extend({
  name: "UserDetail",
  props: {
    user: {
      type: Object as PropType<User>,
    },
  },
});
</script>

<style>
</style>

