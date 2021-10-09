# Radio 单选框
---

在一组备选项中进行单选。

### 平台差异说明
<ClientOnly>
<platform-adaptation module="radio">
</platform-adaptation>
</ClientOnly>

### 代码演示

### 基础用法
通过 value/v-model 可之家绑定当前选中项的 name
```vue
<van-radio-group v-model="selectRadio" @change="change">
  <van-radio name="1">
    单选1
  </van-radio>
  <van-radio name="2">
    单选2
  </van-radio>
</van-radio-group>
```

### 排列方向
通过 direction 属性设置排列方向，可选值为 vertical、horizontal。

```vue
<van-radio-group v-model="selectRadio" direction="horizontal" @change="change">
  <van-radio name="1">
   单选1
  </van-radio>
  <van-radio name="2">
    单选2
  </van-radio>
</van-radio-group>
```

### 选择框形状
通过 shape 属性控制选择框形状，可选值为 round、square。

```vue
<van-radio name="1" shape="square">单选1</van-radio>
```

### 选中状态颜色
通过 checked-color 属性控制选中状态颜色。

```vue
<van-radio name="1" checked-color="red">单选1</van-radio>
```

<ClientOnly>
<property-list module="radio"></property-list>
</ClientOnly>



<ClientOnly>
<mobile-devices page="pages/components/radio/radio"></mobile-devices>
</ClientOnly>