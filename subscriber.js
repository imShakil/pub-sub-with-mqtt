const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://test.mosquitto.org');

const topic = 'home/livingroom/temperature';

client.on('connect', () => {
    console.log(`Connected to broker. Listening on ${topic}`);
    client.subscribe(topic);
});


client.on('message', (topic, message) => {
    const temp = parseFloat(message.toString());
    console.log(`Current ${topic}: ${message.toString()}`);

    if (temp > 35) {
        console.log('Alert!!, Temperature too high!');
    }
});
