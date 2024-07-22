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




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_29_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjE1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzksXG4gICAgICAgIDIxNixcbiAgICAgICAgMzgsXG4gICAgICAgIDE2LFxuICAgICAgICA0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTEwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDc5LFxuICAgICAgICAxMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzcsXG4gICAgICAgIDE2LFxuICAgICAgICAzOSxcbiAgICAgICAgMzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTgzLFxuICAgICAgICA0NyxcbiAgICAgICAgOTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjAzLFxuICAgICAgICA1NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDg0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAzMCxcbiAgICAgICAgODMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjU0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTAzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjA0LFxuICAgICAgICA5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDQyLFxuICAgICAgICA3MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOSxcbiAgICAgICAgNzksXG4gICAgICAgIDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODYsXG4gICAgICAgIDUyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTEwLFxuICAgICAgICA0NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDczLFxuICAgICAgICA5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODgsXG4gICAgICAgIDcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDk5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDQzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDUyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDc2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTYwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTIzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTY2LFxuICAgICAgICA1OCxcbiAgICAgICAgMzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgODgsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjEyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODQsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTMzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODUsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDYzLFxuICAgICAgICA5MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieDY1L3A2RXN4WVB0aWN0VGh1T3pMYmtSZExSUGxZYjBBVGFJNkJtRVcvST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQUV3d0dwS25RRmljS1lKSXZKSjlvUVwiLFxuICBcInBob25lSWRcIjogXCJjZTgyODUyNS1jZjU3LTQ3NmItODhlMy1hMTZhZjNkNzMzN2VcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg1LFxuICAgICAgMjE5LFxuICAgICAgMjQzLFxuICAgICAgMjgsXG4gICAgICAxNDMsXG4gICAgICAxMjksXG4gICAgICAyMDgsXG4gICAgICAxNSxcbiAgICAgIDIyMixcbiAgICAgIDIwMCxcbiAgICAgIDEwMyxcbiAgICAgIDIwMSxcbiAgICAgIDE1NixcbiAgICAgIDI4LFxuICAgICAgMjQ4LFxuICAgICAgMjA4LFxuICAgICAgMjM2LFxuICAgICAgMTczLFxuICAgICAgMjE3LFxuICAgICAgMTIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MCxcbiAgICAgIDE4MixcbiAgICAgIDIzMSxcbiAgICAgIDYsXG4gICAgICAyMDYsXG4gICAgICAxMDgsXG4gICAgICA2OCxcbiAgICAgIDE4LFxuICAgICAgMTUwLFxuICAgICAgMixcbiAgICAgIDEwNSxcbiAgICAgIDI1MSxcbiAgICAgIDE2NixcbiAgICAgIDE4MyxcbiAgICAgIDk0LFxuICAgICAgMjA4LFxuICAgICAgMTY3LFxuICAgICAgMTYzLFxuICAgICAgMjAwLFxuICAgICAgMTA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBIMzg4NExNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU3Nzc5MDE4MzA6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJFPU1DwrJcIixcbiAgICBcImxpZFwiOiBcIjE4MjM2ODYwNjQwMDU3NjoxMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJWFY3N3NHRU5iTStMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIml1MTZoMjVGZG0vWW9ZUFowb203OU8xRStkQ1BQaklrSGZyNEZJcERrMzA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSlluci9QeWh1VWMxdlM4VHVNY2ZWNmN2N0pOb3pqdzNScG5JZDRZTS9IMWJHT3hnamp2RHhBdDNVTDVhU2JWUUFmMUhqcmxVRkxlVng0aVArQldKQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWkN6ekxMUzhUNzhMdVU5a2pQd3VhanQ1cUVpQkFhZW1jZnp0VTNTRUVKWWpHQ242cFgxOEsySkVMd3dWSnROa2pUUlp3Zkd4dTBSYXdJNWpISjJjRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1Nzc3OTAxODMwOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTY0MDUzOFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
