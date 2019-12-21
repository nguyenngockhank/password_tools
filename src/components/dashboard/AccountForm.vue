<template>
<el-dialog
    title="Add new account"
    :visible.sync="dialogVisible"
    width="400px"
    :before-close="handleClose">
        <el-form :model="account" :rules="rules" :label-position="'top'" ref="accountForm">

            <el-form-item label="Category" prop="cat_id">
                 <el-select v-model="account.cat_id" placeholder="Select">
                    <el-option
                        v-for="item in categoryList"
                            :key="item.index"
                            :label="item.name"
                            :value="item.slug">
                    </el-option>
                </el-select>
            </el-form-item>
           

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
import categoryDataMixin from './categoryDataMixin';

export default {
    mixins: [ categoryDataMixin ],
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
                cat_id: [
                    { required: true, message: 'Please choose one', trigger: 'blur' }
                ]
            },
            categoryList: [],
            account: {
                cat_id: 'all',
                user: '',
                pass: '',
                login_url: '',
                note: '',
            },
        }
    },
    async created(){
        this.categoryList = await this.getCategoryList();
    },
    methods: {
        submitForm(formName) {
            // console.log(' submit form ', formName, this.account);
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    const { user, pass, cat_id, login_url, note } = this.account;
                    this.$emit('submit', { user, pass, cat_id, login_url, note });
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        handleClose(done) {
            this.account =  {
                cat_id: 'all',
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