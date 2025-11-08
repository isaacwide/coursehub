const form = document.getElementById('chat-form');
    const promptInput = document.getElementById('prompt');
    const chatBox = document.getElementById('chat-box');

    // Historial de mensajes
    let messages = [];

    // Mensaje de bienvenida automático de Gemini
    window.addEventListener('DOMContentLoaded', () => {
      addMessage('Hola, soy Gemini y haremos tu evaluación vocacional. ¿Estás listo?', 'model');
      messages.push({ role: 'model', text: 'Hola, soy Gemini y haremos tu evaluación vocacional. ¿Estás listo?' });
    });

    function addMessage(text, sender, addToHistory = true) {
      const bubble = document.createElement('div');
      bubble.className = 'bubble ' + (sender === 'model' ? 'gemini' : sender);
      bubble.textContent = text;
      chatBox.appendChild(bubble);
      chatBox.scrollTop = chatBox.scrollHeight;
      if (addToHistory && text && text !== 'Cargando...') {
        messages.push({ role: sender, text });
      }
    }

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const prompt = promptInput.value.trim();
      if (!prompt) return;
      addMessage(prompt, 'user');
      promptInput.value = '';
      promptInput.disabled = true;
      form.querySelector('button').disabled = true;
      addMessage('Cargando...', 'model', false);
      try {
        // Construir historial para el backend
        const history = messages
          .filter(m => m.role === 'user' || m.role === 'model')
          .map(m => ({ role: m.role, text: m.text }));
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ history })
        });
        const data = await res.json();
        // Elimina el mensaje "Cargando..."
        chatBox.removeChild(chatBox.lastChild);
        if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) {
          const respuesta = data.candidates[0].content.parts.map(p => p.text).join('\n');
          addMessage(respuesta, 'model');
        } else if (data.error) {
          addMessage('Error: ' + (data.error.message || JSON.stringify(data.error)), 'model');
        } else {
          addMessage('Respuesta inesperada.', 'model');
        }
      } catch (err) {
        chatBox.removeChild(chatBox.lastChild);
        addMessage('Error de conexión.', 'model');
      }
      promptInput.disabled = false;
      form.querySelector('button').disabled = false;
      promptInput.focus();
    });