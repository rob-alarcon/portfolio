---
title: Roberto Alarcon - Resume
description: Resume of Roberto Alarcon, Senior Software Engineer specializing in C#/.NET, distributed systems, event-driven architecture, and Azure.
layout: ../layouts/Base.astro
---

# Roberto Alarcon

**Senior Software Engineer**

San Diego, CA · [rob.alarcon@gmail.com](mailto:rob.alarcon@gmail.com) · [linkedin.com/in/robalarcon](https://www.linkedin.com/in/robalarcon/) · [robalarcon.com](https://www.robalarcon.com/)

## Professional Summary

Performance-obsessed Senior Software Engineer with 17+ years in C#/.NET, distributed systems, and event-driven architecture. Sole engineer owning the backend, database, and Azure infrastructure of an IoT platform serving tens of thousands of devices — root-causing decade-old stability issues, eliminating database bottlenecks, and taking over DevOps end to end. Full-stack across .NET, Go, Angular, and React, using AI-assisted engineering (Claude Code) to ship faster.

## Technical Skills

- **Backend:** C#, .NET (Framework 4.8, .NET 8/10), Go, Python, Node.js
- **Data & Messaging:** PostgreSQL, PgBouncer, SQL Server, Redis, NATS, Kafka
- **Cloud & Infrastructure:** Azure (AKS, App Service, Container Instances, Azure Database for PostgreSQL), Kubernetes, Docker, Windows Server, Linux, certbot / TLS automation, Datadog
- **Frontend:** Angular, React, TypeScript, JavaScript, Tailwind
- **AI:** Claude Code

## Work Experience

### Calsense

#### Senior Software Engineer | San Diego, CA | 2023 - Present

- **Platform ownership:** Sole engineer owning backend, database, and Azure infrastructure for an IoT platform serving tens of thousands of devices. Raised uptime from 80% to 99% and root-caused stability issues that had persisted for a decade, avoiding a planned outsourced rewrite.
- **Database bottleneck:** Found telemetry records padded to 1 MB (actual payload 8–16 KB) rewritten every 5 seconds and read continuously. Shipped an in-memory cache as a safe interim fix, then removed the padding — cutting monthly network traffic by ~97% (from ~1.4 TiB to under 40 GiB received) and ending timeouts.
- **Connections & load:** Rebuilt database connection management across PgBouncer and the internal pool, eliminating leaked and dead connections. Introduced NATS to queue and throttle the request spikes behind recurring database storms.
- **Scaling for large customers:** Replaced per-device query loops with set-based queries so large enterprise accounts scale; cut UI load times by 50% through batching, SQL rewrites, and index tuning.
- **Database migration:** Led a 9-week, zero-downtime migration from Advantage Database Server to Azure Database for PostgreSQL, preserving interface contracts for legacy clients.
- **Concurrency:** Diagnosed and fixed deadlocks and thread starvation in SemaphoreSlim-based code guarding shared connection pools.
- **DevOps:** Took over DevOps: automated TLS certificate renewal with certbot across App Service, Container Instances, AKS, and Windows Server; rebuilt deployments; own Postgres maintenance — using AI-assisted workflows (Claude Code).
- **Modernization:** Designed and am building a Go-based TCP gateway with a .NET 8 backend to replace the legacy device server; built Kafka pub/sub messaging and AI-powered natural-language reporting.

### [Lytx, Inc.](https://www.lytx.com/)

#### Software Engineer III | San Diego, CA | 2023

- Led the design of a new version of the public API customers use to access their data.
- Built microservices in an event-driven system capturing telemetry from delivery-truck fleets; added features to customer-facing Angular portals.
- Fixed performance bugs in an existing production application.

### [Becton Dickinson (formerly CareFusion)](https://www.bd.com/en-ca/company/news-and-media/press-releases/mar-17--2015-becton-dickinson-completes-acquisition-of-carefusion)

#### Senior Software Engineer | San Diego, CA | 2015 - 2022

- Led a full-scale architectural refactor of a legacy Windows application into a native Android application for specialized medical scanning hardware.
- Built end-to-end REST APIs and microservices infrastructure with Docker, Kubernetes, and Kafka pipelines to support cross-functional data consumption.
- Enhanced web applications using React, Vue, and legacy frameworks (Knockout.js, Backbone.js).

### [InnovoCommerce](https://www.innovocommerce.com)

#### Software Engineer II | Irvine, CA | 2013 - 2015

- Led front-end development of the investigatorFIRST clinical-trial document portal used in production by Novo Nordisk and Boehringer Ingelheim; wrote .NET WCF APIs over SQL Server and Neo4j.

### CKLUSTER Technologies

#### Co-founder & Lead Front-End Engineer | Remote | 2010 - 2015

- Co-founded a real-time team collaboration startup (messaging, calendars, task management) for 50+ enterprise customers; built with Backbone.js, Python/Pylons, and PostgreSQL.

## Education

### [CETYS Universidad](https://www.cetys.mx/en/)

#### B.S. Computer Science Engineering | Tijuana, Mexico | 2005 - 2011
