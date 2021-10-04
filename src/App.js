import Welcome from './Components/Welcome'
import Intro from './Components/Intro'
import GamePacks from './Components/GamePacks'
import Events from './Components/Events'
import Contact from './Components/Contact'
import BoardGames from './Components/BoardGames'
import Dnd from './Components/Dnd'
import Supplies from './Components/Supplies'
import {Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Intro} />
      <Route path="/welcome" component={Welcome} />
      <Route path="/collections" component={GamePacks} />
      <Route path="/events" component={Events} />
      <Route path="/contact" component={Contact} />
      <Route path="/boardgames" component={BoardGames} />
      <Route path="/dnd" component={Dnd} />
      <Route path="/supplies" component={Supplies} />
    </div>
  );
}

export default App;
