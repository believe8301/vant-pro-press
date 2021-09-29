# Icon 图标
---

矢量图标可以通过 icon 组件引用。

### 平台差异说明
<ClientOnly>
<platform-adaptation module="icon">
</platform-adaptation>
</ClientOnly>

### 代码演示

### 基础用法
name 属性可以是一个图标名称，也可以是一个图片链接。
```vue
<van-icon name="chat-o"></van-icon>
```

### 提示信息
设置 dot 属性，可以在图标右上角展示一个小红点；设置 info 属性，可以在图标右上角展示徽标。
```vue
<van-icon name="chat-o" :dot="true"></van-icon>
<van-icon name="chat-o" info="99"></van-icon>
```

### 颜色设置
通过 color 属性自定义图标的颜色。

```vue
<van-icon name="chat-o" color="#3f8cf4"></van-icon>
```

<ClientOnly>
<property-list module="icon"></property-list>
</ClientOnly>



<ClientOnly>
<mobile-devices page="pages/components/icon/icon"></mobile-devices>
</ClientOnly>