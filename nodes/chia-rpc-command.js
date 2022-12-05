module.exports = function(RED) {
    function chiaRpcCommand(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
    msg.payload = "chia-rpc-command";
    node.send(msg);
});
    }
    RED.nodes.registerType('chia-rpc-command', chiaRpcCommand);
}