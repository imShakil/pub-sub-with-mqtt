# A Simple MQTT Project on (Pub/Sub)

This is a simple real-world MQTT-based project that simulates a smart home temperature monitoring system. It uses **Node.js** and **MQTT** to demonstrate how IoT devices communicate using the **publish-subscribe** model.

## 📌 Overview

- A **publisher** simulates a temperature sensor by sending random temperature data to a public MQTT broker.
- A **subscriber** listens for temperature messages and logs them.
- If the temperature exceeds **35°C**, the subscriber triggers an **alert**.

## ⚙️ Tech Stack

- Node.js
- MQTT.js (`mqtt` npm package)
- Public MQTT broker: [test.mosquitto.org](https://test.mosquitto.org)

## How to Test?

1. Clone the repository

```sh
git clone git@github.com:imShakil/pub-sub-with-mqtt.git
cd pub-sub-with-mqtt
```

2. Install Dependencies

```sh
npm install mqtt
```

3. Run pub-sub

Take two tab in your terminal, and run:

```sh
node subscriber.js
```

```sh
node publisher.js
```

After then they will communicate each other and keep updating temparature.

![Screenshot 2025-06-30 at 18 05 52](https://github.com/user-attachments/assets/0231f60f-e03b-4919-ac7a-9166b985d594)
