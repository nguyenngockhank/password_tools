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
                <el-table :data="tableData">
                    <el-table-column prop="date" label="Date" width="140">
                    </el-table-column>
                    <el-table-column prop="name" label="Name" width="120">
                    </el-table-column>
                    <el-table-column prop="address" label="Address">
                    </el-table-column>
                </el-table>
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

import { AuthService } from '@/services'

export default {
    components: {
        NavBar, SideBar, AccountForm
    },
    data() {
        const item = {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
        };
        return {
            account: {
                user: '',
                pass: '',
                login_url: '',
                note: '',
            },
            dialogVisible: false,
            tableData: Array(20).fill(item)
        }
    },
    methods: {
       handleFormSubmit(accountInfo) {
           console.log('acc info', accountInfo)

           this.dialogVisible = false;
       }
    }
}
</script>

<style scoped lang="scss">
</style>