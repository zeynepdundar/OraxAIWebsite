import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
function getDefaultLang() {
  const saved = localStorage.getItem("lang");
  if (saved === "en" || saved === "tr") return saved;
  return navigator.language.startsWith("tr") ? "tr" : "en";
}
function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={`/${getDefaultLang()}`} replace />}
        />
        <Route path="/:lang/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}
const root = ReactDOM.createRoot(rootElement);
root.render(<Root />);