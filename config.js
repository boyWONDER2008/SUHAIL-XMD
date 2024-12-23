const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_08_12_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDcyLFxuICAgICAgICA1LFxuICAgICAgICA3NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDc3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNixcbiAgICAgICAgNTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQsXG4gICAgICAgIDg0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjEyLFxuICAgICAgICA4MCxcbiAgICAgICAgNixcbiAgICAgICAgMjUxLFxuICAgICAgICAzOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDYwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDksXG4gICAgICAgIDczLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjksXG4gICAgICAgIDEwLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA0NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgODEsXG4gICAgICAgIDE0LFxuICAgICAgICA2MixcbiAgICAgICAgNzksXG4gICAgICAgIDc1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTg1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjA3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODAsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTAwLFxuICAgICAgICA2NCxcbiAgICAgICAgMzksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDgxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDgzLFxuICAgICAgICAxODUsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgNDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkxLFxuICAgICAgICA1MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDg2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzksXG4gICAgICAgIDIzNixcbiAgICAgICAgOTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDY0LFxuICAgICAgICA4MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM1LFxuICAgICAgICA5NixcbiAgICAgICAgODcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjEyLFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTExLFxuICAgICAgICAxMjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDc5LFxuICAgICAgICA1NyxcbiAgICAgICAgNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODUsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDksXG4gICAgICAgIDIwLFxuICAgICAgICA3OCxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDY3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTU3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTE4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODcsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI2LFxuICAgICAgICA3MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWGdpeEdOUVcwaXR2WFNrTjV5N0Q0eWlVM0MyOTYreTh2aXBPSnBBVG91ST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVzVGelN6UzNRWldUaEJjUFl5TFAzZ1wiLFxuICBcInBob25lSWRcIjogXCI1OWJmMTk5Mi0yZDYyLTRhOGQtYmEzZi0wM2M1OGMxYzdlNmJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEyLFxuICAgICAgODQsXG4gICAgICAyMTYsXG4gICAgICAxNzYsXG4gICAgICAxMzgsXG4gICAgICAyMzMsXG4gICAgICA4MyxcbiAgICAgIDcsXG4gICAgICAxOTQsXG4gICAgICAyNDgsXG4gICAgICA0MixcbiAgICAgIDI0MSxcbiAgICAgIDEzNCxcbiAgICAgIDc5LFxuICAgICAgMjQ2LFxuICAgICAgOTcsXG4gICAgICAxNjksXG4gICAgICA4OCxcbiAgICAgIDU5LFxuICAgICAgMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM0LFxuICAgICAgMTAsXG4gICAgICAxODIsXG4gICAgICA5NyxcbiAgICAgIDIxOCxcbiAgICAgIDg3LFxuICAgICAgMzcsXG4gICAgICAxNjUsXG4gICAgICAxNyxcbiAgICAgIDMyLFxuICAgICAgNTEsXG4gICAgICAyMjAsXG4gICAgICAyNTAsXG4gICAgICAxNjUsXG4gICAgICA5MixcbiAgICAgIDQyLFxuICAgICAgMTQyLFxuICAgICAgMTAzLFxuICAgICAgMjAxLFxuICAgICAgODFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNkRSMUVFV1RcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjg1NjMwOTY6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0NzY3ODU5MTczMzgzNzoxOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOL0ZySllERUlYcXByc0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlZJekZTUm9veXAya1JyTkpITWxuSnNycWhhYy9kZ2F3ZUJaUlVxSk5EZ1U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTHQwRklVVnBhTE1FNzduSFl5YVZKWGYva0ZkMmlQRXI5SGpsQUlSZDRmY2VlQ0xqbTBhdDBnU1JLdzN2enJicURkbjhKS0hWOVhlekNTUW9YR1RERFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVXBqMHhYSEpHZWtVNkV3MVV5QlcxcE94b25EdkJZQkMvZVl3RjdBQ0t5aitGVGt4T0MrRUhZdWZLa3VwWHpHWkZtUWFWMlZnVlVKUUJlNms3dE9SQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2ODU2MzA5NjoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDk4MDg3NFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
