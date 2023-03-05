const tumblr = require('tumblr.js');

function TumblrNode (config) {
  RED.nodes.createNode(this, config);

  const node = this;

  const client = tumblr.createClient({
    consumer_key: config.consumerKey,
    consumer_secret: config.consumerSecret,
    token: config.token,
    token_secret: config.tokenSecret
  });

  node.on('input', function (msg) {
    node.status({ fill: "green", shape: "dot", text: "Processing..." });
    const blogName = (config.blogName || msg.payload.blogName);
    const postType = (config.postType || 'text');

    client.blogPosts(blogName, { type: postType }, function (err, data) {
      if (err) {
        node.status({ fill: "red", shape: "dot", text: "msg.topic is incorrect" });
        node.error("Error: " + err);
      } else {
        node.status({ fill: "blue", shape: "dot", text: "Delete complete" });
        node.send({ payload: data });
      }
    });
  });
}

RED.nodes.registerType("tumblr", TumblrNode);
