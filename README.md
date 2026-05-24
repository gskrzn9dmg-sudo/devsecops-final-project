\# SENG 473 Information Security Final Project



\## Topic

Automated DevSecOps Pipeline



\## Project Goal

The goal of this project is to create an automated security gate for a software project. The pipeline scans code before deployment and blocks insecure updates.



\## Tools Used

\- GitHub Actions: Runs the automated security pipeline.

\- Gitleaks: Detects hardcoded secrets such as API keys and passwords.

\- npm audit: Scans Node.js dependencies for known vulnerabilities.



\## Project Description

This project contains a small Node.js web application. I intentionally added insecure code and vulnerable dependencies to demonstrate how a DevSecOps pipeline detects security problems.



The pipeline performs two checks:

1\. Secret scanning

2\. Dependency vulnerability scanning



If a security problem is found, the pipeline fails. This means unsafe code is blocked before deployment.



\## Demonstration

First, I push the insecure version of the project. The pipeline runs automatically and fails because the project contains a hardcoded secret and vulnerable dependencies.



Then, I fix the project by removing the hardcoded secret and updating the vulnerable dependencies.



After pushing the fixed version, the pipeline passes successfully.



\## Conclusion

This project demonstrates how DevSecOps integrates security into the software development lifecycle by automatically detecting insecure changes before deployment.

