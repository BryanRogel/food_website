import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import { ConfigProvider } from 'antd';
import es_ES from 'antd/es/locale-provider/es_ES';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    // <Provider store={store}>
      <ConfigProvider locale={es_ES}>
        <Router>
          <App />
        </Router>
      </ConfigProvider>,
    //   </ConfigProvider>
    // </Provider>,
    document.getElementById('root')
  );
