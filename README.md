<p align="center">
  <img src="https://img.shields.io/badge/⚡_PHANTOM_BOT-v3.0.0-blueviolet?style=for-the-badge&labelColor=0d1117" alt="Phantom Bot"/>
</p>

<p align="center">
  <b>A powerful WhatsApp bot with 493+ commands</b><br/>
  <i>AI • Football • Games • Economy • Islamic • Downloads • Converter Suite • Group Management</i>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Commands-493+-blue?style=flat-square" alt="Commands"/>
  <img src="https://img.shields.io/badge/Node.js-18+-green?style=flat-square&logo=node.js" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Baileys-7.0.0--rc13-orange?style=flat-square" alt="Baileys"/>
  <img src="https://img.shields.io/badge/License-No_Selling-red?style=flat-square" alt="License"/>
</p>

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Configure
#    - Get SESSION_ID from the pairing portal
#    - Copy .env.example to .env and add your API keys (see table below)

# 3. Start
npm start
```

> **Pairing Portal:** [phantom-session-web.onrender.com](https://phantom-session-web.onrender.com)

---

## ⚙️ Configuration

Edit `.env` (or `config.js`) to customize your bot:

### 🔑 Session & Core

| Setting | Description | Required |
|---|---|---|
| `SESSION_ID` | Session token from pairing portal | ✅ |
| `OWNER_NUMBER` | Override bot owner phone number | ❌ |
| `PREFIX` | Command prefix (default: `!`) | ❌ |
| `AUTO_READ` | Auto-read incoming messages | ❌ |
| `AUTO_TYPING` | Show typing indicator | ❌ |
| `TIMEZONE` | Timezone for prayer & reminders (default: `Africa/Lagos`) | ❌ |

### 🤖 AI API Keys

| Setting | Get Your Key | Required | Default Model |
|---|---|---|---|
| `GEMINI_API_KEY` | [🔗 Google AI Studio](https://aistudio.google.com/app/apikey) | ✅ | `gemini-3.6-flash` |
| `GROK_API_KEY` | [🔗 xAI Console](https://console.x.ai/) | ❌ | `grok-4.6` |
| `OPENAI_API_KEY` | [🔗 OpenAI Platform](https://platform.openai.com/api-keys) | ❌ | `gpt-5.6-sol` |
| `CLAUDE_API_KEY` | [🔗 Anthropic Console](https://console.anthropic.com/settings/keys) | ❌ | `claude-opus-5` |
| `PERPLEXITY_API_KEY` | [🔗 Perplexity API](https://www.perplexity.ai/settings/api) | ❌ | `sonar-reasoning` |
| `DEEPSEEK_API_KEY` | [🔗 DeepSeek Platform](https://platform.deepseek.com/api_keys) | ❌ | `deepseek-v4-pro` |
| `TOGETHER_API_KEY` | [🔗 Together AI](https://api.together.xyz/settings/api-keys) | ❌ | `meta-llama/Llama-3.3-70B-Instruct-Turbo` |
| `MISTRAL_API_KEY` | [🔗 Mistral Console](https://console.mistral.ai/api-keys/) | ❌ | `mistral-large-latest` |

### 🎙️ Voice & Feature API Keys

| Setting | Get Your Key | Required | Powers |
|---|---|---|---|
| `FISH_AUDIO_API_KEY` | [🔗 Fish Audio](https://fish.audio/) | ❌ | Ultra-realistic AI voice synthesis (`s2.1-pro-free`) |
| `ELEVENLABS_API_KEY` | [🔗 ElevenLabs](https://elevenlabs.io/app/settings/api-keys) | ❌ | Premium AI text-to-speech human voices |
| `REMOVEBG_API_KEY` | [🔗 Remove.bg](https://www.remove.bg/dashboard#api-key) | ❌ | High-Definition Background removal |
| `FOOTBALL_API_KEY` | [🔗 API-Football](https://www.api-football.com/) | ❌ | Live scores, standings, player stats |

> 💡 **Tip:** Only `SESSION_ID` and `GEMINI_API_KEY` are required. All other keys are optional — features that need them will show a friendly message if the key is missing.

---

## 📋 Features — 493 Commands

### 🎉 Fun & Games (40)

| Command | Description | Usage |
|---------|-------------|-------|
| `!8ball` | Ask the magic 8-ball | `!8ball <question>` |
| `!advice` | Get random life advice | `!advice` |
| `!aesthetic` | Convert to ａｅｓｔｈｅｔｉｃ text | `!aesthetic <text>` |
| `!ask` | Ask the bot anything (fun answers) | `!ask <question>` |
| `!birthday` | Set and check birthdays | `!birthday set DD/MM or !birthday @user` |
| `!choose` | Choose between options | `!choose option1 | option2 | option3` |
| `!compatibility` | Check love compatibility between two users | `!compatibility @user1 @user2` |
| `!compliment` | Send a random compliment | `!compliment [@user]` |
| `!confess` | Send anonymous confession to group | `DM: !confess <message> | Group: !confess set/unset` |
| `!couple` | Random couple of the day | `!couple` |
| `!dare` | Random dare challenge | `!dare` |
| `!emojimix` | Mix two emojis together | `!emojimix 😀+😎` |
| `!fact` | Get a random fact | `!fact` |
| `!fakeinfo` | Generate a fake identity for fun | `!fakeinfo` |
| `!flip` | Flip a coin | `!flip` |
| `!fortune` | Get a random fortune cookie message | `!fortune` |
| `!gaytest` | Fun gay percentage meter (just a prank!) | `!gaytest or !gaytest @user` |
| `!hack` | Fake hacking prank on a user | `!hack @user` |
| `!horoscope` | Get daily horoscope | `!horoscope <sign>` |
| `!joke` | Get a random joke | `!joke` |
| `!meme` | Get a random meme text | `!meme` |
| `!mock` | SpOnGeBoB mOcKiNg TeXt | `!mock <text>` |
| `!pickup` | Get a random pickup line | `!pickup` |
| `!quote` | Get a motivational quote | `!quote` |
| `!quotepic` | Generate a beautiful quote image | `!quotepic <text>` |
| `!rate` | Rate anything from 0-10 | `!rate <something>` |
| `!react` | React to a message with emoji | `!react <emoji> (reply to message)` |
| `!reverse` | Reverse text | `!reverse <text>` |
| `!roast` | Funny roast (light-hearted) | `!roast [@user]` |
| `!roll` | Roll a dice (default: 6 sides) | `!roll [sides]` |
| `!rps` | Play Rock, Paper, Scissors | `!rps rock/paper/scissors OR !rps @user` |
| `!say` | Bot says your message | `!say <message>` |
| `!ship` | Check love compatibility | `!ship @user1 @user2` |
| `!simp` | Check how much of a simp someone is | `!simp or !simp @user` |
| `!trivia` | Get a random trivia question | `!trivia` |
| `!truth` | Random truth question | `!truth` |
| `!ttt` | Play Tic-Tac-Toe with another member | `!ttt @user | !ttt 1-9 | !ttt end` |
| `!typewriter` | Send text with typewriter effect | `!typewriter <text>` |
| `!wasted` | Apply GTA wasted effect to image | `!wasted @user / reply to image` |
| `!wordchain` | Word chain game — progressive difficulty | `!wordchain [start/join/stop]` |

### 👥 Group Management (78)

| Command | Description | Usage |
|---------|-------------|-------|
| `!⭐ Active` | Check your role based on activity | `!autorole / !autorole list` |
| `!👑 Legend` | Check your role based on activity | `!autorole / !autorole list` |
| `!💎 Veteran` | Check your role based on activity | `!autorole / !autorole list` |
| `!💬 Chatter` | Check your role based on activity | `!autorole / !autorole list` |
| `!🔥 Regular` | Check your role based on activity | `!autorole / !autorole list` |
| `!activity` | Group activity stats & leaderboard | `!activity [top/hours/reset]` |
| `!add` | Add a member to group | `!add 2348012345678` |
| `!addinfo` | Toggle smart AI auto-reply | `!autoreply on/off` |
| `!admins` | List all group admins | `!admins` |
| `!allow` | Disable a command in this group | `!disallow <command>` |
| `!analytics` | Detailed group analytics report | `!analytics` |
| `!announce` | Send formatted announcement | `!announce <message>` |
| `!anonymous` | Send anonymous message to group | `!anonymous <message>` |
| `!antibadword` | Toggle bad word filter in group | `!antibadword on/off/add/remove/list` |
| `!antibot` | Detect/remove bot accounts from group | `!antibot on/off` |
| `!antidelete` | Advanced anti-delete with media support & customizable targets/scopes | `!delete <g|p|jid|off> [pm|gm|no-pm|no-gm]` |
| `!antiflood` | Toggle anti-flood protection | `!antiflood on/off [max messages] [seconds]` |
| `!antiforeign` | Block foreign numbers from joining group | `!antiforeign on/off <country_code>` |
| `!antilink` | Anti-link with warn/kick modes | `!antilink on warn/kick | !antilink off` |
| `!antispam` | Toggle anti-spam flood protection | `!antispam on/off` |
| `!antistatus` | Detect & warn users who mention the group in their WhatsApp Status | `!antistatus on/off` |
| `!ar` | Auto-responder — custom trigger→response | `!ar add <trigger>|<response> / !ar del <trigger> / !ar list` |
| `!autoreact` | Toggle auto emoji reactions | `!autoreact on/off` |
| `!autoreply` | Toggle smart AI auto-reply | `!autoreply on/off` |
| `!autorole` | Check your role based on activity | `!autorole / !autorole list` |
| `!ban` | Permanently ban/unban a user from the group | `!ban @user [reason] / !unban @user / !banlist` |
| `!bizhours` | Set business hours auto-reply | `!bizhours set <open> <close> [timezone_offset] / !bizhours msg <text>` |
| `!chatfilter` | Filter banned words in group chat | `!chatfilter add <word> / !chatfilter remove <word> / !chatfilter list / !chatfilter on/off` |
| `!chatrank` | Who chatted most today in group | `!chatrank` |
| `!del` | Delete a message (reply to it) | `!del (reply to message)` |
| `!demote` | Demote admin to member | `!demote @user` |
| `!disabled` | Disable a command in this group | `!disallow <command>` |
| `!disallow` | Disable a command in this group | `!disallow <command>` |
| `!gbackup` | Backup group members & bot settings | `!gbackup [full/members/settings]` |
| `!goodbye` | Toggle goodbye messages on/off | `!goodbye on/off` |
| `!groupinfo` | Show group details | `!groupinfo` |
| `!grouplog` | View and manage group activity log | `!grouplog / !grouplog clear / !grouplog on/off` |
| `!groupreset` | Reset all bot group settings | `!groupreset confirm` |
| `!grouptransfer` | Transfer group admin to another user | `!grouptransfer @user` |
| `!hidetag` | Hidden tag all members | `!hidetag <message>` |
| `!kick` | Remove a member from group | `!kick @user` |
| `!kickall` | Remove all non-admin members | `!kickall` |
| `!leaderboard` | Economy wealth leaderboard | `!leaderboard [wallet|bank|coins]` |
| `!link` | Get group invite link | `!link` |
| `!list` | List all group members | `!list` |
| `!mediaonly` | Only allow media messages (images/videos/stickers) | `!mediaonly on/off` |
| `!members` | List all group members | `!members` |
| `!modstats` | View group moderation statistics | `!modstats` |
| `!mute` | Mute group (admins only chat) | `!mute` |
| `!muteall` | Set group to admin-only messages | `!muteall / !muteall off` |
| `!🆕 Newbie` | Check your role based on activity | `!autorole / !autorole list` |
| `!notes` | Save & recall group notes | `!notes add <text> / !notes list / !notes get <#> / !notes del <#>` |
| `!pin` | Pin a message in the group (reply to a message) | `!pin [24/7/30]` |
| `!poll` | Create a poll in group | `!poll Question | Option1 | Option2 | ...` |
| `!promote` | Promote member to admin | `!promote @user` |
| `!purge` | Delete recent messages in group | `!purge [count] — delete last N messages (default 10, max 50). Reply to a message to delete all after it.` |
| `!recap` | AI summary of recent group chat activity | `!recap` |
| `!refine` | Toggle smart AI auto-reply | `!autoreply on/off` |
| `!resetwarn` | Reset warnings for a member | `!resetwarn @user` |
| `!revoke` | Revoke group invite link | `!revoke` |
| `!rules` | Set or show group rules | `!rules / !rules set <rules text>` |
| `!setdesc` | Set group description | `!setdesc <text>` |
| `!setgoodbye` | Set custom goodbye message | `!setgoodbye Goodbye {user}! We` |
| `!setgrouppp` | Set group profile picture | `!setgrouppp (reply to image)` |
| `!seticon` | Set group profile picture | `!seticon (reply to image)` |
| `!setname` | Set group name | `!setname <name>` |
| `!setwelcome` | Set custom welcome message | `!setwelcome Welcome {user} to {group}!` |
| `!sgroupadd` | Post a WhatsApp Status for group members or broadcast | `!sgroupadd <text> OR send/reply to image/video` |
| `!slowmode` | Limit messages per member per minute | `!slowmode <number> / !slowmode off` |
| `!tag` | Tag a member with a message | `!tag @user <message>` |
| `!tagall` | Tag all group members | `!tagall [message]` |
| `!tempban` | Temporarily ban user for specified duration | `!tempban @user <minutes>` |
| `!unmute` | Unmute group (everyone can chat) | `!unmute` |
| `!unpin` | Pin a message in the group (reply to a message) | `!pin [24/7/30]` |
| `!votekick` | Vote to kick a member | `!votekick @user / !votekick yes/no` |
| `!warn` | Warn a member (3 warns = kick) | `!warn @user [reason]` |
| `!welcome` | Toggle & customize group welcome messages with template placeholders | `!welcome on/off | !welcome set <msg> | !welcome preview` |
| `!whitelist` | Whitelist users from group filters | `!whitelist add/remove @user` |

