# Slider 滑块
---

用于在特定范围内选择一个值。

### 平台差异说明
<ClientOnly>
<platform-adaptation module="slider">
</platform-adaptation>
</ClientOnly>

### 代码演示

### 基础用法

```vue
<van-slider v-model="value" @change="onchange"></van-slider>
```

### 指定选择范围
通过 max、min 属性，可以设置可选择的最大值和最小值

```vue
<van-slider v-model="value" :max="70" :min="20" @change="onchange"></van-slider>
```

### 设置进度条高度
通过 bar-height 属性自定义进度条高度，单位默认为 rpx。

```vue
<van-slider v-model="value" :bar-height="2" @change="onchange"></van-slider>
```

### 禁用滑块
通过 disabled 属性设置是否禁用滑块。

```vue
<van-slider v-model="value" :disabled="true" @change="onchange"></van-slider>
```

### 双滑块
通过 range 属性是否双滑块，注意：双滑块是 value 应为数组，例如：[20,40]。

```vue
<van-slider v-model="value" :range="true" @change="onchange"></van-slider>
```



<ClientOnly>
<property-list module="slider"></property-list>
</ClientOnly>



<ClientOnly>
<mobile-devices page="pages/components/slider/slider"></mobile-devices>
</ClientOnly>