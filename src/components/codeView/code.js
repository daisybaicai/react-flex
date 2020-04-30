import MonacoEditor from 'react-monaco-editor';
import React, { useState } from 'react';

const options = {
  selectOnLineNumbers: true,
};

const codeView = props => {
  const {code} = props;

  return (
    <div>
      <MonacoEditor
        width="600"
        height="400"
        language="javascript"
        theme="vs-light"
        value={code}
        options={options}
      />
    </div>
  );
};

export default codeView;
