import * as React from 'react';
import { render } from 'react-dom';

const Demo = ({name} : {name: string}) => <div>Hello {name}!</div>;

render(<Demo name="world" />, document.getElementById('app'));
