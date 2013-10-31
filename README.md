realtimepoll
============

A simple web real-time polling component. This is an incomplete project.

## Things to be done
- Ensure that each user only votes once. Maybe by email validation

## Installation

You need [nodejs](http://nodejs.org) (version 0.8).

The easiest way is to install [deployd](http://deployd.com) by:
	npm install deployd -d

## Running
Download the project, go to the directory and run:
	dpd

Launch the deployd dashboard
	dpd> dashboard

You need to add an admin user manually, by going to the Menu on the left Users->Data and inserting a row with the login, password, true (the true means "is admin")

Deployd should be running and listening on port 2403, so you can go to (http://localhost:2403) to see the app. The main page is for voting. There you will find two links for administrator (login needed) and for statistics.

## Real time
Launch as many browsers as you want: poll administration, several screens for voting and for the poll statistics. Try to add/modify questions or voting while seeing statistics or similar :-)
	
