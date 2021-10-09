# Picker 选择器
---

提供一个或多个集合的选择器。

### 平台差异说明
<ClientOnly>
<platform-adaptation module="picker">
</platform-adaptation>
</ClientOnly>

### 代码演示

### 基础用法
```vue
<van-picker :columns="columns" @change="onchange"></van-picker>
```

```js
columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
```

### 设置默认选中项
通过 default-index 属性设置默认选中项的下标。

```vue
<van-picker :columns="columns" :default-index="2" @change="onchange"></van-picker>
```

### 设置顶部状态栏
通过 show-toolbar 属性控制是否显示顶部状态栏。

```vue
<van-picker :columns="columns" :show-toolbar="true" @cancel="oncancel" @confirm="onConfirm"></van-picker>
```


<ClientOnly>
<property-list module="picker"></property-list>
</ClientOnly>



<ClientOnly>
<mobile-devices page="pages/components/picker/picker"></mobile-devices>
</ClientOnly>