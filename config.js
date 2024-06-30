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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_13_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA2NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzksXG4gICAgICAgIDY1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzLFxuICAgICAgICA3NixcbiAgICAgICAgMjQ1LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzLFxuICAgICAgICAzMixcbiAgICAgICAgNzIsXG4gICAgICAgIDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDk4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTYyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDg4LFxuICAgICAgICA5MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIwLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxODgsXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNSxcbiAgICAgICAgMTY1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjQsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQyLFxuICAgICAgICA2MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAzNixcbiAgICAgICAgMjIwLFxuICAgICAgICA4NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOCxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQwLFxuICAgICAgICA2LFxuICAgICAgICA3NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxLFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjUzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDc4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjUwLFxuICAgICAgICA5MixcbiAgICAgICAgMjAyLFxuICAgICAgICAyNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjksXG4gICAgICAgIDQxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwLFxuICAgICAgICA4NixcbiAgICAgICAgNTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODMsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJRVG56NjFhUzhWUjV3bUZYek9sRkVydGMzV2syS3hyN2lyNzBGcXhqeTZZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJZZTVQczZDeVJGU1NCQUI2blZuWG1BXCIsXG4gIFwicGhvbmVJZFwiOiBcImZjYzYxMjA3LWJjZjktNGUwYy1iZDQzLTMzOGZjOTdkYmE4OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMyxcbiAgICAgIDIyMSxcbiAgICAgIDE3LFxuICAgICAgMjEyLFxuICAgICAgMTIxLFxuICAgICAgMTQxLFxuICAgICAgODgsXG4gICAgICAyMDksXG4gICAgICA5NyxcbiAgICAgIDIyNCxcbiAgICAgIDIzNSxcbiAgICAgIDMsXG4gICAgICA0OCxcbiAgICAgIDYyLFxuICAgICAgMjI0LFxuICAgICAgMTA1LFxuICAgICAgMTk2LFxuICAgICAgNzcsXG4gICAgICAxMDMsXG4gICAgICAxNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUsXG4gICAgICAxMDYsXG4gICAgICAyNSxcbiAgICAgIDIxNixcbiAgICAgIDE5MCxcbiAgICAgIDczLFxuICAgICAgMTEzLFxuICAgICAgNDgsXG4gICAgICAyMDQsXG4gICAgICAzMSxcbiAgICAgIDExNixcbiAgICAgIDI3LFxuICAgICAgNTgsXG4gICAgICAyMCxcbiAgICAgIDIxNCxcbiAgICAgIDU4LFxuICAgICAgMTgzLFxuICAgICAgMTg1LFxuICAgICAgMTE3LFxuICAgICAgMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUVkyTExQTEdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyMTc3MjQzMDYyMDo2OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTc5MTg3Mzc4MDk2Mzc6NjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTzdiNnFVSEVKNmtoclFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ4Ulh3dkVneDdKUTVSd0M5c2s1VmJXbVNwbUs1ZUE5RHZja2FJSnFOc1ZJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk5KSzMvL1dQR0NJQzRnZUlqczl0cFd0RnRrNWZvby9tUElZNkQvd0ZqSTRadktrMFFMY3NhRzFDaGR1VkJNL3ZBN1Y3c2R4Tko0Q01KVFRKRTl1R0R3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImxYZXNhOHY3UG5sUnYxQ3pVa2YraHlCUGExT0MxUUdUTkRxYWVLRFUvYVJ5clh1d2VPcFc3a1AzdnVNV1YvNG1iS3dTYUY0V2ZMdTlzNHJhQllKSkJ3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyMTc3MjQzMDYyMDo2OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTc2NzU4NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9MZ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT0xnLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
