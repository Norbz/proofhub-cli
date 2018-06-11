# proofhub-cli
An unofficial CLI wrapper for the proofhub API (v3) written in NodeJS.

> *This package is still under development phase, please do not use right now.*

## Disclaimer
- I am not associated with ProofHub in any way.
- I am building this tool in order to automate some delivery using CI / CD system, such as automatic package upload, delivery note creation, task completion and so on.
- For now, I do not intend to get a fully functionnal library associated with the CLI. The CLI may actually not cover the whole proofhub API before some time as it is mostly targetted at my needs right now.
- If the guys behind Proofhub wants to help me, they are more than welcome.
- If the guys behind Proofhub wants me to remove or rename this package for any reason, please just email me throught my Github Account.
- Use at your own risk.

## Why building a proofhub CLI ?
This is mostly aimed at CI tools or local development tools. This CLI wont help you much building a dashboard of your project, the main purpose is to upload stuff and create some delivery notes on a project.

Here is some sample scenarios of how I am using it :
- Post a note in the "release" notebook with the number version and content of the changelog.md file
- Upload a zipped package to PH when some code has been delivered to the master branch. Usefull for project that are then delivered to a client, such as emailing templates, display banners...
- Automatically close tasks/ticket base on commit content (OK I still need to work on this one...)
