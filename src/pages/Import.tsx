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
        <div
          style={{
            borderWidth: 2,
            borderColor: 'rgba(0,0,0,0.2)',
            borderStyle: 'solid',
            marginTop: 32,
            padding: 16,
            borderRadius: 16,
          }}
        >
          <Uploader autoUpload={false} onChange={props.handleFileChange}>
            <Button>Import</Button>
          </Uploader>
          <p>
            Import from <strong>Postman Collection v2.1</strong> JSON file
          </p>
        </div>
        <p style={{ marginTop: 64 }}>
          If you just want to see a demo, you can download{' '}
          <a
            href="/example.postman_collection.json"
            download="example.postman_collection.json"
          >
            this example
          </a>{' '}
          collection file.
        </p>
        <p>
          You can see the postman documentation of this example collection{' '}
          <a
            href="https://documenter.getpostman.com/view/11030603/TzsbMU3s"
            target="_blank"
            rel="noreferrer"
          >
            at here
          </a>
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
