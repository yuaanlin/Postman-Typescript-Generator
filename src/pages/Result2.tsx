import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import helperFunctions from '../functions/helperfunctions';
import { renderForms, renderQueries } from '../functions/renderFormsAndQueries';
import renderItems from '../functions/renderItems';
import { HttpsSchemaGetpostmanComJsonCollectionV210 } from '../type';

function Result(props: {
  postman: HttpsSchemaGetpostmanComJsonCollectionV210;
}) {
  return (
    <div>
      <h1>src/utils/request.ts</h1>
      <SyntaxHighlighter
        lineNumberStyle={{ opacity: 0.4 }}
        language="typescript"
        customStyle={{ marginTop: 0 }}
        style={atomOneDark}
      >
        {helperFunctions}
      </SyntaxHighlighter>
      <h1>src/types/forms.ts</h1>
      <SyntaxHighlighter
        lineNumberStyle={{ opacity: 0.4 }}
        language="typescript"
        customStyle={{ marginTop: 0 }}
        style={atomOneDark}
      >
        {renderForms(props.postman.item)}
      </SyntaxHighlighter>
      <h1>src/types/queries.ts</h1>
      <SyntaxHighlighter
        lineNumberStyle={{ opacity: 0.4 }}
        language="typescript"
        customStyle={{ marginTop: 0 }}
        style={atomOneDark}
      >
        {renderQueries(props.postman.item)}
      </SyntaxHighlighter>

      {renderItems(props.postman.item).map((collection) => (
        <div>
          <h1>{collection.fileName}</h1>
          <SyntaxHighlighter
            lineNumberStyle={{ opacity: 0.4 }}
            language="typescript"
            customStyle={{ marginTop: 0 }}
            style={atomOneDark}
          >
            {collection.content}
          </SyntaxHighlighter>
        </div>
      ))}
    </div>
  );
}

export default Result;
