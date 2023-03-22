import { Page, withModel } from '@adobe/aem-react-editable-components';
import React from 'react';
import { HomePage } from './components/HomePage/HomePage';
// This component is the application entry point
class App extends Page {
  render() {
    return (
      <div>
        {this.childComponents}
        {this.childPages}
        <HomePage/> 
      </div>
      
    );
  }
}

export default withModel(App);
