# eslint-sensorsdata

### 神策数据前端eslint规则
基于[airbnb](https://github.com/airbnb/javascript)配置的个性化 ESLint 规则

#### 使用

在项目中添加`.eslintrc.js`文件，添加`extends`：
```yaml
module.exports = {
  extends: ['@sc/eslin-config-sensorsdata']
};
```

react项目:
```yaml
module.exports = {
  extends: ['@sc/eslin-config-sensorsdata-react']
}
```

ts:
```yaml
module.exports = {
  extends: ['@sc/eslin-config-sensorsdata-typescript']
};
```

#### 常见问题
在 VSCode 中，默认 ESLint 并不能识别 .vue、.ts 或 .tsx 文件，需要在「文件 => 首选项 => 设置」里做如下配置：

```json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "vue",
    "typescript",
    "typescriptreact"
  ]
}
```

VSCode 中的 autoFixOnSave 没有效果:

```json
{
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "vue",
      "autoFix": true
    },
    {
      "language": "typescript",
      "autoFix": true
    },
    {
      "language": "typescriptreact",
      "autoFix": true
    }
  ]
}
```