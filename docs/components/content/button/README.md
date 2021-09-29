# Button 按钮
---

按钮用于触发一个事件。

### 平台差异说明
<ClientOnly>
<platform-adaptation module="button">
</platform-adaptation>
</ClientOnly>

### 代码演示

### 基础用法
通过 type 属性可以设置按钮的类型，默认为 default，可以设置为 primary、success、warning、danger。

```vue
<van-button type="default">确认</van-button>
```

### 按钮大小
通过 size 属性设置按钮大小，默认为 normal，可以设置为 large、small、mini。

```vue
<van-button size="large">确认</van-button>
```

### 颜色设置
通过 color 属性自定义按钮的颜色，支持传入 linear-gradient 渐变色。

```vue
<van-button color="linear-gradient(to right, #0080FF, #3f8cf4)">确认</van-button>
```

### 朴素按钮
通过 plain 属性设置是否为朴素按钮，朴素按钮文字为按钮颜色，背景是白色。

```vue
<van-button :plain="true">确认</van-button>
```

### 图标设置
通过 icon 属性设置左侧图标名称或图片链接，图标值与 van-icon 组件一致。

```vue
<van-button icon="plus">新增</van-button>
```



<ClientOnly>
<property-list module="button"></property-list>
</ClientOnly>



<ClientOnly>
<mobile-devices page="pages/components/button/button"></mobile-devices>
</ClientOnly>