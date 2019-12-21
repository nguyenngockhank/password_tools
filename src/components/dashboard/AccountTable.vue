<template>
  <el-table :data="tableData">
    <el-table-column prop="username" label="Username"></el-table-column>
    <el-table-column prop="loginUrl" label="Login Url"></el-table-column>
    <el-table-column prop="note" label="Note"></el-table-column>

    <el-table-column fixed="right" label="Operations" width="120">
      <template slot-scope="scope">
        <el-tooltip :manual="true" v-model="scope.row.copied" placement="top" content="Copied!">
          <el-button @click="handleCopy(scope.row)" type="text" size="small">Copy</el-button>
        </el-tooltip>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { AccountData } from "@/services";
import { copyToClipboard } from "../helper";
import { decode } from '@/helpers';

export default {
  data() {
    return {
      tableData: []
    };
  },
  async created() {
    var data = await AccountData.getUserData();

    this.tableData = data.map(e => {

        return {
            ...e, 
            copied: false,
            password: decode(e.password)
        }
    })
  },
  methods: {
    handleCopy(account) {
      copyToClipboard(account.password);

      account.copied = true;
      setTimeout(() => {
          account.copied = false;
      }, 500)
    }
  }
};
</script>