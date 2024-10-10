# Use an official Logstash image as a base
FROM logstash:8.7.0

# Set the working directory to /app
WORKDIR /app

# Copy the logstash configuration file
COPY logstash.conf /app/logstash.conf

# Expose the port for Logstash to receive logs
EXPOSE 5044

# Run Logstash when the container starts
CMD ["logstash", "-f", "logstash.conf"]s