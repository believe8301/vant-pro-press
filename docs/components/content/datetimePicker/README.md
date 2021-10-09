# datetime-picker 时间选择
---

支持事件选择。

### 平台差异说明
<ClientOnly>
<platform-adaptation module="datetime-picker">
</platform-adaptation>
</ClientOnly>

### 代码演示

### 基础用法
datetime-picker type 属性有 datetime | date | time | year-month，默认为 datetime。不建议动态修改其属性值。
```vue
<van-datetime-picker
    v-model="currentDate"
    type="datetime"
/>
```

### 格式化事件
通过 formatter 属性，可定义时间选择器中时间的格式。

```vue
<van-datetime-picker
    v-model="currentDate"
    :formatter="formatterTime"
    type="datetime"
/>
```
```js
formatterTime(type, value){
    if (type === 'year') {
        return `${value}年`;
    }
    if (type === 'month') {
        return `${value}月`;
    }
    return value;
}
```

### 设置可选时间范围
通过 formatter 属性，可定义时间选择器中时间的格式。

```vue
<van-datetime-picker
    v-model="currentDate"
    :min-date="minDate"
    :max-date="maxDate"
    type="datetime"
/>
```
```js
maxDate: new Date().getTime(), 
minDate: new Date('2021/10/7').getTime()
```

### 显示顶部状态栏
通过 show-toolbar 属性控制是否显示顶部状态栏。

```vue
<van-datetime-picker
    v-model="currentDate"
    :show-toolbar="true"
    type="datetime"
/>
```

<ClientOnly>
<property-list module="datetime-picker"></property-list>
</ClientOnly>



<ClientOnly>
<mobile-devices page="pages/components/datetime-picker/datetime-picker"></mobile-devices>
</ClientOnly>