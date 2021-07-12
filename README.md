## create-react-app添加eslint校验
- 创建** .vscode ** 文件夹
- .vscode 添加 setting.json
```text
{
  "eslintConfig": {
    "extends": ["react-app", "shared-config"],
    "rules": {
      "additional-rule": "warn"
    },
    "overrides": [
      {
        "files": ["**/*.ts?(x)"],
        "rules": {
          "additional-typescript-only-rule": "warn"
        }
      }
    ]
  }
}
```

## 清除原生自带样式
- normalize.css

## Button组件需求分析
- 不同的类型
    - Primary
    - Default
    - Danger
    - Link
- 不同的size
    - normal
    - small
    - larger
- Disabled 状态
    - Button Disabled
    - link Disabled

- 组件代码设计
  - 样式设计
      - 定义不同大小的字体、内边距、字重、状态颜色等属性的变量。
      - 采用sass的mixin模式去定义button的大小类型和不同状态
        - button大小考虑的因素：内边距距离、字体大小、按钮圆角
        - button不同状态考虑的因为： 背景色、边框色、字体色、hover的状态
  - 组件设计
    - 定义常量：按钮大小、类型
    - 约束接收参数

## 组件测试用例
- 高质量代码
- 更早发现bug,减少成本

### 测试框架Jest
- npx jest xx.xx.js
- npx jest xx.xx.js --watch

- React测试专用工具 
  - 测试文件格式
    - .test.js
