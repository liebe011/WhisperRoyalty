export const settings = {
    // Bot Configuration
    botName: 'yourhïghness',
    version: '1.0',
    prefix: '.',

    // Owner Configuration
    ownerNumber: '2349013531862@s.whatsapp.net', // Replace with actual owner number
    ownerNumbers: ['2349013531862@s.whatsapp.net'], // Multiple owner numbers for recognition

    // Session Configuration (Manual Session)
    // To change session: Replace the base64 string below with your new session data
    sessionBase64: "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUdROEdQQktoMVRWZzY5Ni9UdERSZGdLMDlTVVJIb0JMR254WElHK3NWbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1FtN2lpOVRkYkdqYmV5cXJuSDlxZzVFYnovYW9GZlo4QlE3VzlDTERRMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpSU9rSC9uMlM2WkUvM1dqcWpUZzI2VHdnQ1QxN3VLSXRYaERxaVJhR2tRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHdGZUamY5VWh0R2JhVkgxMmFtUlU5V2djcExreDdwSEhoa3lQYzBxWHhjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldKbDFqdFpyMDFYYlpoSmlsc1pXS0dBeHd0Q05za0JZckpOM3UwWjJBV0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBqTFFwRlVvMGxJT2srYTUxcktTbmNJNCtqcXRDUUFKVjdsVk5HM01peUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU1HWWtSSC8zRGNaL2dxYVRERytxQlg4Z0F6cHA5bzEwc2o5dmY0S2pIcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaW8yMFFNWTJlWERtb05nWlk5SlNtUzU5WmE0end1RTVXUmNjVUp3R0lYaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFwRVdtN0s0SEhvaUd1ZTVGNzZBV2xqaWloVE9ZVTIzRmRVS2VpSWc4WmwrMGhhYlVJNUFDQUloaHg2V3pTa2lWdzU1dzJTaWlNU242bHh6L0g5NUNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OCwiYWR2U2VjcmV0S2V5IjoiMG5nY1VMRTdoMUJKOW9FaXlnM2pJbVpDZ1NESEhYRGZUNndCL29GMlE4WT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ5MDEzNTMxODYyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjY0NzY4RDYxMkZEQ0QwQTZEQzgyMjZCMDVBREFFRTAwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTI1MDUxNzZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwMTM1MzE4NjJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQjkwMUExN0UyMkFEMTMwM0EyRkFDOUFBMkY4Njk0RDAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MjUwNTE3OX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiN0tMRThDSkMiLCJtZSI6eyJpZCI6IjIzNDkwMTM1MzE4NjI6MTVAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyNjIyMjU1NzA4MjQyMzE6MTVAbGlkIiwibmFtZSI6InxUcmF2aXPCueKIhcK54oSifPCfkoAifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ091R2hDNFF3TGJVd3dZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IldNRHNzdDRxZWRGbnJ2NExnSUQzMmZPcUlFREoxR1prSk5mN0JvQWlUZzQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6InlVZ0U0aXRZMWdseDFMY3JLc1Z3UjdlSWNrYm5aV2RQUHBHVGRDWWd6aVlPNG15Z0hJV1JpVkNkZ3Z6R213bm9LUW5SbUc5OXBSeHBkQWZyVnExWUJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ4MSt3Nlp3N2kzdmlOcFBFK094Q2RLUkhINHYrMytGQ3FWZnhMOFBjZ1lBT2pRdTF3dnk3VEtYTnNLMkNSUlBRN01wNzlsTDB0Y2lkNzJFYkxRSkRCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwMTM1MzE4NjI6MTVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVmpBN0xMZUtublJaNjcrQzRDQTk5bnpxaUJBeWRSbVpDVFgrd2FBSWs0TyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUyNTA1MTY2LCJsYXN0UHJvcEhhc2giOiIzZ1BVSmsiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdpTiJ9",  //get from the link in the README.md

    // API Keys
    geminiApiKey: process.env.GEMINI_API_KEY || 'AIzaSyArdMt3se0P2U5PCWjprpBZlzGZ2bHJklg',
    youtubeApiKey: process.env.YOUTUBE_API_KEY || 'AIzaSyBvVo--Jslb084-F8ATSWgsgqOl2JVh660',
    geniusApiKey: "NrGLCWeRCNlny8qtUzXhxalvAwWWjcjWdwyCe3aUrXJZLlzs3lwSd5ddu_Iy3q5O", // Get from https://genius.com/api-clients
    openaiApiKey: "", // Get from https://platform.openai.com/account/api-keys
    truecallerId: 'a1i0x--L2j_d8lF4BTFZ7e3p0t',
    truecallerId: process.env.TRUECALLER_ID || '',

    // Profile Pictures
    profilePics: [
        'https://files.catbox.moe/mq8b1n.png',
        'https://files.catbox.moe/dm7w9d.jpeg',
        'https://files.catbox.moe/0j5tnz.jpeg',
        'https://files.catbox.moe/b7wnah.jpeg',
        'https://files.catbox.moe/oo7yfn.jpeg',
        'https://files.catbox.moe/57l61y.jpeg',
        'https://files.catbox.moe/q64syc.jpeg'
    ],

    // Anti-spam settings
    antiSpam: {
        enabled: false,
        maxMessages: 5,
        timeWindow: 60000, // 1 minute
        cooldownTime: 30000 // 30 seconds
    }
};