### 📂 MEDIA (10)

| Command | Description | Usage |
|---------|-------------|-------|
| `!addtext` | Add text to an image | `!addtext <top text> | <bottom text> (reply to image)` |
| `!blur` | Blur an image | `!blur [level] (reply to image)` |
| `!circle` | Crop image to a circle shape | `!circle (reply to image)` |
| `!deepfry` | Deep fry an image effect | `!deepfry (reply to image)` |
| `!enhance` | Enhance and sharpen image | `!enhance (reply to image)` |
| `!gif` | Convert video/animated sticker to GIF | `!gif (reply to video/sticker)` |
| `!grayscale` | Convert image to grayscale | `!grayscale (reply to image)` |
| `!invert` | Invert image colors | `!invert (reply to image)` |
| `!pixelate` | Pixelate an image | `!pixelate [level] (reply to image)` |
| `!triggered` | Apply TRIGGERED effect | `!triggered (reply to image)` |

### 🛠️ Utilities & Tools (45)

| Command | Description | Usage |
|---------|-------------|-------|
| `!afk` | Set AFK mode — auto-reply when tagged | `!afk [reason]` |
| `!afklist` | Show all currently AFK members | `!afklist` |
| `!avatar` | Get user | `!avatar @user` |
| `!base64` | Encode or decode base64 text | `!base64 enc <text> | !base64 dec <base64>` |
| `!bmi` | Calculate your BMI | `!bmi <weight_kg> <height_cm>` |
| `!calc` | Calculate a math expression | `!calc 2 + 2 * 5` |
| `!carbon` | Generate beautiful code screenshot | `!carbon <code>` |
| `!color` | Generate random color info | `!color [hex]` |
| `!count` | Count words & characters | `!count <text>` |
| `!crypto` | Get cryptocurrency price | `!crypto <coin>` |
| `!currency` | Convert between currencies | `!currency <amount> <from> <to>` |
| `!define` | Look up word definition | `!define <word>` |
| `!diary` | Personal diary system | `!diary add <text> / !diary read / !diary delete <number>` |
| `!encode` | Encode text (binary, morse, reverse) | `!encode <mode> <text>` |
| `!font` | Convert text to fancy fonts | `!font <style> <text>` |
| `!github` | Get GitHub user profile info | `!github <username>` |
| `!hexcolor` | Preview a hex color | `!hexcolor <hex> (e.g., !hexcolor #FF5733)` |
| `!iplookup` | Lookup IP address geolocation | `!iplookup <ip>` |
| `!mathsolve` | Solve math expressions | `!mathsolve <expression>` |
| `!news` | Get latest news headlines | `!news [topic]` |
| `!ocr` | Extract text from images | `!ocr [lang] (reply to image)` |
| `!password` | Generate a random password | `!password [length]` |
| `!pastebin` | Upload text to a paste service | `!pastebin <text> or reply to a message` |
| `!profile` | Get user | `!profile @user` |
| `!qr` | Generate text QR code | `!qr <text or url>` |
| `!qr.png` | Read QR code from image | `!qrread (reply to image with QR code)` |
| `!qrread` | Read QR code from image | `!qrread (reply to image with QR code)` |
| `!remind` | Set personal reminders | `!remind <time> <message>` |
| `!schedule` | Schedule a message to be sent later | `!schedule <time> <message>` |
| `!shorten` | Shorten a URL link | `!shorten <url>` |
| `!speedtest` | Test bot | `!speedtest` |
| `!ss` | Screenshot a website | `!ss <url>` |
| `!sticker` | Convert image or video to sticker | `!sticker (send/reply to image or video)` |
| `!timezone` | Check time in different timezones | `!timezone <city/timezone>` |
| `!todo` | Manage your to-do list | `!todo add/remove/list/done` |
| `!toimg` | Convert sticker to image or video | `!toimg (reply to sticker)` |
| `!topdf` | Convert text or images to PDF | `!topdf <text> OR reply to image with !topdf` |
| `!tp` | Send a temporary message (auto-deletes) | `!tp <seconds> <message>` |
| `!tts` | Text to speech — Fish Audio, ElevenLabs, or Google TTS | `!tts <text> | !tts voices | !tts voice <name>` |
| `!unitconvert` | Convert between units | `!convert <value> <unit_unit> (e.g., !convert 100 km_mi)` |
| `!vcf` | Generate VCF contact file | `!vcf <name> <number> or !vcf @mention <name>` |
| `!vv` | Unlock view-once media (reply to view-once message) | `!vv (reply to view-once message)` |
| `!weather` | Get weather for a city | `!weather <city>` |
| `!whois` | Domain WHOIS lookup | `!whois <domain>` |
| `!wiki` | Search Wikipedia for information | `!wiki <topic>` |

