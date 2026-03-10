/* ============================================
   chatbot.js — AI-powered chat widget (Claude API)
   ============================================ */

const SYSTEM_PROMPT = `You are a friendly and expert AI assistant for Innovative Energy Conservation Solutions (IECS).

About IECS:
- Full name: Innovative Energy Conservation Solutions
- Location: House No. 1337, 1st Floor, Old Sunny Enclave, Near Gurudwara Sahib, Mohali – 140413, Punjab, India
- Phone: 07948549066
- Email: info@iecsolutions.in
- GST No.: 03CFHPD4550A1Z8
- Contact person: Khalid Khan (Manager)
- Legal status: Proprietorship firm
- Team size: 11–25 people
- Annual Turnover: ₹40 Lakh – ₹1.5 Crore

Services offered by IECS:
1. Electrical Safety & Earthing System Audit – checks grounding, safety compliance
2. Power Quality & Harmonics Audit – reduces power wastage and equipment damage
3. Pumping Efficiency Analysis Audit – optimizes pump energy use
4. Plant Electrical Design Consultancy – single-line diagrams, plant layouts
5. Infrared Thermography Services – thermal imaging to detect hotspots
6. GHG Verification & Validation Service – greenhouse gas audits, carbon credits
7. EC Fan (Electronically Commutated Fans) – energy-saving fans for HVAC
8. Centrifugal Blower – industrial ventilation solutions
9. Energy Efficiency Conservation Training – BEE exam prep, workforce training
10. Energy Efficient Cooling Tower – carbon composite fans, up to 40% savings

Answer questions concisely and helpfully. Be warm and professional. Keep responses under 130 words. 
For pricing questions, say: "For pricing, please call us at 07948549066 or fill the contact form — our team will give you a custom quote."
For appointments: suggest calling 07948549066 or using the contact form.
Use simple formatting. Don't use excessive markdown.`;

let chatHistory = [];
let chatOpen = false;

function toggleChat() {
  chatOpen = !chatOpen;
  const win = document.getElementById('chat-window');
  if (chatOpen) {
    win.classList.add('open');
    document.getElementById('chat-input').focus();
  } else {
    win.classList.remove('open');
  }
}

function quickAsk(question) {
  document.getElementById('chat-input').value = question;
  sendChat();
}

function addMessage(html, role) {
  const msgs = document.getElementById('chat-messages');
  const div  = document.createElement('div');
  div.className = 'msg ' + role;
  div.innerHTML = html;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  return div;
}

function showTyping() {
  const msgs = document.getElementById('chat-messages');
  const div  = document.createElement('div');
  div.id = 'typing-indicator';
  div.className = 'msg bot typing';
  div.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function removeTyping() {
  const t = document.getElementById('typing-indicator');
  if (t) t.remove();
}

async function sendChat() {
  const input   = document.getElementById('chat-input');
  const userMsg = input.value.trim();
  if (!userMsg) return;

  input.value = '';
  addMessage(userMsg, 'user');
  chatHistory.push({ role: 'user', content: userMsg });
  showTyping();

  // Disable input while waiting
  input.disabled = true;
  document.getElementById('chat-send').disabled = true;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 350,
        system: SYSTEM_PROMPT,
        messages: chatHistory
      })
    });

    const data = await response.json();
    removeTyping();

    const reply = data.content?.[0]?.text
      || "I'm having trouble connecting. Please call us at 07948549066 for direct assistance.";

    chatHistory.push({ role: 'assistant', content: reply });

    // Keep history to last 10 messages to avoid token overflow
    if (chatHistory.length > 10) chatHistory = chatHistory.slice(-10);

    addMessage(reply.replace(/\n/g, '<br/>'), 'bot');

  } catch (err) {
    removeTyping();
    addMessage(
      'Sorry, I\'m offline right now. Please call us at <strong>07948549066</strong> or use the contact form below.',
      'bot'
    );
  } finally {
    input.disabled = false;
    document.getElementById('chat-send').disabled = false;
    input.focus();
  }
}
