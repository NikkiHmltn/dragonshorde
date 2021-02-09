import Welcome from './Components/Welcome'
import GamePacks from './Components/GamePacks'
import Events from './Components/Events'
import Contact from './Components/Contact'
import BoardGames from './Components/BoardGames'
import NavBar from './Components/NavBar'
import {Route} from 'react-router-dom'


function App() {
  return (
    <>
    <NavBar />
    <div className="App">
      <Route exact path="/" component={Welcome} />
      <Route path="/gamepacks" component={GamePacks} />
      <Route path="/events" component={Events} />
      <Route path="/contact" component={Contact} />
      <Route path="/boardgames" component={BoardGames} />
    </div>
    </>
  );
}

export default App;
