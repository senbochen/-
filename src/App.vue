<template>
  <div id="app">
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <table-plus :data="tableData" :column="columns">
      <el-table-column label="操作" slot="operate">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </table-plus>

    <p @click="goChen">chen-app</p>
    <button @click="sendChild">向字应用发送消息</button>
    <div id="chen-app"></div>
    <div id="vite-app"></div>
  </div>
</template>

<script>
import TablePlus from './components/table-plus.vue'
import actions from './action'

export default {
  name: 'App',
  components: {
    TablePlus
  },
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      columns: [
        {
          prop: 'index',
          width: '200px',
          label: '序号',
          type: 'index'
        },
        {
          prop: 'date',
          width: '200px',
          label: '日期',
          renderItem: (createElement, sourceData) => {
            return createElement('div',
              sourceData.date + '陈松柏'
            )
          }
        },
        {
          prop: 'name',
          width: '200px',
          label: '姓名',
          formate: () => {
            return 1212
          }
        },
        {
          prop: 'address',
          width: '200px',
          label: '地址'
        },
        {
          slotName: 'operate'
        }
      ]
    }
  },
  methods: {
    sendChild () {
      actions.setGlobalState({ name: '今天天气不错' })
    },
    goChen () {

      // this.router.push('/chen-app')
      console.log(this.router)
    },

  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
