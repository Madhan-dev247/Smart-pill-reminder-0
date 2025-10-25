import { useState } from "react";
import { medicineList } from "../utils/medicineList";
export default function Medicine() {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [message, setMessage] = useState('');
  const handleVibrate = () => { if (navigator.vibrate) navigator.vibrate([200,100,200]); };
  const onChange = (e) => {
    const value = e.target.value;
    setInput(value);
    if (value.length >= 2) {
      setSuggestions(medicineList.filter(med =>
        med.toLowerCase().includes(value.toLowerCase())
      ));
    } else { setSuggestions([]); }
  };
  const speakReminder = () => {
    if ("speechSynthesis" in window) {
      const msg = new SpeechSynthesisUtterance("Time to take your medicine! Never miss your medicine.");
      window.speechSynthesis.speak(msg);
      setMessage("Voice reminder played!");
    }
  };
  const startVoiceRecognition = () => {
    if ("webkitSpeechRecognition" in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setMessage(`Voice input: "${transcript}"`);
        if (transcript.length >= 2) {
          setSuggestions(medicineList.filter(med =>
            med.toLowerCase().includes(transcript.toLowerCase())
          ));
        } else { setSuggestions([]); }
      };
      recognition.start();
    } else { setMessage("Voice search not supported on this browser."); }
  };
  return (
    <div style={{
      maxWidth: 480, margin: "48px auto", background: "#fff",
      padding: 32, borderRadius: 10, boxShadow: "0 3px 12px #0002"
    }}>
      <h1>Medicine Search</h1>
      <h3 style={{color: "#4f74e6"}}>never miss your medicine</h3>
      <input
        type="text"
        value={input}
        onChange={onChange}
        placeholder="Type medicine name"
        style={{
          width: '100%', fontSize: 18, padding: "8px 12px",
          border: "1px solid #ccc", borderRadius: 4, marginBottom: 8
        }}
      />
      <div style={{marginBottom: 8}}>
        <button onClick={handleVibrate}>Vibrate Reminder</button>
        <button onClick={speakReminder} style={{marginLeft: 8}}>Voice Reminder</button>
        <button onClick={startVoiceRecognition} style={{marginLeft: 8}}>Voice Search</button>
      </div>
      <div style={{color: "blue"}}>{message}</div>
      <ul>
        {suggestions.map((med, i) => <li key={i}>{med}</li>)}
      </ul>
    </div>
  );
}
