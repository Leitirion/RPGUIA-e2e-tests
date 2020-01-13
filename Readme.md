### Cypress UI automation project with CircleCI and Telegram notifications
[![CircleCI](https://circleci.com/gh/Leitirion/My_ui_automation.svg?style=svg)](https://circleci.com/gh/Leitirion/My_ui_automation)

### Table of Contents

- Maintainers:

  [github.com/mikementor](https://github.com/mikementor)

  	
		
  [github.com/leitirion](https://github.com/leitirion)
	 
- Installation
- Running (locally / CI)
- Examples/How to write tests

### Installation
 1. Fork current repository
 2. Go to ```https://circleci.com/add-projects/gh/<YOURUSERNAME>``` or 
https://circleci.com/dashboard -> add projects -> set up project (choose the fork)and click  'Start building'
 3. Clone repository with command ```git clone https://github.com/<YOUR_USER_NAME>/My-ui-automation.git```
 4. ```cd My-ui-automation```
 5. ```npm i```
 6. Go to https://t.me/botfather , create new bot by /newbot command, remember TELEGRAM_BOT_TOKEN
 7. Add bot to your group or start chat with bot 
 8. Go to ```https://api.telegram.org/bot<TELEGRAM_BOT_TOKEN>/getUpdates``` to get chatId and copy chatId with ```-```
 9. At ```Circleci > Settings  > Contexts (https://circleci.com/gh/organizations/<YOUR_USER_NAME>/settings#contexts)``` create context ```rpguia``` (If you want to change name of context, then also change name at ```.circleci/config.yml ```)
 10. At ```Circleci > Settings > Contexts (https://circleci.com/gh/organizations/<YOUR_USER_NAME>/settings#contexts)``` create environment variables: 
 - TELEGRAM_CHAT_ID from  step (7)
 - CYPRESS_URL(NOT NEED)
 - TELEGRAM_BOT_TOKEN from step (5)
 - NODE_ENV with value ```production```

###  Running (locally / CI)
1. Create file ```cypress.env.json``` in root folder.
2. Run test on your local machine with command: ```npm run cy:run```
3. If test succeed, then add all your changes, commit them and push to your repository on github.


### Examples/How to write tests
TBD
 
