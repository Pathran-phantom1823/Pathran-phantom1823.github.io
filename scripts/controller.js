
var btnOn = document.getElementById('onBtn');
var btnOff = document.getElementById('ofBtn');
var timestamp = new Date()
var data;
var payload1 = "Turn ON: |" + timestamp; 
var payload2 = "Turn OFF |" + timestamp; 
var topic = "patrick/device/status"; 

      client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt");
      client.on("connect", function () {
            alert("Successfully connected to wss://test.mosquitto.org:8081/mqtt");


      // client.on("message", function (topic, payload) {
      //       var table = document.getElementById('tbody');
      //       var row = table.insertRow(0);
      //       var cell1 = row.insertCell(0);
      //       var cell2 = row.insertCell(1);
      //       var cell3 = row.insertCell(2);
      //       cell1.innerHTML = topic;
      //       cell2.innerHTML = payload;
      //       cell3.innerHTML = timestamp;
      // })
});

btnOn.addEventListener('click', function (e) {
      e.preventDefault();
      client.subscribe("patrick/broker/status");
      console.log("patrick/broker/status")
      client.publish(topic,payload1)
})

btnOff.addEventListener('click', function (e) {
      e.preventDefault();
      // client.subscribe();
      client.publish(topic,payload2)
})

















































