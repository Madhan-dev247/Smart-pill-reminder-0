export default function App({ Component, pageProps }) {
  return (
    <div style={{fontFamily: "Arial, sans-serif", minHeight: "100vh", background: "#f5f9ff"}}>
      <Component {...pageProps} />
    </div>
  );
}
