<template>
<el-dialog
    title="Add new account"
    :visible.sync="dialogVisible"
    width="400px"
    :before-close="handleClose">

        <el-form :model="account" :rules="rules" :label-position="'top'" ref="accountForm">
            <el-form-item label="Username or Email" prop="user">
                <el-input v-model="account.user"></el-input>
            </el-form-item>

            <el-form-item label="Password" prop="pass">
                <el-input placeholder="password" v-model="account.pass" show-password></el-input>
            </el-form-item>

            <el-form-item label="Login Url">
                <el-input placeholder="Login Url" :rows="2" v-model="account.login_url"></el-input>
            </el-form-item>
          
            <el-form-item label="Note">
                 <el-input  type="textarea" placeholder="Note" v-model="account.note"></el-input>
            </el-form-item>
        </el-form><!-- end form -->

        <span slot="footer" class="dialog-footer">
            <el-button type="primary"  @click="submitForm('accountForm')" >Confirm</el-button>
            <el-button @click="$emit('update:dialogVisible', false)">Cancel</el-button>
        </span>
</el-dialog>
</template>
<script>
export default {
    props: {
        dialogVisible: false,
    }, 
    data() {
        return {
            rules: {
                user: [
                    { required: true, message: 'Please input Username', trigger: 'blur' },
                ],
                pass: [
                    { required: true, message: 'Please input Password', trigger: 'blur' }
                ],
            },
            account: {
                user: '',
                pass: '',
                login_url: '',
                note: '',
            },
        }
    },
    methods: {
        submitForm(formName) {
            console.log(' submit form ', formName, this.account);

            this.$refs[formName].validate((valid) => {
                if (valid) {
                    const { user, pass, login_url, note } = this.account;
                    this.$emit('submit', { user, pass, login_url, note });
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
         handleClose(done) {
            this.account =  {
                user: '',
                pass: '',
                login_url: '',
                note: '',
            };
            this.$emit('update:dialogVisible', false)
        }
    }
}
</script>

<style  >
.el-form--label-top .el-form-item__label {
    padding-bottom: 0!important;
    line-height: 30px!important;
}
.el-form-item {
    margin-bottom: 10px!important;
}
</style>