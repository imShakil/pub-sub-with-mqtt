const mqtt = require('mqtt');
//const client = mqtt.connect('mqtt://test.mosquitto.org');
const client = mqtt.connect('mqtt://localhost:1883');


const topic = 'home/livingroom/temperature';

client.on('connect', () => {
    console.log(`Connected to broker. Listening on ${topic}`);
    client.subscribe(topic);
});

client.on('error', (err) => {
  console.error('❌ MQTT Error:', err);
});

client.on('message', (topic, message) => {
    const temp = parseFloat(message.toString());
    console.log(`Current ${topic}: ${message.toString()}`);

    if (temp > 35) {
        console.log('Alert!!, Temperature too high!');
    }
});
