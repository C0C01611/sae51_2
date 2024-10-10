# Simple Log Collection Scenario

This scenario demonstrates a simple log collection setup using the ELK stack.

## Running the Scenario

1. Build the Logstash image by running `docker-compose build` in the current directory.
2. Start the containers by running `docker-compose up`.
3. Create a `logs.json` file in the current directory with some sample log data.
4. Access the Kibana interface at `http://localhost:5601` to view the logs.

## Configuration

The Logstash configuration file is located at `logstash.conf`. You can modify this file to change the log collection settings.

## Troubleshooting

If you encounter issues, check the Logstash logs by running `docker-compose logs logstash`.