import Link from "next/link";
export default function History() {
  return (
    <div style={{
      maxWidth: 480, margin: "48px auto", background: "#fff",
      padding: 32, borderRadius: 10, boxShadow: "0 3px 12px #0002"
    }}>
      <h1>History</h1>
      <h3 style={{color: "#4f74e6"}}>never miss your medicine</h3>
      <nav style={{marginBottom: 24}}>
        <Link href="/">Home</Link> | <Link href="/medicine">Medicine</Link> | <Link href="/history">History</Link>
      </nav>
      <p>No history yet. This page can be expanded to track reminders and actions.</p>
    </div>
  );
}
