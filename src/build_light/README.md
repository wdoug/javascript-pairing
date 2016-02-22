# Build Light

Write an algorithm that examines an array of "builds" and determines the amount of time
that has passed since the build "went green". If the build is currently red, your algorithm
should say so.

* A build has a name, a start date/time, a duration in seconds, and a status (either 'PASS' or 'FAIL').
* The build goes green when each build's latest run is passing.

Example 1
```javascript
const builds = [{name: 'Build A', start: new Date(/* 10 minutes ago */), duration: 5, status: 'PASS'},
{name: 'Build B', start: new Date(/* 15 minutes ago */), duration: 5, status: 'FAIL'},
{name: 'Build B', start: new Date(/* 20 minutes ago */), duration: 5, status: 'PASS'}]

// The build is currently red because the most recent run of 'Build B' is red.
```

Example 2
```javascript
const builds = [{name: 'Build A', start: new Date(/* 20 minutes ago */), duration: 5, status: 'PASS'},
{name: 'Build B', start: new Date(/* 15 minutes ago */), duration: 5, status: 'PASS'},
{name: 'Build B', start: new Date(/* 20 minutes ago */), duration: 5, status: 'FAIL'}]

// This example went green 14 minutes and 55 seconds ago because that's when the most recent build that turned the light green ended.
```

Bonuses:

* Dependent builds. If Build A depends on Build B and has a `status` of `PASS`, it should be updated to have a `status` of `FAIL`.
```javascript
const builds = [{name: 'Build A', start: new Date(/* 10 minutes ago */), duration: 5, status: 'PASS', buildChildren: [ 'Build B' ]},
{name: 'Build B', start: new Date(/* 15 minutes ago */), duration: 5, status: 'FAIL'},
{name: 'Build B', start: new Date(/* 20 minutes ago */), duration: 5, status: 'PASS'}]

// Build A should be marked as a FAIL
```
* Amount of time since last passed when status is FAIL or PASS.
