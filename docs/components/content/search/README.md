# Search 搜索
---

用于搜索场景的输入框组件。
### 平台差异说明
<ClientOnly>
<platform-adaptation module="search">
</platform-adaptation>
</ClientOnly>

### 代码演示

### 基础用法
label 是输入框左侧文字，为空时不显示。
```vue
<van-search :value="value" placeholder="请输入" label="搜索" @change="onchange"></van-search>
```

### 搜索框形状
通过 shape 属性为round，设置输入框形状。

```vue
<van-search :value="value" placeholder="请输入" shape="round" @change="onchange"></van-search>
```

### 取消按钮
通过 show-action 属性是否显示右侧取消按钮。

```vue
<van-search :value="value" placeholder="请输入" :show-action="true" @change="onchange"></van-search>
```

### 禁用输入框
通过 disabled 为 true 可禁用输入框。

```vue
<van-search :value="value" placeholder="请输入" :disabled="true" @change="onchange"></van-search>
```


<ClientOnly>
<property-list module="search"></property-list>
</ClientOnly>



<ClientOnly>
<mobile-devices page="pages/components/search/search"></mobile-devices>
</ClientOnly>