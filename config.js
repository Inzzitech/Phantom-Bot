const identity = require("./lib/identity");

module.exports = {
  
  BOT_NAME: identity.BOT_NAME,
  BOT_VERSION: identity.BOT_VERSION,
  OWNER_NUMBER: identity.OWNER_NUMBER,
  CHANNEL_LINK: identity.CHANNEL_LINK,
  MENU_IMAGE_URL: identity.MENU_IMAGE_URL,

  
  PREFIX: process.env.PREFIX || "!",

  //paste your session id here if not the bot wont work
  SESSION_ID: process.env.SESSION_ID || "",

  // paste your api keys here for the ai to work
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || "",
  GEMINI_MODEL: process.env.GEMINI_MODEL || "gemini-2.0-flash",
  GROK_API_KEY: process.env.GROK_API_KEY || "",
  GROK_MODEL: process.env.GROK_MODEL || "grok-3-mini-fast",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  OPENAI_MODEL: process.env.OPENAI_MODEL || "gpt-4o-mini",
  CLAUDE_API_KEY: process.env.CLAUDE_API_KEY || "",
  CLAUDE_MODEL: process.env.CLAUDE_MODEL || "claude-sonnet-4-20250514",
  PERPLEXITY_API_KEY: process.env.PERPLEXITY_API_KEY || "",
  PERPLEXITY_MODEL: process.env.PERPLEXITY_MODEL || "sonar",
  DEEPSEEK_API_KEY: process.env.DEEPSEEK_API_KEY || "",
  DEEPSEEK_MODEL: process.env.DEEPSEEK_MODEL || "deepseek-chat",
  TOGETHER_API_KEY: process.env.TOGETHER_API_KEY || "",
  LLAMA_MODEL: process.env.LLAMA_MODEL || "meta-llama/Llama-3.3-70B-Instruct-Turbo",
  MISTRAL_API_KEY: process.env.MISTRAL_API_KEY || "",
  MIXTRAL_MODEL: process.env.MIXTRAL_MODEL || "mistral-large-latest",
  REMOVEBG_API_KEY: process.env.REMOVEBG_API_KEY || "",

 
  AUTO_READ: process.env.AUTO_READ === "true" || false,
  AUTO_TYPING: process.env.AUTO_TYPING === "true" || false,
  AUTO_RECONNECT: process.env.AUTO_RECONNECT !== "false", // true by default

 
  SESSION_DIR: "./sessions",
};