### 🤖 AI & Chat (20)

| Command | Description | Usage |
|---------|-------------|-------|
| `!ai` | Chat with AI assistant (Gemini) | `!ai` |
| `!chatgpt` | Chat with OpenAI ChatGPT | `!chatgpt <prompt>` |
| `!claude` | Chat with Claude AI (Anthropic) | `!claude <prompt>` |
| `!dalle` | Generate images with DALL-E | `!dalle <description>` |
| `!deepseek` | Chat with DeepSeek AI (reasoning model) | `!deepseek <prompt>` |
| `!editimg` | Edit or remix an image using AI instructions | `Reply to image with !editimg <instructions>` |
| `!gemini` | Chat with Google Gemini AI | `!gemini <prompt>` |
| `!gpt` | Chat with GPT AI (Gemini powered) | `!gpt <question>` |
| `!grok` | Chat with xAI Grok | `!grok <prompt>` |
| `!image.png` | Remove background from image | `!removebg (reply to image)` |
| `!image.png` | Remove background from image | `!removebg (reply to image)` |
| `!imagine` | Generate AI image from text prompt | `!imagine <description>` |
| `!llama` | Chat or generate code with Meta Llama AI | `!llama <prompt> | !codellama <code prompt>` |
| `!mixtral` | Chat with Mixtral/Mistral AI | `!mixtral <prompt>` |
| `!perplexity` | Search with Perplexity AI (with sources) | `!perplexity <query>` |
| `!photo.png` | Remove background from image | `!removebg (reply to image)` |
| `!removebg` | Remove background from image | `!removebg (reply to image)` |
| `!solve` | Analyze and solve math/code/homework problem from photo | `Reply to image with !solve` |
| `!translate` | Translate text to another language | `!translate <lang> <text>` |
| `!vision` | AI image analysis — describe what | `!vision [question] (reply to image)` |

