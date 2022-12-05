module.exports = function(RED) {
    function chiaRpcConfig(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        
    }
    RED.nodes.registerType('chia-rpc-config', chiaRpcConfig);
}