import logo from './logo.svg';
import './App.css';
import TodoApp from './component/TodoApp';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="todo">
          <TodoApp />
        </div>
      </header>
    </div>
  );
}

export default App;
