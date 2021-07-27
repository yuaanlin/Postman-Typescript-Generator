import { Button, Uploader } from 'rsuite';
import { FileType } from 'rsuite/lib/Uploader';

function Import(props: { handleFileChange: (f: FileType[]) => void }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: 42 }}>Postman to Typescript Generator</h1>
        <p>
          by{' '}
          <a
            href="https://github.com/ken20001207"
            target="_blank"
            rel="noreferrer"
          >
            Yuanlin Lin (ken20001207)
          </a>
        </p>
        <Uploader
          style={{ marginTop: 32 }}
          autoUpload={false}
          onChange={props.handleFileChange}
        >
          <Button>Import</Button>
        </Uploader>
        <p>
          Import from <strong>Postman Collection v2.1</strong> JSON file
        </p>
      </div>
      <div style={{ position: 'fixed', bottom: '10%' }}>
        <a
          href="https://github.com/ken20001207/Postman-Typescript-Generator"
          target="_blank"
          rel="noreferrer"
        >
          <img
            style={{ width: 32, height: 32 }}
            src="https://image.flaticon.com/icons/png/512/25/25231.png"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}

export default Import;