### 📂 GAMES (69)

| Command | Description | Usage |
|---------|-------------|-------|
| `!2048` | 2048 number puzzle | `!2048 / !2048 <up|down|left|right>` |
| `!akinator` | 20 questions guessing game | `!akinator [yes/no]` |
| `!battle` | Battle other users PvP | `!battle @user [bet] / !battle accept / !battle <move>` |
| `!Bear` | Hunt animals for coins and XP | `!hunt` |
| `!blackjack` | Play blackjack | `!blackjack <bet> or !blackjack hit/stand` |
| `!Boar` | Hunt animals for coins and XP | `!hunt` |
| `!Book` | 20 questions guessing game | `!akinator [yes/no]` |
| `!Bunny` | Virtual pet system | `!pet / !pet adopt <type> / !pet feed / !pet play / !pet train / !pet status` |
| `!Butterfly` | 20 questions guessing game | `!akinator [yes/no]` |
| `!Car` | 20 questions guessing game | `!akinator [yes/no]` |
| `!Cat` | 20 questions guessing game | `!akinator [yes/no]` |
| `!Cat` | Virtual pet system | `!pet / !pet adopt <type> / !pet feed / !pet play / !pet train / !pet status` |
| `!charades` | Play charades word game | `!charades [answer]` |
| `!Computer` | 20 questions guessing game | `!akinator [yes/no]` |
| `!connect4` | Play Connect 4 with someone | `!connect4 @user or !connect4 <column>` |
| `!Dark Knight` | RPG adventure system | `!rpg create <class> / !rpg explore / !rpg stats / !rpg shop / !rpg buy <item>` |
| `!Deer` | Hunt animals for coins and XP | `!hunt` |
| `!Demon Lord` | RPG adventure system | `!rpg create <class> / !rpg explore / !rpg stats / !rpg shop / !rpg buy <item>` |
| `!Dog` | 20 questions guessing game | `!akinator [yes/no]` |
| `!Dog` | Virtual pet system | `!pet / !pet adopt <type> / !pet feed / !pet play / !pet train / !pet status` |
| `!Dolphin` | 20 questions guessing game | `!akinator [yes/no]` |
| `!Dragon` | Hunt animals for coins and XP | `!hunt` |
| `!Dragon` | Virtual pet system | `!pet / !pet adopt <type> / !pet feed / !pet play / !pet train / !pet status` |
| `!Dragon` | RPG adventure system | `!rpg create <class> / !rpg explore / !rpg stats / !rpg shop / !rpg buy <item>` |
| `!dungeon` | Dungeon crawl adventure | `!dungeon / !dungeon enter / !dungeon next / !dungeon fight / !dungeon flee` |
| `!Eagle` | 20 questions guessing game | `!akinator [yes/no]` |
| `!Elephant` | 20 questions guessing game | `!akinator [yes/no]` |
| `!Elixir` | RPG adventure system | `!rpg create <class> / !rpg explore / !rpg stats / !rpg shop / !rpg buy <item>` |
| `!emojiguess` | Guess the movie from emojis | `!emojiguess [answer]` |
| `!Fireball` | Battle other users PvP | `!battle @user [bet] / !battle accept / !battle <move>` |
| `!flagquiz` | Guess the country from a flag emoji | `!flagquiz / !flagquiz <answer>` |
| `!Fox` | Virtual pet system | `!pet / !pet adopt <type> / !pet feed / !pet play / !pet train / !pet status` |
| `!Goblin` | RPG adventure system | `!rpg create <class> / !rpg explore / !rpg stats / !rpg shop / !rpg buy <item>` |
| `!guess` | Guess the number game | `!guess [number]` |
| `!Guitar` | 20 questions guessing game | `!akinator [yes/no]` |
| `!hangman` | Play hangman word guessing | `!hangman [letter]` |
| `!Heal` | Battle other users PvP | `!battle @user [bet] / !battle accept / !battle <move>` |
| `!Health Potion` | RPG adventure system | `!rpg create <class> / !rpg explore / !rpg stats / !rpg shop / !rpg buy <item>` |
| `!hunt` | Hunt animals for coins and XP | `!hunt` |
| `!Lion` | 20 questions guessing game | `!akinator [yes/no]` |
| `!Lion` | Hunt animals for coins and XP | `!hunt` |
| `!mathquiz` | Solve math problems | `!mathquiz [answer]` |
| `!minesweeper` | Text-based minesweeper | `!minesweeper [easy|medium|hard] / !minesweeper <A1>` |
| `!Orc` | RPG adventure system | `!rpg create <class> / !rpg explore / !rpg stats / !rpg shop / !rpg buy <item>` |
| `!Panda` | Virtual pet system | `!pet / !pet adopt <type> / !pet feed / !pet play / !pet train / !pet status` |
| `!Penguin` | 20 questions guessing game | `!akinator [yes/no]` |
| `!pet` | Virtual pet system | `!pet / !pet adopt <type> / !pet feed / !pet play / !pet train / !pet status` |
| `!Phone` | 20 questions guessing game | `!akinator [yes/no]` |
| `!quiz` | Play trivia quiz | `!quiz [category]` |
| `!Rabbit` | Hunt animals for coins and XP | `!hunt` |
| `!riddle` | Solve riddles | `!riddle [answer]` |
| `!rpg` | RPG adventure system | `!rpg create <class> / !rpg explore / !rpg stats / !rpg shop / !rpg buy <item>` |
| `!scramble` | Unscramble the word | `!scramble [answer]` |
| `!Shark` | 20 questions guessing game | `!akinator [yes/no]` |
| `!Sharp Sword` | RPG adventure system | `!rpg create <class> / !rpg explore / !rpg stats / !rpg shop / !rpg buy <item>` |
| `!Shield Bash` | Battle other users PvP | `!battle @user [bet] / !battle accept / !battle <move>` |
| `!Shield Boost` | RPG adventure system | `!rpg create <class> / !rpg explore / !rpg stats / !rpg shop / !rpg buy <item>` |
| `!Skeleton` | RPG adventure system | `!rpg create <class> / !rpg explore / !rpg stats / !rpg shop / !rpg buy <item>` |
| `!Slash` | Battle other users PvP | `!battle @user [bet] / !battle accept / !battle <move>` |
| `!Slime` | RPG adventure system | `!rpg create <class> / !rpg explore / !rpg stats / !rpg shop / !rpg buy <item>` |
| `!snake` | Text-based snake game | `!snake / !snake <up|down|left|right>` |
| `!Snake` | 20 questions guessing game | `!akinator [yes/no]` |
| `!Thunder` | Battle other users PvP | `!battle @user [bet] / !battle accept / !battle <move>` |
| `!tictactoe` | Play Tic Tac Toe | `!tictactoe @user or !tictactoe <1-9>` |
| `!typingrace` | Typing speed race | `!typingrace [your text]` |
| `!Wolf` | Hunt animals for coins and XP | `!hunt` |
| `!Wolf` | RPG adventure system | `!rpg create <class> / !rpg explore / !rpg stats / !rpg shop / !rpg buy <item>` |
| `!wordle` | Wordle word guessing game | `!wordle / !wordle <5-letter guess>` |
| `!wouldyourather` | Would you rather... | `!wouldyourather` |

