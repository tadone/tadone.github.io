---
title: terminology
---
# DevOps Terminology
---

# Key Value Stores
Zookeeper or Consul or ETCD


# Testing

**soak testing**, which is a form of verification of a service’s reliability and stability over long period of time under a realistic level of concurrency and load, used to detect memory leaks, GC pause times, CPU utilization and so forth over a period of time.

Traditionally, integration testing is performed by a CI server in an isolated “testing” environment over every git branch. A copy of the entire service topology (including databases, queues, caches, proxies and so forth) is spun up for the test suites of all the services to be run against each other.

Unit Tests
Unit tests take a small piece of the product and test that piece in isolation.

Performance (Load) Testing

End to End tests
The latest version of the service is built.
This version is then deployed to the team's testing environment.
All end-to-end tests then run against this testing environment.
An email report summarizing the test results is sent to the team.

Canarying
Canarying refers to a partial release of a service to production. A subset of production now consists of the canaries which are then sent a small percentage of actual production traffic after they pass a basic health check.
