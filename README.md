\# DevSecOps Final Project



This project was created for the SENG 473 Information Security final project.



\## Topic



Automated DevSecOps Pipeline



\## Description



This project demonstrates a security gate pipeline using GitHub Actions. The pipeline automatically scans the project whenever code is pushed to GitHub.



The purpose of the pipeline is to detect security issues before unsafe code is accepted.



\## Tools Used



\- Node.js

\- npm

\- GitHub

\- GitHub Actions

\- Gitleaks

\- npm audit



\## Project Files



\- `index.js` - Simple Node.js application.

\- `insecure.js` - Demonstrates credential handling using environment variables.

\- `package.json` - Contains project details and dependencies.

\- `package-lock.json` - Stores exact dependency versions.

\- `.github/workflows/security.yml` - GitHub Actions security pipeline.

\- `REPORT.md` - Full final project report.



\## How to Run the Application



Install dependencies:



```bash

npm install

