
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add viewport meta tag to ensure proper mobile rendering
const metaTag = document.createElement('meta');
metaTag.name = 'viewport';
metaTag.content = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no';
document.head.appendChild(metaTag);

createRoot(document.getElementById("root")!).render(<App />);
