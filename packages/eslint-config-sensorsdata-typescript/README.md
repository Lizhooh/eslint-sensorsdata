# eslint-config-sensorsdata-typescript

基于[airbnb](https://github.com/airbnb/javascript)配置的个性化 Typescript ESLint 规则

## 使用方法

在项目中添加`.eslintrc.js`文件，添加`extends`:

```yaml
module.exports = {
  extends: ['@sc/eslin-config-sensorsdata-typescript']
};
```

同时使用`react`和`typescript`,需要按以下顺序:

```yaml
module.exports = {
  extends: ['@sc/eslin-config-sensorsdata-react', '@sc/eslin-config-sensorsdata-typescript/react']
};
```