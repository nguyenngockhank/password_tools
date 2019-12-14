<template>
<el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" >
        <el-menu-item v-for="item in items" :key="item.slug" :index="item.index">
            <i :class="item.icon ? item.icon : 'el-icon-menu'"></i>
            <span slot="title">{{item.name}}</span>
        </el-menu-item>


        <el-menu-item index="41">
            <i class="el-icon-setting"></i>
            <span slot="title">Navigator Four</span>
        </el-menu-item>
    </el-menu>
</el-aside>
</template>

<script>
import { CategoryData } from '@/services';


export default {
    data() {
        return {
            items: [],
        }
    },
    async created() {
        var result = await CategoryData.getAll();

        this.items = result.map( (cat, index) => {
            index++;
            return {
                index: index + '', //  to string
                name: cat.getName(),
                icon: cat.getIcon(),
                slug: cat.getId(),
            }
        })

        console.log(' >>> result categories ', result, this.items);
    }
}
</script>