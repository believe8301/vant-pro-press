# Toast 轻提示
---

用于消息提示等场景。

### 平台差异说明
<ClientOnly>
<platform-adaptation module="toast">
</platform-adaptation>
</ClientOnly>

### 代码演示

### 基础用法
```vue
<van-toast id="van-toast"></van-toast>
```
```js
this.Toast('这是一个提示');
```

### 成功提示

```js
this.Toast.success('这是一个提示');
this.Toast.success({
    message: '加载成功',
    duration: 3000
});
```


<ClientOnly>
<property-list module="toast"></property-list>
</ClientOnly>



<ClientOnly>
<mobile-devices page="pages/components/toast/toast"></mobile-devices>
</ClientOnly>