### 📂 GENERAL (14)

| Command | Description | Usage |
|---------|-------------|-------|
| `!addproduct` | View store products and catalog | `!store` |
| `!alive` | Check if bot is running | `!alive` |
| `!help` | Get help for a command | `!help` |
| `!info` | Show bot information | `!info` |
| `!menu` | Full menu | `!menu` |
| `!order` | View store products and catalog | `!store` |
| `!owner` | Show bot owner contact | `!owner` |
| `!ping` | Check bot response time & latency | `!ping` |
| `!repo` | Show bot repository link | `!repo` |
| `!report` | Report bug/suggestion to owner | `!report <message>` |
| `!stats` | Show bot statistics | `!stats` |
| `!store` | View store products and catalog | `!store` |
| `!support` | Get the official WhatsApp channel link | `!support` |
| `!uptime` | Show detailed bot uptime | `!uptime` |

### 🔍 Search & Lookup (11)

| Command | Description | Usage |
|---------|-------------|-------|
| `!anime` | Search anime info | `!anime <name> or !anime random` |
| `!animesearch` | Search for anime information | `!anime <title>` |
| `!antonym` | Find antonyms for a word | `!antonym <word>` |
| `!book` | Search for books | `!book <title>` |
| `!country` | Get information about a country | `!country <name>` |
| `!detectlang` | Detect language of text | `!detectlang <text> or reply to message` |
| `!imdb` | Search movies/TV shows | `!imdb <title>` |
| `!manga` | Search for manga information | `!manga <title>` |
| `!recipe` | Search for recipes | `!recipe <dish name>` |
| `!synonym` | Find synonyms for a word | `!synonym <word>` |
| `!urban` | Look up slang on Urban Dictionary | `!urban <word/phrase>` |

### 👑 Owner Controls (35)

| Command | Description | Usage |
|---------|-------------|-------|
| `!addsudo` | Add a sudo user | `!addsudo @user / reply / number` |
| `!anticall` | Automatically reject all incoming voice and video calls | `!anticall on/off` |
| `!autoread` | Toggle auto-read messages | `!autoread on/off` |
| `!autostatusview` | Auto view and react to status updates | `!autostatusview on/off` |
| `!autotyping` | Toggle auto-typing indicator | `!autotyping on/off` |
| `!block` | Block a user (WhatsApp native block) | `!block @user / reply / number` |
| `!broadcast` | Broadcast message to all groups | `!broadcast <message>` |
| `!changelog` | View or add changelog entries (owner only) | `!changelog [add <entry>]` |
| `!chatbot` | Toggle chatbot auto-replies | `!chatbot on/off` |
| `!delsudo` | Add a sudo user | `!addsudo @user / reply / number` |
| `!eval` | Evaluate JavaScript code (owner only) | `!eval <code>` |
| `!exec` | Execute terminal command (owner only) | `!exec <command>` |
| `!feedback` | Send feedback or suggestions to bot owner | `!feedback <message>` |
| `!fullbackup` | Full backup of bot database (owner only) | `!fullbackup` |
| `!globalban` | Ban a user globally across all groups (owner only) | `!globalban @user [reason]` |
| `!listsudo` | Add a sudo user | `!addsudo @user / reply / number` |
| `!logmessages` | Toggle terminal console logging of regular chat messages | `!logmessages on/off` |
| `!maintenance` | Toggle maintenance mode (owner only) | `!maintenance on/off` |
| `!premium` | Manage premium users (owner only) | `!premium add/remove/list @user [days]` |
| `!private` | Toggle private/public bot mode | `!private / !public / !mode` |
| `!restart` | Restart the bot process (owner only) | `!restart` |
| `!restore` | Restore bot database from a backup file (owner only) | `!restore (reply to backup JSON file)` |
| `!savestatus` | Toggle auto-saving WhatsApp status updates | `!savestatus on/off` |
| `!setelevenlabs` | Toggle AI voice note auto-replies | `!voicebot on/off` |
| `!setfishaudio` | Toggle AI voice note auto-replies | `!voicebot on/off` |
| `!setprefix` | Change command prefix | `!setprefix .` |
| `!shutdown` | Shutdown the bot | `!shutdown` |
| `!train` | Train AI autoreply on exported WhatsApp chat ZIP or TXT | `Reply to WhatsApp Chat Export .zip or .txt with !train` |
| `!transcribe` | Toggle AI voice note auto-replies | `!voicebot on/off` |
| `!unblock` | Unblock a user (WhatsApp native unblock) | `!unblock @user / reply / number` |
| `!update` | Check for & install bot updates | `!update / !update now` |
| `!vn` | Toggle AI voice note auto-replies | `!voicebot on/off` |
| `!voice_note.mp3` | Toggle AI voice note auto-replies | `!voicebot on/off` |
| `!voice_note.ogg` | Toggle AI voice note auto-replies | `!voicebot on/off` |
| `!voicebot` | Toggle AI voice note auto-replies | `!voicebot on/off` |

