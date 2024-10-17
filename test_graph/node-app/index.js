const express = require('express');
const os = require('os');
const osUtils = require('os-utils');
const app = express();

app.get('/metrics', (req, res) => {
    osUtils.cpuUsage((cpuPercent) => {
        const metrics = {
            cpu: cpuPercent * 100, // Utilisation du CPU en pourcentage
            freeMem: os.freemem(), // Mémoire libre en octets
            totalMem: os.totalmem(), // Mémoire totale en octets
            upTime: os.uptime(), // Uptime du système en secondes
        };
        res.json(metrics);
    });
});

app.listen(3000, () => {
    console.log('API is running on http://localhost:3000');
});

