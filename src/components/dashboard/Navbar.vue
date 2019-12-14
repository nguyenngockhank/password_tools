<template>
<el-menu :default-active="activeIndex" class="menu-top" mode="horizontal" >
    <el-menu-item index="1">Password Center</el-menu-item>

    <el-submenu style="float: right;"  index="2">
      <template slot="title">Hi {{userName}},</template>
      <el-menu-item index="2-1"  @click="handleLogout">Log out</el-menu-item>
    </el-submenu>
</el-menu>
</template>

<script>
import { AuthService } from '@/services'

export default {
    data() {
        return {
            userName: 'No Name',
            activeIndex: '1',
        }
    },
    created() {
        var user = AuthService.getUser();
        this.userName = user.getName();
    },
    methods: {
        handleLogout() {
            AuthService.requestLogout();
        }   
    }
}
</script>
<style scoped>
.menu-top {
    padding-left: 55px;
    padding-right: 55px;
}
</style>