### 📥 Media & Downloads (16)

| Command | Description | Usage |
|---------|-------------|-------|
| `!apk` | Download APK files | `!apk <app name>` |
| `!facebook` | Download Facebook videos | `!facebook <url>` |
| `!img` | Search for images on the web | `!img <query>` |
| `!instagram` | Download Instagram posts/reels | `!instagram <url>` |
| `!lyrics` | Search for song lyrics | `!lyrics <song name>` |
| `!mediafire` | Download MediaFire files | `!mediafire <url>` |
| `!mediainfo` | Get YouTube video info | `!mediainfo <video name or URL>` |
| `!pinterest` | Search Pinterest-style images | `!pinterest <query>` |
| `!play` | Play music from YouTube | `!play <song name>` |
| `!song` | Download song/audio from YouTube | `!song <song name or YouTube URL>` |
| `!spotify` | Download Spotify tracks | `!spotify <url or song name>` |
| `!tiktok` | Download TikTok videos | `!tiktok <url>` |
| `!twitter` | Download Twitter/X videos | `!twitter <url>` |
| `!wallpaper` | Search HD wallpapers | `!wallpaper <query>` |
| `!yt` | Download YouTube video by link or name | `!yt <YouTube URL or video name>` |
| `!ytsearch` | Search YouTube videos | `!ytsearch <query>` |

### 🕌 Islamic & Deen (52)

| Command | Description | Usage |
|---------|-------------|-------|
| `!Abdurrahman As-Sudais` | Listen to Quran recitation | `!quranaudio <surah name or number> [reciter]` |
| `!Adam` | Stories of the prophets in Islam | `!prophet [name or number]` |
| `!asmaul` | 99 Names of Allah | `!asmaul [number 1-99]` |
| `!Ayyub (Job)` | Stories of the prophets in Islam | `!prophet [name or number]` |
| `!Dawud (David)` | Stories of the prophets in Islam | `!prophet [name or number]` |
| `!dhikr` | Daily remembrance of Allah with counter | `!dhikr [number/add/reset/stats]` |
| `!dua` | Get an Islamic dua | `!dua` |
| `!duas99` | Collection of important daily duas | `!duas99 [category|number]` |
| `!fasting` | Fasting guide and Sunnah fasting days | `!fasting [rules|sunnah|tips|schedule]` |
| `!fiqh` | Islamic fiqh rulings and information | `!fiqh <topic>` |
| `!hadith` | Get an English hadith from major collections | `!hadith [collection] [number]` |
| `!hajj` | Hajj pilgrimage guide | `!hajj [step]` |
| `!hijri` | Get Islamic/Hijri date | `!hijri` |
| `!Ibrahim (Abraham)` | Stories of the prophets in Islam | `!prophet [name or number]` |
| `!iftar` | Get Iftar & Suhoor times for a city | `!iftar <city>` |
| `!Isa (Jesus)` | Stories of the prophets in Islam | `!prophet [name or number]` |
| `!Ishaq (Isaac)` | Stories of the prophets in Islam | `!prophet [name or number]` |
| `!islamicdate` | Get today | `!islamicdate / !islamicdate <dd-mm-yyyy>` |
| `!islamichistory` | Key events in Islamic history | `!islamichistory [event number]` |
| `!islamicname` | Look up Islamic name meanings | `!islamicname <name>` |
| `!islamicquiz` | Islamic knowledge quiz | `!islamicquiz [answer: a/b/c/d]` |
| `!Ismail (Ishmael)` | Stories of the prophets in Islam | `!prophet [name or number]` |
| `!Jami at-Tirmidhi` | Get an English hadith from major collections | `!hadith [collection] [number]` |
| `!juz` | Get info about a Juz of the Quran | `!juz <1-30>` |
| `!Mahmoud Khalil Al-Husary` | Listen to Quran recitation | `!quranaudio <surah name or number> [reciter]` |
| `!Mishary Rashid Alafasy` | Listen to Quran recitation | `!quranaudio <surah name or number> [reciter]` |
| `!Mohamed Siddiq El-Minshawi` | Listen to Quran recitation | `!quranaudio <surah name or number> [reciter]` |
| `!Muhammad ﷺ` | Stories of the prophets in Islam | `!prophet [name or number]` |
| `!Musa (Moses)` | Stories of the prophets in Islam | `!prophet [name or number]` |
| `!Nuh (Noah)` | Stories of the prophets in Islam | `!prophet [name or number]` |
| `!prayer` | Get prayer times for a city | `!prayer <city>` |
| `!prophet` | Stories of the prophets in Islam | `!prophet [name or number]` |
| `!quran` | Get a Quran verse or full surah | `!quran <surah name or number> or !quran <surah>:<ayah>` |
| `!quranaudio` | Listen to Quran recitation | `!quranaudio <surah name or number> [reciter]` |
| `!ramadan` | Ramadan tips, virtues, and info | `!ramadan [tip/virtue/dua]` |
| `!sadaqah` | Daily charity ideas with hadith references | `!sadaqah` |
| `!sahih` | Random Sahih hadith | `!sahih [number]` |
| `!Sahih al-Bukhari` | Get an English hadith from major collections | `!hadith [collection] [number]` |
| `!Sahih Muslim` | Get an English hadith from major collections | `!hadith [collection] [number]` |
| `!Saud Al-Shuraim` | Listen to Quran recitation | `!quranaudio <surah name or number> [reciter]` |
| `!schedule` | Daily Islamic schedule tips | `!schedule` |
| `!seerah` | Prophet Muhammad ﷺ biography | `!seerah [chapter]` |
| `!Sulayman (Solomon)` | Stories of the prophets in Islam | `!prophet [name or number]` |
| `!Sunan Abu Dawud` | Get an English hadith from major collections | `!hadith [collection] [number]` |
| `!Sunan an-Nasai` | Get an English hadith from major collections | `!hadith [collection] [number]` |
| `!Sunan Ibn Majah` | Get an English hadith from major collections | `!hadith [collection] [number]` |
| `!surah` | Get information about a Quran surah | `!surah <number or name>` |
| `!tafsir` | Get Quran verse explanation | `!tafsir <surah>:<ayah>` |
| `!Yaqub (Jacob)` | Stories of the prophets in Islam | `!prophet [name or number]` |
| `!Yunus (Jonah)` | Stories of the prophets in Islam | `!prophet [name or number]` |
| `!Yusuf (Joseph)` | Stories of the prophets in Islam | `!prophet [name or number]` |
| `!zakat` | Calculate Zakat on wealth | `!zakat <amount> [currency]` |

