# Cell 单元格
---

单元格是列表中的单个展示项。

### 平台差异说明
<ClientOnly>
<platform-adaptation module="cell">
</platform-adaptation>
</ClientOnly>

### 代码演示

### 基础用法
```vue
<van-cell-group>
  <van-cell title="cell" value="content" label="label"></van-cell>
  <van-cell title="cell" value="content" label="label"></van-cell>
</van-cell-group>
```
cell 可以单独使用，也可以和 van-cell-group 联用，van-cell-group 为其提供上下外边框，卡片等样式。

### 卡片风格
通过 inset 属性为true，设置其风格为卡片风格。

```vue
<van-cell-group :inset="true">
  <van-cell title="cell" value="content" label="label"></van-cell>
  <van-cell title="cell" value="content" label="label"></van-cell>
</van-cell-group>
```

### 大小设置
通过 size 属性控制单元格大小，可选值 large。

```vue
<van-cell title="cell" value="content" label="label" size="large"></van-cell>
```

### 图标设置
通过 icon 左侧图标名称或图片链接，可选值见 Icon 组件。

```vue
<van-cell icon="plus" title="cell" value="content" label="label"></van-cell>
```

### 展示箭头
通过 is-link 属性设置展示右侧箭头并开启点击反馈。

```vue
<van-cell title="cell" value="content" :is-link="true"></van-cell>
```

### 是否必填
通过 required 属性设置是否显示表单必填星号。

```vue
<van-cell title="cell" value="content" :required="true"></van-cell>
```



<ClientOnly>
<property-list module="cell"></property-list>
</ClientOnly>



<ClientOnly>
<mobile-devices page="pages/components/button/button"></mobile-devices>
</ClientOnly>