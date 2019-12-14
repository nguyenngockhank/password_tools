<template>
  <div class="full-width">
    <h1 class=" center-content">Hello World!</h1>
    <div>
       <button @click="handleClick()">Increase</button> {{count}}

       <button @click="handleLogout()">Log out</button>
    </div>
    <a href="#/secondworld">Second World</a>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { INCREASE_COUNT } from '../store/constants'
import { AuthService } from '@/services'

export default {
  computed: {
    count () {
      return this.$store.state.testCount
    }
  },
  methods: {
    ...mapActions([ INCREASE_COUNT ]),
    handleClick() {
      this[INCREASE_COUNT](2);
    },
    handleLogout(){
      AuthService.requestLogout();
    }
  }
}
</script>

<style scoped lang="scss">
$width: 80%;
.full-width {
  &{
    width: $width;
    margin: auto;
    background-color: #bbbbbb;
    padding: 10px;
  }
  .center-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>