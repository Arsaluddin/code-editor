// CodeEditor.js

import React, { useState } from 'react';
import './CodeEditor.css';

const CodeEditor = () => {
  const [code, setCode] = useState('');
  const [isLocked, setLocked] = useState(false);
  const [isDarkTheme, setDarkTheme] = useState(false);

  const handleCodeChange = (event) => {
    if (!isLocked) {
      setCode(event.target.value);
    }
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(code);
    alert('Code copied to clipboard!');
  };

  const handleLockClick = () => {
    setLocked(!isLocked);
  };

  const handleSaveClick = () => {
    alert('Code saved!');
  };

  const handleThemeToggle = () => {
    setDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`code-editor ${isLocked ? 'code-editor--locked' : ''} ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <textarea
        className="code-editor__textarea"
        value={code}
        onChange={handleCodeChange}
        placeholder="Write your code here..."
      />
      <div className="code-editor__buttons">
        <button className="code-editor__button" onClick={handleCopyClick}>
          Copy
        </button>
        <button className="code-editor__button" onClick={handleSaveClick}>
          Save
        </button>
        <button className="code-editor__button" onClick={handleLockClick}>
          {isLocked ? 'Unlock' : 'Lock'}
        </button>
        <button className="code-editor__button theme-toggle" onClick={handleThemeToggle}>
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default CodeEditor;