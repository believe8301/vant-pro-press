# Layout 布局
---

借助 van-row 和 van-col 实现栅栏布局。

### 平台差异说明
<ClientOnly>
<platform-adaptation module="layout">
</platform-adaptation>
</ClientOnly>

### 代码演示

### 基础用法
Layout 组件提供了24列栅格，通过在 Col 上添加 span 属性设置列所占的宽度百分比。此外，添加 offset 属性可以设置列的偏移宽度，计算方式与 span 相同。
```vue
<van-row>
  <van-col span="8">span: 8</van-col>
  <van-col span="8">span: 8</van-col>
  <van-col span="8">span: 8</van-col>
</van-row>
```

### 设置列元素间距
通过 van-row 的 gutter 属性设置列元素之间间距。

```vue
<van-row gutter="20">
  <van-col span="8">span: 8</van-col>
  <van-col span="8">span: 8</van-col>
  <van-col span="8">span: 8</van-col>
</van-row>
```

<ClientOnly>
<property-list module="layout"></property-list>
</ClientOnly>



<ClientOnly>
<mobile-devices page="pages/components/layout/layout"></mobile-devices>
</ClientOnly>