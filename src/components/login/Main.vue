<template>
  <div class="full-width">
    <h1 class="center-content">Login Yeha!</h1>
    <div>

      <el-button type="primary" icon="el-icon-edit"  @click="handleClick()">Login</el-button>
    </div>
  </div>
</template>

<script>
import { AuthService } from '@/services';

export default {
    methods: {
        async handleClick() {
            try {
                const result = await AuthService.requestLogin();
            } catch (ex) {
                console.error(ex)
            }
        }
    }
}
</script>

<style scoped lang="scss">
</style>