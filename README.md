[![platform](https://img.shields.io/badge/platform-Node--RED-red)](https://nodered.org)
[![npm](https://img.shields.io/npm/v/node-red-contrib-tumblr.svg)](https://www.npmjs.com/package/node-red-contrib-tumblr)
[![downloads](https://img.shields.io/npm/dt/node-red-contrib-tumblr.svg)](https://www.npmjs.com/package/node-red-contrib-tumblr)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/HaroldPetersInskipp/node-red-contrib-tumblr/blob/main/LICENSE)

# node-red-contrib-tumblr

[中文](./README.zh-CN.md)

This is a Node-RED module for interacting with the Tumblr API. It provides nodes for both reading and writing posts, as well as fetching and deleting posts.

## Installation

To install this module, run the following command in your Node-RED user directory:

npm install node-red-contrib-tumblr

## Configuration

Before using any of the Tumblr API nodes, you will need to configure your Tumblr API credentials. To do this, open the node's configuration dialog and enter your Tumblr API consumer key and secret key. You can find these keys by creating a new Tumblr API app at https://www.tumblr.com/oauth/apps.

## Usage

This module includes the following nodes:

### get-blog

This node retrieves a list of posts from a specified Tumblr blog. You can configure the node to retrieve all posts in the blog or only those from a specific date range.

### write-post

This node creates a new post on a specified Tumblr blog. You can configure the node to create posts of different types, such as text, photo, quote, or link.

### update-post

This node updates an existing post on a specified Tumblr blog. You can configure the node to edit the post's contents, tags, or publish status.

### delete-post

This node deletes an existing post from a specified Tumblr blog. You can configure the node to delete a post by its ID or URL.