### 📂 ECONOMY (79)

| Command | Description | Usage |
|---------|-------------|-------|
| `!☄️ Meteorite` | Mine for ores and gems | `!mine` |
| `!⛏️ Pickaxe` | Catch fish for money | `!buy <item number>` |
| `!⛏️ Pickaxe` | Catch fish for money | `!shop` |
| `!🌟 Emerald` | Mine for ores and gems | `!mine` |
| `!🍀 Lucky Charm` | Catch fish for money | `!buy <item number>` |
| `!🍀 Lucky Charm` | Catch fish for money | `!shop` |
| `!🎒 Backpack` | Catch fish for money | `!buy <item number>` |
| `!🎒 Backpack` | Catch fish for money | `!shop` |
| `!🎣 Fishing Rod` | Catch fish for money | `!buy <item number>` |
| `!🎣 Fishing Rod` | Catch fish for money | `!shop` |
| `!🏠 House` | Catch fish for money | `!buy <item number>` |
| `!🏠 House` | Catch fish for money | `!shop` |
| `!🐋 Whale` | Go fishing for rewards | `!fish` |
| `!🐕 Pet Dog` | Catch fish for money | `!buy <item number>` |
| `!🐕 Pet Dog` | Catch fish for money | `!shop` |
| `!🐙 Octopus` | Go fishing for rewards | `!fish` |
| `!🐟 Small Fish` | Go fishing for rewards | `!fish` |
| `!🐠 Tropical Fish` | Go fishing for rewards | `!fish` |
| `!🐡 Puffer Fish` | Go fishing for rewards | `!fish` |
| `!👑 Golden Crown` | Go fishing for rewards | `!fish` |
| `!💍 Diamond Ring` | Catch fish for money | `!buy <item number>` |
| `!💍 Diamond Ring` | Catch fish for money | `!shop` |
| `!💎 Diamond` | Mine for ores and gems | `!mine` |
| `!💠 Ancient Crystal` | Mine for ores and gems | `!mine` |
| `!💼 Briefcase` | Catch fish for money | `!buy <item number>` |
| `!💼 Briefcase` | Catch fish for money | `!shop` |
| `!🥈 Silver` | Mine for ores and gems | `!mine` |
| `!🥉 Copper` | Mine for ores and gems | `!mine` |
| `!🦀 Crab` | Go fishing for rewards | `!fish` |
| `!🦈 Shark` | Go fishing for rewards | `!fish` |
| `!🦐 Shrimp` | Go fishing for rewards | `!fish` |
| `!🧜 Mermaid` | Go fishing for rewards | `!fish` |
| `!🪙 Gold` | Mine for ores and gems | `!mine` |
| `!🪨 Stone` | Mine for ores and gems | `!mine` |
| `!🚗 Car` | Catch fish for money | `!buy <item number>` |
| `!🚗 Car` | Catch fish for money | `!shop` |
| `!🛡️ Shield` | Catch fish for money | `!buy <item number>` |
| `!🛡️ Shield` | Catch fish for money | `!shop` |
| `!Animal` | Premium jackpot slots | `!jackpot <bet> [theme]` |
| `!auction` | Auction items to others | `!auction start <item> <startprice> / !auction bid <amount>` |
| `!balance` | Check your balance | `!balance` |
| `!bet` | Bet coins vs another user | `!bet @user <amount> / !bet accept/deny` |
| `!bounty` | Place or claim bounties on users | `!bounty set @user <amount> / !bounty list / !bounty claim @user` |
| `!buy` | Catch fish for money | `!buy <item number>` |
| `!crime` | Commit a crime (risky but rewarding) | `!crime` |
| `!CryptoTech` | Simulated stock market | `!stocks / !stocks buy <symbol> <qty> / !stocks sell <symbol> <qty>` |
| `!daily` | Claim your daily reward | `!daily` |
| `!deposit` | Deposit money to bank | `!deposit <amount|all>` |
| `!Diamond` | Premium jackpot slots | `!jackpot <bet> [theme]` |
| `!duel` | 1v1 duel for coins | `!duel @user <amount> / !duel accept` |
| `!fish` | Go fishing for rewards | `!fish` |
| `!FoodChain` | Simulated stock market | `!stocks / !stocks buy <symbol> <qty> / !stocks sell <symbol> <qty>` |
| `!Fruit` | Premium jackpot slots | `!jackpot <bet> [theme]` |
| `!gamble` | Gamble money on a coin flip | `!gamble <amount|all>` |
| `!GamerzWorld` | Simulated stock market | `!stocks / !stocks buy <symbol> <qty> / !stocks sell <symbol> <qty>` |
| `!gift` | Gift an item to another user | `!gift @user <item name>` |
| `!heist` | Start a group heist for coins | `!heist <amount> / !heist join` |
| `!inventory` | View your inventory | `!inventory` |
| `!ite Coal` | Mine for ores and gems | `!mine` |
| `!jackpot` | Premium jackpot slots | `!jackpot <bet> [theme]` |
| `!loan` | Borrow coins (10% interest) | `!loan <amount> / !loan status` |
| `!lottery` | Buy lottery tickets | `!lottery buy [amount] / !lottery draw` |
| `!mine` | Mine for ores and gems | `!mine` |
| `!payback` | Repay your loan | `!payback <amount>` |
| `!Phantom Corp` | Simulated stock market | `!stocks / !stocks buy <symbol> <qty> / !stocks sell <symbol> <qty>` |
| `!register` | Register for the economy system | `!register` |
| `!richest` | View the richest users | `!richest` |
| `!rob` | Attempt to rob another user | `!rob @user` |
| `!sell` | Sell an item from inventory | `!sell <item name>` |
| `!shop` | Catch fish for money | `!shop` |
| `!slots` | Play the slot machine | `!slots <amount>` |
| `!stocks` | Simulated stock market | `!stocks / !stocks buy <symbol> <qty> / !stocks sell <symbol> <qty>` |
| `!StreamFlix` | Simulated stock market | `!stocks / !stocks buy <symbol> <qty> / !stocks sell <symbol> <qty>` |
| `!trade` | Trade items with other users | `!trade @user <your_item> for <their_item> / !trade accept/deny` |
| `!transfer` | Send money to another user | `!transfer @user <amount>` |
| `!weekly` | Claim your weekly reward | `!weekly` |
| `!WhatsApp Inc` | Simulated stock market | `!stocks / !stocks buy <symbol> <qty> / !stocks sell <symbol> <qty>` |
| `!withdraw` | Withdraw money from bank | `!withdraw <amount|all>` |
| `!work` | Work to earn money | `!work` |

