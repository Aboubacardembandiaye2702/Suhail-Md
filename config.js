const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_09_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyLFxuICAgICAgICAxMjksXG4gICAgICAgIDk2LFxuICAgICAgICAxOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTM5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjEwLFxuICAgICAgICA1OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU3LFxuICAgICAgICAxODksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE1LFxuICAgICAgICA4MixcbiAgICAgICAgMTg5LFxuICAgICAgICAzNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE3LFxuICAgICAgICA4MixcbiAgICAgICAgMjksXG4gICAgICAgIDE2MixcbiAgICAgICAgNCxcbiAgICAgICAgMjMwLFxuICAgICAgICA1NixcbiAgICAgICAgMixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUzLFxuICAgICAgICA5MCxcbiAgICAgICAgNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgOTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAzMSxcbiAgICAgICAgOTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDUyLFxuICAgICAgICA1NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNixcbiAgICAgICAgNjEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIzNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTEyLFxuICAgICAgICA0NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDY1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTUyLFxuICAgICAgICA0NSxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI2LFxuICAgICAgICA0MCxcbiAgICAgICAgMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDYyLFxuICAgICAgICA1MixcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDkyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAzNCxcbiAgICAgICAgMzksXG4gICAgICAgIDIyNixcbiAgICAgICAgNzksXG4gICAgICAgIDE1NixcbiAgICAgICAgOTgsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQsXG4gICAgICAgIDU1LFxuICAgICAgICAzOCxcbiAgICAgICAgODUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE4NCxcbiAgICAgICAgODMsXG4gICAgICAgIDE3LFxuICAgICAgICA0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUzLFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDU2LFxuICAgICAgICA4MixcbiAgICAgICAgNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjksXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDU5LFxuICAgICAgICAyMixcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOXlXU1JNYWZyZHNmZFc5cVVFMzFCMjRMSnlYTEdxQUZOOEprSlhQUXMydz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiY2JJN1dPSDZTMS1ZN2x4Tm1Qd284UVwiLFxuICBcInBob25lSWRcIjogXCJhMGYyOTQ4Yy1lNDEyLTQ0ZjQtODI3Mi0yMmQwNzM0Zjg5OWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTgsXG4gICAgICA0MCxcbiAgICAgIDIyNixcbiAgICAgIDI1MyxcbiAgICAgIDE1MixcbiAgICAgIDIwMCxcbiAgICAgIDI0MixcbiAgICAgIDE3NixcbiAgICAgIDU0LFxuICAgICAgMTEzLFxuICAgICAgMTY2LFxuICAgICAgMjUzLFxuICAgICAgMjU1LFxuICAgICAgMTYsXG4gICAgICAxOSxcbiAgICAgIDE1LFxuICAgICAgODYsXG4gICAgICAxMjUsXG4gICAgICAxMTUsXG4gICAgICAyMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDAsXG4gICAgICA0LFxuICAgICAgNjIsXG4gICAgICAxMTksXG4gICAgICAxNDEsXG4gICAgICAyMTAsXG4gICAgICAxNjEsXG4gICAgICAyMjAsXG4gICAgICAyMjEsXG4gICAgICAxNDYsXG4gICAgICAzMCxcbiAgICAgIDE5MSxcbiAgICAgIDE4MixcbiAgICAgIDIyMixcbiAgICAgIDkwLFxuICAgICAgMzYsXG4gICAgICAxNjEsXG4gICAgICAxMDAsXG4gICAgICAxMzgsXG4gICAgICAyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMOEZBTFM2S1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjIxNzcyNDMwNjIwOjcwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzkxODczNzgwOTYzNzo3MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQRGI2cVVIRUtydWpMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInhSWHd2RWd4N0pRNVJ3QzlzazVWYldtU3BtSzVlQTlEdmNrYUlKcU5zVkk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZ05kRXhQUFJtQWRaK2JkMFpBQXYwK2VuenRnbVcwbDNEMWMrdllNcDh1UWlnM1dRR1hlVW5QMFo4aGlCVmwzZTZhQVpJV21FTlRubWZpVFZLUlJLQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNGZsZDIyMndyeXN1cjBYSEpWUDVZNllFY1lyVEpldllmSnArOE5sTE1COWdMRjhVZ1FJK0ZNYjNuQW03a0dudzRhTWkzbWM2MjM1a2h3WGRIdnZ0RGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjIxNzcyNDMwNjIwOjcwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5ODc1Mzc0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT0xnXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPTGcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1Rlcyc2Zzd2FBSXVHWnZnMjVwMitpcnczL2c1c3o4WVhLcHVlRE9FclpZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5NTgzOTEyNzcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "-",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "❄️☠️ꪖ᥇ꪮꪊ᥇ꪖᥴꪖ𝘳☠️❄️♻️",
  packname: process.env.PACK_NAME || "fatalityy",
  botname : process.env.BOT_NAME  || "❄️☠️ꪖ᥇ꪮꪊ᥇ꪖᥴꪖ𝘳☠️❄️♻️",
  ownername:process.env.OWNER_NAME|| "❄️☠️ꪖ᥇ꪮꪊ᥇ꪖᥴꪖ𝘳☠️❄️♻️",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "9RieTAqiZ36n6dZZbgjQjwBb",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-2q3hXQfWGFHCL1cVhP36T3BlbkFJUtdSoOs41n0eH4PRXDN4",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "2c6bd6a08c073ac14edbe788f6167b36";
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
