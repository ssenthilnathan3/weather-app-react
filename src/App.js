import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/currentweather';

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }
  return (
    <div class="container">
    <Search onSearchChange={handleOnSearchChange}/>
    <CurrentWeather/>
    </div>
  );
}

export default App;
