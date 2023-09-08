import logo from './linux.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="Flag">flag4 =&gt; <code>02b27874</code></p>
        <div className='img-container'>
          <img src={logo} className="App-logo" alt="logo" />
          <img src='https://seeklogo.com/images/S/shell-logo-19A7AB5D69-seeklogo.com.png' className='shell'/>
        </div>
        <p>
          We need to fix the errors on 10.22.5.10! <br/><hr/>
          <code>milf:8e0bb808a49d482001a8150f4710f513</code>
        </p>
        <a
          className="App-link"
          href="https://searchsecurity.techtarget.com/definition/Secure-Shell"
          rel="noopener noreferrer"
        >
          Learn SSH
        </a>
      </header>
    </div>
  );
}

export default App;
