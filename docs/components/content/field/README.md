# Field 输入框
---

支持文本输入等。

### 平台差异说明
<ClientOnly>
<platform-adaptation module="field">
</platform-adaptation>
</ClientOnly>

### 代码演示

### 基础用法
label 属性可设置输入框左侧文本，placeholder 设置输入框为空时的占位符
```vue
<van-field label="文本" placeholder="请输入文本" :value="value" @change="confirm"></van-field>
```

### 边框设置
通过 border 属性可控制其是否显示内边框。

```vue
<van-field v-model="value" label="文本" placeholder="请输入文本" :border="false"></van-field>
```

### 清除控件
通过 clearable 属性控制是否显示清楚控件。

```vue
<van-field v-model="value" label="文本" placeholder="请输入文本" :clearable="true"></van-field>
```

### 禁用输入框
通过 disabled 属性设置是否禁用输入框。

```vue
<van-field v-model="value" label="文本" placeholder="请输入文本" :disabled="true"></van-field>
```

### 类型设置
通过 type 属性可将其设置为任意原生类型, 如 number、idcard、textarea、digit等，默认为 text。

```vue
<van-field v-model="value" label="文本" placeholder="请输入文本" type="textarea"></van-field>
```


<ClientOnly>
<property-list module="field"></property-list>
</ClientOnly>



<ClientOnly>
<mobile-devices page="pages/components/field/field"></mobile-devices>
</ClientOnly>