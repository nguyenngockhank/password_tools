<template>
<div>
    <NavBar />
    <el-container style="border: 1px solid #eee">
        <SideBar />

        <el-container>
            <el-header style="display: flex; justify-content: space-between; height: 40px;" >
                <span style="line-height: 40px;">Hello, have a nice day!</span>
                <el-button  
                    type="success" round  @click="dialogVisible = true"
                >Add new</el-button>
            </el-header><!-- end header section -->

            <el-main>
                <AccountTable />
            </el-main><!-- end main section -->
        </el-container><!-- end content container  -->
    </el-container><!-- end page container  -->

    <AccountForm :dialog-visible.sync="dialogVisible" @submit="handleFormSubmit" />

</div>
</template>

<script>
import NavBar from './Navbar';
import SideBar from './Sidebar';
import AccountForm from './AccountForm';

import AccountTable from './AccountTable';

import { AuthService, AccountData } from '@/services'

export default {
    components: {
        NavBar, SideBar, AccountForm, AccountTable
    },
    data() {
        return {
            dialogVisible: false,
        }
    },
    methods: {
        async handleFormSubmit(accountInfo) {
            var account = await AccountData.create(accountInfo)
            this.dialogVisible = false;
        }
    }
}
</script>

<style scoped lang="scss">
</style>