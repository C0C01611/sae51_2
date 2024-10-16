const express = require('express');
const os = require('os');
const osUtils = require('os-utils');
const app = express();

app.get('/metrics', (req, res) => {
    osUtils.cpuUsage((cpuPercent) => {
        const metrics = {
            cpu: cpuPercent * 100, 
            freeMem: os.freemem(),  
            totalMem: os.totalmem(), 
            upTime: os.uptime(), 
        };
        res.json(metrics);
    });
});

app.listen(3000, () => {
    console.log('API is running on http://localhost:3000');
});