### 📂 FOOTBALL (21)

| Command | Description | Usage |
|---------|-------------|-------|
| `!AFCON` | Live football scores — optionally filter by league | `!live [league]` |
| `!assists` | Live football scores — optionally filter by league | `!live [league]` |
| `!Bundesliga` | Live football scores — optionally filter by league | `!live [league]` |
| `!Champions League` | Live football scores — optionally filter by league | `!live [league]` |
| `!Copa America` | Live football scores — optionally filter by league | `!live [league]` |
| `!Euro` | Live football scores — optionally filter by league | `!live [league]` |
| `!Europa League` | Live football scores — optionally filter by league | `!live [league]` |
| `!fixtures` | Live football scores — optionally filter by league | `!live [league]` |
| `!form` | Live football scores — optionally filter by league | `!live [league]` |
| `!h2h` | Live football scores — optionally filter by league | `!live [league]` |
| `!La Liga` | Live football scores — optionally filter by league | `!live [league]` |
| `!Ligue 1` | Live football scores — optionally filter by league | `!live [league]` |
| `!live` | Live football scores — optionally filter by league | `!live [league]` |
| `!next` | Live football scores — optionally filter by league | `!live [league]` |
| `!player` | Live football scores — optionally filter by league | `!live [league]` |
| `!Premier League` | Live football scores — optionally filter by league | `!live [league]` |
| `!Serie A` | Live football scores — optionally filter by league | `!live [league]` |
| `!table` | Live football scores — optionally filter by league | `!live [league]` |
| `!team` | Live football scores — optionally filter by league | `!live [league]` |
| `!topscorers` | Live football scores — optionally filter by league | `!live [league]` |
| `!World Cup` | Live football scores — optionally filter by league | `!live [league]` |

### 🔄 File Converter Suite (3)

| Command | Description | Usage |
|---------|-------------|-------|
| `!tomp3` | Extract audio track from video or convert to MP3 | `!tomp3 (reply to video or audio)` |
| `!toptt` | Convert audio or MP3 to WhatsApp voice note (PTT) | `!toptt (reply to audio or video)` |
| `!tovideo` | Convert animated sticker or GIF to MP4 video | `!tovideo (reply to animated sticker or GIF)` |

---

## 🚀 Deployment & Cloud Hosting

### ⚡ BotForge (Official Hosting — Highly Recommended) ⭐

Keep your bot online **24/7 with 99.9% uptime** in just 1-click on **[BotForge](https://www.usebotforge.app/)**!

[![Deploy on BotForge](https://img.shields.io/badge/Deploy%20on-BotForge-6366F1?style=for-the-badge&logo=rocket&logoColor=white)](https://www.usebotforge.app/)

* 🚀 **1-Click Instant Deployment** — Zero technical setup, hassle-free bot launch.
* ⚡ **99.9% Rock-Solid Uptime** — Auto-restart on crash, ultra-fast servers, 24/7 active runtime.
* 🛡️ **Session Persistence** — Never lose your WhatsApp authentication or database on redeploys.
* 📊 **Live Console & Log Monitoring** — Real-time performance metrics, CPU, and RAM tracking.
* 🌐 **Start Hosting Now:** [https://www.usebotforge.app/](https://www.usebotforge.app/)

---

### Render

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

1. Set service type to **Worker**
2. Add environment variables in dashboard
3. Deploy from GitHub

### Heroku

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

```bash
heroku create
git push heroku main
```

### Railway / VPS

```bash
git clone https://github.com/Mujaheed56/Phantom-Bot.git
cd Phantom-Bot
npm install
npm start
```

---

## 🔗 Links

| | |
|---|---|
| **Official Bot Hosting** | [usebotforge.app (99.9% Uptime)](https://www.usebotforge.app/) |
| **Repository** | [github.com/Mujaheed56/Phantom-Bot](https://github.com/Mujaheed56/Phantom-Bot) |
| **Pairing Portal** | [phantom-session-web.onrender.com](https://phantom-session-web.onrender.com) |
| **WhatsApp Channel** | [Follow for updates](https://whatsapp.com/channel/0029Vb7luTs4NVirFizIEE2A) |

---

## 📜 License

This project is **free to use, modify, and distribute** under the following conditions:

- ❌ **No Selling** — You may NOT sell this bot or any modified version of it
- ❌ **No Paid Access** — You may NOT charge others to use this bot
- ✅ **Free Use** — You may use, modify, and share it freely
- ✅ **Attribution** — Keep the original credits and links intact

See [LICENSE](LICENSE) for full details.

---

<p align="center">
  <b>⚡ PHANTOM BOT v3.0.0</b><br/>
  <i>493 commands · 14 categories · Powered by Phantom</i>
</p>
