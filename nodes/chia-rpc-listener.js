module.exports = function(RED) {
    function chiaRpcListener(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
    msg.payload = "chia-rpc-listener";
    node.send(msg);
});
    }
    RED.nodes.registerType('chia-rpc-listener', chiaRpcListener);
}