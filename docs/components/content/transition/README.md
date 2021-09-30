# Transition 动画
---

元素状态改变的动画效果。

### 平台差异说明
<ClientOnly>
<platform-adaptation module="transition">
</platform-adaptation>
</ClientOnly>

### 代码演示

### 基础用法
在元素显示或者隐藏时，会有动画效果
```vue
<van-transition v-model="selectState">内容</van-transition>
```

### 动画类型
通过 name 属性设置动画类型，默认为 fade，可以设置为 slide-up、slide-down、slide-left、slide-right、fade-up、fade-down、fade-left、fade-right。

```vue
<van-transition v-model="selectState" name="slide-down">内容</van-transition>
```

### 动画时长
通过 duration 属性自定义动画时长，默认动画时长是 300。

```vue
<van-transition v-model="selectState" :duration="500">内容</van-transition>
```


<ClientOnly>
<property-list module="transition"></property-list>
</ClientOnly>



<ClientOnly>
<mobile-devices page="pages/components/transition/transition"></mobile-devices>
</ClientOnly>