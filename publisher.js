const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://test.mosquitto.org');

const topic = 'home/livingroom/temperature';
// const payload = `Hello from publisher at ${new Date().toLocaleTimeString()}`;

client.on('connect', () => {
    setInterval(() => {
        const temp = (Math.random() * 18 + 22).toFixed(1);
        console.log(`Connected to broker. Sending temperature update with current temperature as ${temp}°C...`);
        client.publish(topic, temp.toString());
    }, 5000);
});
