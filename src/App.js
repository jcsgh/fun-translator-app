import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        From:
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        To:
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        <div>
          <textarea col="50" rows="8"></textarea>
        </div>
        <div>
          <textarea col="50" rows="8"></textarea>
        </div>
        <div>
          <button >Translate</button>
        </div>
      </div>
    </div>
  );
}

export default App;
