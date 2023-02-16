<template>
  <el-table :data="data" style="width: 100%" v-bind="$attrs" v-on="tableEvents">
    <template v-for="item in column">
      <el-table-column v-bind="item" :key="item.prop" v-if="item.formate">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ item.formate(scope.row) }}</span>
        </template>
      </el-table-column>
      <el-table-column v-bind="item" :key="item.prop" v-else-if="item.slotName">
        <!-- @slot 动态插槽，请在 options 的 columnProps 中配置 slot 的名字 -->
        <slot :name="item.slotName"></slot>
      </el-table-column>
      <el-table-column
        v-bind="item"
        :key="item.prop"
        v-else-if="item.renderItem"
      >
        <template slot-scope="scope">
          <kf-dynamic-component
            :renderMethod="item.renderItem"
            :sourceData="scope.row"
          ></kf-dynamic-component>
        </template>
      </el-table-column>
      <el-table-column v-else v-bind="item" :key="item.prop"> </el-table-column>
    </template>
    <!-- @slot 最后一列的插槽 -->
    <slot name="endColumn"></slot>
    <!-- @slot 兼容el-table的append插槽 -->
    <template slot="append">
      <slot name="tableAppend"></slot>
    </template>
    <!-- @slot 拓展el-table的empty插槽 -->
    <template slot="empty">
      <slot name="tableEmpty" v-if="$slots.tableEmpty"></slot>
      <template v-else>
        <div>暂无数据</div>
      </template>
    </template>
  </el-table>
</template>

<script>
import KfDynamicComponent from './dynamicComponent.js'
export default {
  name: "TablePlus",
  components: {
    KfDynamicComponent
  },
  props: {
    data: {
      required: true,
      type: Array
    },
    column: {
      required: true,
      type: Array
    }
  },
  data () {
    return {
      table_config_data: {
        checked: false,
        thead: [

        ]
      }
    }
  },
  computed: {
    tableEvents () {
      const { tableEvents } = this.options
      return tableEvents
    }
  },
  mounted () {
    // this.init_table_config()
  },
}

</script>
<style>
</style>
