[![platform](https://img.shields.io/badge/platform-Node--RED-red)](https://nodered.org)
[![npm](https://img.shields.io/npm/v/node-red-contrib-tumblr.svg)](https://www.npmjs.com/package/node-red-contrib-tumblr)
[![downloads](https://img.shields.io/npm/dt/node-red-contrib-tumblr.svg)](https://www.npmjs.com/package/node-red-contrib-tumblr)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/HaroldPetersInskipp/node-red-contrib-tumblr/blob/main/LICENSE)

# node-red-contrib-custom-tumblr

一个用于与 Tumblr API 进行交互的 node-red 模块。

## 安装

使用以下命令来安装：

npm install node-red-contrib-custom-tumblr


或者，可以直接在 node-red 编辑器中通过 Manage Palette 进行安装。

## 依赖项

该模块依赖于 Tumblr API 和 tumblr.js 库。

## 用法

1. 注册一个 Tumblr 应用，获取 API KEY 和 SECRET。
2. 在 node-red 中创建一个 tumblr 模块，并将 API KEY 和 SECRET 输入到配置中。
3. 创建一个 tumblr 节点，并将其配置为连接到你的 Tumblr 计划，并输入任何其他参数，例如帖子类型、标签、发布日期等。
4. 将 tumblr 节点的输出连接到其他流程中。

## 节点

### tumblr

从 Tumblr 中获取帖子信息。

#### 配置

- Name：节点名称。
- Consumer Key：你的 Tumblr 应用程序的 API KEY。
- Consumer Secret：你的 Tumblr 应用程序的 SECRET。
- Token：你的 Tumblr 应用程序的 TOKEN。
- Token Secret：你的 Tumblr 应用程序的 TOKEN SECRET。
- Blog Name：你要获取帖子信息的 Tumblr Blog 的名称。

#### 输入

- msg.payload.blogName：你要获取帖子信息的 Tumblr Blog 的名称。
- msg.payload.tags：你要按标签过滤的帖子标签。
- msg.payload.content：帖子内容

#### 输出

- msg.payload：从 Tumblr API 中获取的帖子信息。

## 示例
