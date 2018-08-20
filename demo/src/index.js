import React from 'react';
import ReactDom from 'react-dom';
import AnonymouseStyleResolution from './components/AnonymouseStyleResolution';
import NamedStyleResolution from './components/NamedStyleResolution';
import RuntimeStyleResolution from './components/RuntimeStyleResolution';
import ClassnameCallExpressionResolution from './components/ClassnameCallExpressionResolution';

ReactDom.render(<div>
  <AnonymouseStyleResolution />
  <NamedStyleResolution />
  <ClassnameCallExpressionResolution />
  <RuntimeStyleResolution />
</div>, document.getElementById('main'));
