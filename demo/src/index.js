import React from 'react';
import ReactDom from 'react-dom';
import AnonymouseStyleResolution from './components/AnonymouseStyleResolution';
import NamedStyleResolution from './components/NamedStyleResolution';
import RuntimeStyleResolution from './components/RuntimeStyleResolution';
import JSXExpressionStyleResolution from './components/JSXExpressionStyleResolution';

ReactDom.render(<div>
  <AnonymouseStyleResolution />
  <NamedStyleResolution />
  <JSXExpressionStyleResolution />
  <RuntimeStyleResolution />
</div>, document.getElementById('main'));
