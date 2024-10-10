FROM ubuntu:latest

# Install dependencies
RUN apt-get update && apt-get install -y openjdk-8-jdk logstash

# Set environment variables
ENV LOGSTASH_CONFIG=/etc/logstash/conf.d/

# Copy Logstash configuration file
COPY logstash.conf $LOGSTASH_CONFIG/

# Expose port 5044 for Logstash
EXPOSE 5044

# Run Logstash when container starts
CMD ["logstash", "-f", "$LOGSTASH_CONFIG/"]