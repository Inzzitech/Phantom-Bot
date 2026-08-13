const config = require("./config");
const { startBot } = require("./lib/connect");
const { decodeSession } = require("./lib/sessionExport");
const fs = require("fs");
const path = require("path");
const http = require("http");

// Port binding for Web Services (Render, Railway, Koyeb, Heroku)
const PORT = process.env.PORT || process.env.SERVER_PORT;
if (PORT) {
  const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "online", bot: config.BOT_NAME, version: config.BOT_VERSION }));
  });
  server.listen(PORT, () => {
    console.log(`[Web] Health check server listening on port ${PORT}`);
  });
}


console.log(`
 ██████╗ ██╗  ██╗ █████╗ ███╗   ██╗████████╗ ██████╗ ███╗   ███╗
 ██╔══██╗██║  ██║██╔══██╗████╗  ██║╚══██╔══╝██╔═══██╗████╗ ████║
 ██████╔╝███████║███████║██╔██╗ ██║   ██║   ██║   ██║██╔████╔██║
 ██╔═══╝ ██╔══██║██╔══██║██║╚██╗██║   ██║   ██║   ██║██║╚██╔╝██║
 ██║     ██║  ██║██║  ██║██║ ╚████║   ██║   ╚██████╔╝██║ ╚═╝ ██║
 ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝    ╚═════╝ ╚═╝     ╚═╝
                    B O T   v${config.BOT_VERSION}
`);

async function main() {
  try {
    console.log(`[Main] Starting ${config.BOT_NAME}...`);

    const credsPath = path.resolve(config.SESSION_DIR, "creds.json");

    // If SESSION_ID is set in config, decode and update creds.json
    if (config.SESSION_ID && config.SESSION_ID.trim().length > 0) {
      console.log("[Main] Decoding SESSION_ID from config.js...");
      const decoded = decodeSession(config.SESSION_ID.trim());
      if (decoded) {
        console.log("[Main] Session successfully restored from SESSION_ID.");
      } else {
        console.warn("[Main] Could not decode SESSION_ID. Checking existing session files...");
      }
    } else if (fs.existsSync(credsPath)) {
      console.log("[Main] Found existing session files in sessions/ folder.");
    } else {
      console.log("[Main] No session found and no SESSION_ID provided in config.js.");
      console.log("[Main] Please use the web pairing portal to generate a SESSION_ID.");
      console.log("[Main] Then paste it into config.js and restart the bot.");
      return;
    }

    if (fs.existsSync(credsPath)) {
      console.log("[Main] Credentials ready. Connecting bot...");
      await startBot();
    } else {
      console.log("[Main] No valid credentials found. Check your SESSION_ID in config.js.");
    }
  } catch (err) {
    console.error("[Main] Fatal error:", err);
    process.exit(1);
  }
}


process.on("uncaughtException", (err) => {
  console.error("[Main] Uncaught Exception:", err.message);
});

process.on("unhandledRejection", (reason) => {
  console.error("[Main] Unhandled Rejection:", reason);
});


main();
