<template>
<el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu class="el-menu-vertical-demo">
        <el-menu-item v-for="item in items" :key="item.slug" :index="item.index">
            <i :class="item.icon ? item.icon : 'el-icon-menu'"></i>
            <span slot="title">{{item.name}}</span>
        </el-menu-item>


        <!-- <el-menu-item index="41">
            <i class="el-icon-setting"></i>
            <span slot="title">Navigator Four</span>
        </el-menu-item> -->
    </el-menu>
</el-aside>
</template>

<script>
import categoryDataMixin from './categoryDataMixin';

export default {
    mixins: [ categoryDataMixin ],
    data() {
        return {
            items: [],
        }
    },
    async created() {
        this.items = await this.getCategoryList();
    }
}
</script>