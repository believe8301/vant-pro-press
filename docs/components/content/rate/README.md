# Rate 评分
---

进行评级操作。

### 平台差异说明
<ClientOnly>
<platform-adaptation module="rate">
</platform-adaptation>
</ClientOnly>

### 代码演示

### 基础用法
```vue
<van-rate :value="value" @change="change"></van-rate>
<van-rate v-model="value"></van-rate>
```

### 允许半选
通过 allow-half 属性为true，设置其允许半选。

```vue
<van-rate v-model="value" :allow-half="true"></van-rate>
```

### 图标总数
通过 count 属性控制图标总数。

```vue
<van-rate v-model="value" :count="8"></van-rate>
```


<ClientOnly>
<property-list module="rate"></property-list>
</ClientOnly>



<ClientOnly>
<mobile-devices page="pages/components/rate/rate"></mobile-devices>
</ClientOnly>