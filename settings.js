export const settings = {
    // Bot Configuration
    botName: 'yourhïghness',
    version: '1.0',
    prefix: '.',

    // Owner Configuration
    ownerNumber: '2349133507428@s.whatsapp.net', // Replace with actual owner number
    ownerNumbers: ['2349013531862@s.whatsapp.net'], // Multiple owner numbers for recognition

    // Session Configuration (Manual Session)
    // To change session: Replace the base64 string below with your new session data
    sessionBase64: "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0lDWFdXSElRWVhGYkhpdHFUMWwvYzNIUnVaUVUxem9ld1ZSNTdmRXNrYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaG1WMmNGbzZBMVFHUHFxUTFmbXN1c0xSQm0wQ29NK3lXV3hBdkx1c0Z6bz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjRXpEdGNiY2FtTFdGa3ltVVp2YnNTR3oxVGJKNjJ0Q2xnM1UzY1VXT0Y0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwcHRuSDJhb0NSOWZoRG8wRkFwQU1BUWpZZG5kWGJQcTE3WlkvNWJMRWdNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldCYVlPMzU5NksyZlpQUXZPRkxiZ1M5WGdMdUdpUFdNQVhNNWpXcUdUVWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRwTjlyTVBRckdqV0htVzhwVTZGZmtTOHovTXVpdTArVTZ4MEFrakJYV3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEVEVm9obHgwY2JieTlYdDNYZGxUOExaLzZ6Ykx4WDJBaEsyMkR2enhrdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOG9VNUFZK3hOTVR0RFNlazhGYW1IOFBndkZoT0R2Z0Q3YlpBbE03d0pIST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklvWlZIL1plSVZaaWVPLzhiSFNwNlVuSVUyR0ZOWDQrNlpNUksrUGdjd1VJRlFRQ0VPTVl0UXQ1N3l2TDRSOC9yMXhNbmRXWmRXa1BiUXZsMFk1Mmd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQsImFkdlNlY3JldEtleSI6IlhhVnllUzV1RXBGVlY1N09yTkxTaStwTHExSTJHeURhbmtndC8vdVUxajQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTEzMzUwNzQyOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDNzMzMUE5MTNBNDlCNkRCRjQ1NTUzQTE2RDgyRjE2RSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUyNTczMTMxfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ5MTMzNTA3NDI4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkRBMEVERDQ3MTE3MkJDMUNFMEM1NEFGM0M2NDU1RUI1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTI1NzMxNDN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IllEMkRKRFk4IiwibWUiOnsiaWQiOiIyMzQ5MTMzNTA3NDI4OjFAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxNDI2ODQ2ODU4ODc4ODoxQGxpZCIsIm5hbWUiOiJMYWR5IFRhbWF5byDwn6W58J+rpvCfmIcifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BpZi9LUUJFS3JKMk1NR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ilh0TnFNdDM5eGgrS3JYQlAzTUlzQ2REZSsyM3NqZm80UzFFNkxBSXRmMUE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkkrekpzdjVRSlNrbUUrSlRxNlRHUkN0S0tUdG5PZkVoMGg2RXQxWFdvMitZY1h6U012WVBPQTBNTGJlVnBPa29XNWs0TzRDWWZUb21mMEd1RERjR0N3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiI4WUNPUGg2K09YTkR5TWFqMUNQMnFTNEVVMzY0cWwrd2ZrRWdzOGlYWWV6bDNubmpuS2tacDBSNjBSOW9pMk8yRE0yVzZYNlBzYTVoZytPOW5RS3ZoUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxMzM1MDc0Mjg6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWN1RhakxkL2NZZmlxMXdUOXpDTEFuUTN2dHQ3STM2T0V0Uk9pd0NMWDlRIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTI1NzMxMTIsImxhc3RQcm9wSGFzaCI6IjNnUFVKayIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTWdrIn0=",  //get from the link in the README.md

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
