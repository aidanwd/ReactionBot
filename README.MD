# Emoji React Bot
[![GitHub release](https://img.shields.io/github/v/release/aidanwd/ReactionBot)](https://github.com/aidanwd/ReactionBot/releases/)

A free open source [***discord.js***](https://discord.js.org/#/) reaction bot!

## Prerequisites

The Emoji Reaction Bot requires [Node.js](https://nodejs.org/) v4+ to run.

## Setup
- Download and Extract or Clone the repository the latest github release [here!](https://github.com/aidanwd/ReactionBot/archive/master.zip)
- Configure the bot by opening the config.json file in an editor of your choice. ***READ BELOW***

## Configuration
###### Don't forget to use the correct json syntax!
### Token
Modify the `token` entry to the token of your bot/selfbot
##### Example:
```json
"token": "NjAedsFDg1OTCWMfhFSDQ2.Xd3gWg.R0mdaI7fuYX2f7PgOsfhgdahfkc"
```

### Emoji
 If you wish to change the emoji you can edit the `emoji` entry to any unicode emoji or custom emoji discord supports.
##### Example 1 (Unicode)
```json
"emoji": "🤡"
```
##### Example 2 (Custom Emoji using ID)
```json
"emoji": "726270267378368593"
```

### Delay
The delay entry is used for the time *(in milliseconds)* to wait before the next reaction
##### Example
```json
"delay": 400
```
### Channel (Optional)
If you want to make the reaction bot channel specific then edit the `channel` entry to the id of the discord channel you wish to target. ***Applys to all channels by default***
##### Example
```json
"channel": 720945410238613699
```
### Autoremove (Optional)
This boolean entry can be used to specify if the reaction bot should delete the reaction after a short delay. ***False by default***
##### Example
```json
"autoremove": true
```
## Start
 To start the bot you can either double click on **run.bat** or run via the command line using:
 ```shell
 $ npm .
 ```

###### Created by Aidan#1337