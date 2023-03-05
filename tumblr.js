module.exports = (RED) => {
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
      const action = (msg.payload.action || 'createTextPost');

      if (!client[action]) {
        node.status({ fill: "red", shape: "dot", text: `Unknown actionName: ${action}` });
        node.error("Error: " + action);
        return;
      }

      node.status({ fill: "green", shape: "dot", text: `${action}...` });
      client[action](blogName, msg.payload.params, function (err, data) {
        if (err) {
          node.status({ fill: "red", shape: "dot", text: `${action} fail` });
          node.error(err);
          node.send({ error: err });
        } else {
          node.status({ fill: "blue", shape: "dot", text: "Post complete" });
          node.send({ payload: data });
        }
      });

    });
  }

  RED.nodes.registerType("tumblr", TumblrNode);

};
