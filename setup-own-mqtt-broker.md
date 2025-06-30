# Hosting Your Own MQTT Broker with Mosquitto

## Run on Docker

```sh
docker run -d --name mqtt-broker -p 1883:1883 -p 9001:9001 -v ./mosquitto.conf:/mosquitto/config/mosquitto.conf eclipse-mosquitto
```

Make sure you have [`mosquitto.conf`](./mosquitto.conf) file in your current directory, otherwise create it first before running the container. 