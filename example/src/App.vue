<template>
  <div id="app">
    <demonstration
      tag="h2"
      title="scrollbar 组件"
      description="基于vue2.0的滚动条组件,代码参考了element UI,element UI没有提供单独的scrollbar滚动条组件,这个组件希望对大家有帮助。"
      :show-content="false">
    </demonstration>
    <demonstration
        title="基本用法"
        anchor="demo-code-title"
        :highlight="sourcecode">
      <template slot="description">
      </template>
      <template slot="source">
        <div class="source">
          <div class="bigbox">
            <vm-scrollbar tag="ul"
                          :wrapStyle="{ height: '300px'}"
            >
                <li class="smallbox" v-for="item in 6">{{ item }}</li>
            </vm-scrollbar>
          </div>
        </div>
      </template>
      <template slot="explanation">
        传入参数 tag="ul" 组件生成ul
        <br>
        ul为内层内容盒子
        <br>
        外层盒子一般设置最大高度
        <br>
        高度只能是具体数值不可以是百分比
      </template>
    </demonstration>
    <div class="input-demo__item">
      <h3 id="attributes">
        <a href="./#attributes" aria-hidden="true" class="header-anchor">¶</a>
        Attributes
      </h3>
      <table class="table">
        <thead>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
        </thead>
        <tbody>
        <tr>
          <td>wrapClass</i></td>
          <td>外层container盒子类名,高度不可是百分比,不可设置宽度</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>viewClass</i></td>
          <td>内层内容盒子类名</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>wrapStyle</i></td>
          <td>外层container盒子样式,高度不可是百分比,不可设置宽度</td>
          <td>object</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>viewStyle</i></td>
          <td>内层内容盒子样式</td>
          <td>object</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>tag</i></td>
          <td>内层生成的标签</td>
          <td>string</td>
          <td>—</td>
          <td>div</td>
        </tr>
        <tr>
          <td>barWidth</i></td>
          <td>滚动条宽度</td>
          <td>number</td>
          <td>—</td>
          <td>6</td>
        </tr>
        <tr>
          <td>barClass</i></td>
          <td>滚动条类名，可以自定义滚动条样式，不可以设置宽高</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>noresize</i></td>
          <td>如果 container 尺寸不会发生变化，最好设置它可以优化性能</td>
          <td>Boolean</td>
          <td>true/false</td>
          <td>false</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script type="es6">
  import { sourcecode } from './template'

  export default {
    data () {
      return {
        sourcecode
      }
    },
  }
</script>

<style lang="less" rel="stylesheet/less">
  #app {
    margin: 60px auto;
  }
  ul{
    margin: 0;
    padding: 0;
  }
  li{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .bigbox{
    width: 100%;
    height: 400px;
    /*height: 600px;*/
    overflow: hidden;
  }
  .vm-scrollbar__box{
    max-height: 300px;
  }

  .smallbox{
    background-color: #fff;
    border: 1px solid #000;
    height: 80px;
    line-height: 80px;
    width: 1200px;
    font-size: 20px;
    text-indent: 20px;
    /*background-color: #ddd;*/
  }
  #app {
    margin: 60px auto;
  }
  .input-demo__item {
    width: 1000px;
    margin: 0 auto;
  h2, h3 {
    font-weight: 400;
    color: #1f2f3d;
  }

  h2 {
    font-size: 28px;
    margin: 0
  }

  h3 {
    font-size: 22px;
    margin: 45px 0 15px;
  }

  h3, h2 {

  &
  :hover {

  a {
    opacity: .4;
  }

  }
  a {
    float: left;
    margin-left: -20px;
    opacity: 0;
    cursor: pointer;
    color: #4078c0;
    text-decoration: none;

  &
  :hover {
    opacity: .4;
  }

  }
  }
  p {
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;

  a {
    color: #2d8cf0;
    background: 0 0;
    text-decoration: none;
    outline: 0;
    cursor: pointer;
    transition: color .2s ease;

  &
  :hover {
    color: #57a3f3;
  }

  }
  }
  .new {
    font-style: normal;
    color: #FF4949;

  code {
    background-color: #FF4949 !important;
    color: #fff !important;
  }

  }
  .table {
    border-collapse: collapse;
    width: 100%;
    background-color: #fff;
    color: #5e6d82;
    font-size: 14px;
    margin-bottom: 45px;
    line-height: 1.5em;

  th {
    text-align: left;
    border-top: 1px solid #eaeefb;
    background-color: #eff2f7;
    white-space: nowrap;
  }

  th, td {
    border-bottom: 1px solid #eaeefb;
    padding: 10px;
    max-width: 250px;
  }

  }
  }
</style>
