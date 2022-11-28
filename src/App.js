import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  const onButtonClick = (file) => {
    fetch(file).then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = file;
            alink.click();
        })
    })
}
  return (
    <div className="App">
      <Navbar/>
      <Home onButtonClick={onButtonClick}/>
      <div className="h-700 w-full"></div>
    </div>
  );
}

export default App;