import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { Remarkable } from 'remarkable';
import Home from './App';
import { IonApp } from '@ionic/react';

const style1={
  marginLeft:'100px',
  
};
const child={
  display: 'inline-grid',
  marginRight:'300px',
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
class MarkdownEditor extends React.Component <{}, { value: string }>   {
  md: Remarkable;
  constructor(props:any) {
    super(props);
    this.md = new Remarkable();
    this.handleChange = this.handleChange.bind(this);
    this.state = { value:' '  };
  }

  handleChange(e:any) {
    this.setState({ value: e.target.value });
  }

  getRawMarkup() {
    return { __html: this.md.render(this.state.value) };
  }

  render() {
    return (
      <>
      <Home />
      <div style={style1} className="MarkdownEditor">
        {/* <div style={child} className='cheldren'> 
                <label >
          Напечатайте текст здесь:
        </label>
        <br></br><br></br>
        <textarea
          id="markdown-content"
          onChange={this.handleChange}
          defaultValue={this.state.value}
        /></div>
       <div style={child} ><h4>Вывод текста:</h4>
        <br></br> */}
        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
      </div>
      {/* </div> */}
      </>
        
    );
  }
}


root.render(<MarkdownEditor />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
