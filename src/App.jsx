import GameBoard from "./Components/GameBoard"
import Player from "./Components/Player"
function App() {
  

  return (
   
    <main>
<div id='game-container'> 
<ol id="players">
<Player name="Player 1" symbol="O"></Player>
<Player name="Player 2" symbol="X"></Player>

</ol>
<GameBoard></GameBoard>
</div>
Log
      </main>
  )
}

export default App
