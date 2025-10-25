import Link from "next/link";
export default function Home() {
  const speakReminder = () => {
    if ("speechSynthesis" in window) {
      const msg = new SpeechSynthesisUtterance("Never miss your medicine!");
      window.speechSynthesis.speak(msg);
    }
  };
  return (
    <div style={{
      maxWidth: 480, margin: "48px auto", background: "#fff",
      padding: 32, borderRadius: 10, boxShadow: "0 3px 12px #0002"
    }}>
      <h1>Smart Pill Reminder</h1>
      <h3 style={{color: "#4f74e6"}}>never miss your medicine</h3>
      <nav style={{marginBottom: 24}}>
        <Link href="/">Home</Link> |{" "}
        <Link href="/medicine">Medicine</Link> |{" "}
        <Link href="/history">History</Link>
      </nav>
      <button onClick={speakReminder}>Play Tagline By Voice</button>
      <p style={{marginTop: 24}}>
        Welcome! Get reminders to take your medicine. Use navigation above to view or search medicines and check your history.
      </p>
    </div>
  );
}
