import $ from 'jquery';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
if ($('#root')[0]) {
    const root = createRoot($('#root')[0]);
    root.render(<App />);
}
