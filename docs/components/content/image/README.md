# Image 按钮
---

image 加强版，支持图片懒加载等。

### 平台差异说明
<ClientOnly>
<platform-adaptation module="image">
</platform-adaptation>
</ClientOnly>

### 代码演示

### 基础用法
与 image 标签一样，设置 src 、width、height 属性。
```vue
<van-image src="https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF" width="160" height="200"/>
```

### 填充模式
通过 fill 属性设置填充模式，默认为 scaleToFill，详情参考 uni-app image 的 mode 属性。

```vue
<van-image src="https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF" width="160" height="200" fill="aspectFit"/>
```

### 圆形图片
通过 round 属性可将图片展示为圆形。

```vue
<van-image src="https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF" width="160" height="200" :round="true"/>
```

### 失败提示
通过 use-loading-slot 属性设置是否展示加载失败提示。

```vue
<van-image src="https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF" width="160" height="200" :show-error="true" :use-loading-slot="true">
  <view slot="error">加载失败</view>
</van-image>
```



<ClientOnly>
<property-list module="image"></property-list>
</ClientOnly>



<ClientOnly>
<mobile-devices page="pages/components/image/image"></mobile-devices>
</ClientOnly>