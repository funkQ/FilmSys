<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import {
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Row,
  Col,
  Table,
  TableColumn,
  Input,
  Button,
  Form,
  FormItem,
  Pagination,
  Select,
  DatePicker,
  Option,
  Dialog,
  Upload,
  Cascader,
} from "element-ui";
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Submenu);
Vue.use(Row);
Vue.use(Col);
Vue.use(TableColumn);
Vue.use(Table);
Vue.use(Input);
Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Pagination);
Vue.use(Select);
Vue.use(DatePicker);
Vue.use(Option);
Vue.use(Dialog);
Vue.use(Upload);
Vue.use(Cascader);
export default {
  name: "App",
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
body,
html {
  width: 100%;
  height: 100%;
}
</style>
