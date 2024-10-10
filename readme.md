# Log Collection Scenario

This scenario sets up a simple log collection system using Logstash, Elasticsearch, and Grafana.

## Components

* Logstash: receives incoming logs on port 5044 and forwards them to Elasticsearch
* Elasticsearch: stores and indexes the logs
* Grafana: provides a dashboard to visualize the logs

## How to use

1. Start the containers using `docker-compose up -d`
2. Access the Grafana dashboard at `http://localhost:3000`
3. Log in with the username `admin` and password `password`
4. Explore the log count panel to see the collected logs