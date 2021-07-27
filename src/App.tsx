import React, { useState } from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import { FileType } from 'rsuite/lib/Uploader';
import Import from './pages/Import';
import Result from './pages/Result';
import { HttpsSchemaGetpostmanComJsonCollectionV210 } from './type';

function App() {
  const [postman, setPostman] = useState<
    HttpsSchemaGetpostmanComJsonCollectionV210
  >();

  async function handleFileChange(files: FileType[]) {
    if (files.length === 0) return;
    if (files.length > 1) files[0] = files[files.length - 1];
    const file = files[0];
    const text = await file.blobFile!.text();
    setPostman(JSON.parse(text) as HttpsSchemaGetpostmanComJsonCollectionV210);
  }

  return (
    <div style={{ height: '100vh' }}>
      {!postman && <Import handleFileChange={handleFileChange} />}
      {postman && <Result postman={postman} />}
    </div>
  );
}

export default App;
