const express = require('express');
const os = require('os');
const osUtils = require('os-utils');
const app = express();

app.get('/metrics', (req, res) => {
    osUtils.cpuUsage((cpuPercent) => {
        const metrics = {
            cpu: cpuPercent * 100, // CPU usage in percentage
            freeMem: os.freemem(),  // Free memory in bytes
            totalMem: os.totalmem(), // Total memory in bytes
            upTime: os.uptime(), // System uptime in seconds
            loadAvg: os.loadavg(),  // Load average for 1, 5, 15 minutes
        };
        res.json(metrics);
    });
});

app.listen(3000, () => {
    console.log('API is running on http://localhost:3000');
});

