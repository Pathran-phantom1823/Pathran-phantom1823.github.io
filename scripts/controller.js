
var btnOn = document.getElementById('onBtn');
var btnOff = document.getElementById('ofBtn');
// var timestamp = new Date($.now());
// var today = new Date();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()

var data;

var topic = "patrick/device/status";
var payload1;
var payload2;

client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt");
client.on("connect", function () {
      alert("Successfully connected to wss://test.mosquitto.org:8081/mqtt");

});
payload1 = "Turn ON: |" + moment().format('MMMM Do YYYY, h:mm:ss a');
payload2 = "Turn OFF |" + moment().format('MMMM Do YYYY, h:mm:ss a');

btnOn.addEventListener('click', function (e) {
      e.preventDefault();
      payload1 = "Turn ON: |" + moment().format('MMMM Do YYYY, h:mm:ss a');
      payload2 = "Turn OFF |" + moment().format('MMMM Do YYYY, h:mm:ss a');
      client.subscribe("patrick/broker/status");
      console.log("patrick/broker/status")
      client.publish(topic, payload1)
})

btnOff.addEventListener('click', function (e) {
      e.preventDefault();
      payload1 = "Turn ON: |" + moment().format('MMMM Do YYYY, h:mm:ss a');
      payload2 = "Turn OFF |" + moment().format('MMMM Do YYYY, h:mm:ss a');

      // client.subscribe();
      client.publish(topic, payload2)
})

















































