import Player from './components/Player'
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";
import Log from "./components/Log.jsx";
import {WINNING_COMBINATIONS} from "./winning-combinations.js";
import GameOver from "./components/GameOver.jsx";

const PLAYERS = {
    X:'Player 1',
    O:'Player 2'
}
const INIITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function deriveActivePlayer(gameTurns) {
    let currentPlayer = 'X';
    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = 'O';
    }
    return currentPlayer;
}
function deriveGameBoard(gameTurns){
    let gameBoard = [...INIITIAL_GAME_BOARD.map(array => [...array])];

    for (const turn of gameTurns) {
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
        //turn에 기록되어 있으니 차례대로 가져와서 업데이트 해줌.
    }

    return gameBoard;
}
function deriveWinner(gameBoard, players){
    let winner;

    for (const combination of WINNING_COMBINATIONS) {
        const firstSquares = gameBoard[combination[0].row][combination[0].column]; //X or O 들어감
        const secondSquares = gameBoard[combination[1].row][combination[1].column];
        const thridSquares = gameBoard[combination[2].row][combination[2].column];
        if (firstSquares && firstSquares === secondSquares && firstSquares === thridSquares) {
            winner = players[firstSquares]; // X or O의 이름 호출
            console.log(firstSquares);
            console.log(winner);
        }
    }
    return winner;
}

function App() {
    const [gameTurns, setGameTurns] = useState([]);
    const [players, setPlayers] = useState(PLAYERS);
    //const [hasWinner, setHasWinner] = useState(false); gameTurns에서 확인이 가능하므로 굳이 만들 필요 없음
    //const [activePlayer, setActivePlayer] = useState('X'); // 상위 클래스에서 정보주기 위해 사용
    //gameTurn에 이미 사용자에 대한 정보가 있기 때문에 위에 useState은 필요 없음
    const activePlayer = deriveActivePlayer(gameTurns);
    const gameBoard = deriveGameBoard(gameTurns);
    const winner = deriveWinner(gameBoard,players);
    const hasDraw = gameTurns.length === 9 && !winner;

    function handleSelectSquare(rowIndex, colIndex) {
        // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X'); // GameBoard 상태 변
        setGameTurns(prevTurns => {
            const currentPlayer = deriveActivePlayer(prevTurns);
            const updatedTurns = [
                {square: {row: rowIndex, col: colIndex}, player: currentPlayer}, ...prevTurns];
            // ...prevTurns => 현재까지 기록된 선택
            // square : 누가 어떤 위치를 클릭했는지 최신 업데이트 함.
            // player : 누구 차례인지 알려줌
            return updatedTurns;
        });
    }
    function handleRestart(){
        setGameTurns([]);
    }

    function handlePlayerNameChange(symbol, newName){
        setPlayers( prevPlayers => {
            return{
                ...players,
                [symbol]:newName
            }
        });
    }
    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player initialName={PLAYERS.X} symbol="X" isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange}/>
                    <Player initialName={PLAYERS.O} symbol="O" isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChange}/>
                </ol>
                {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
                <GameBoard onSelectSquare={handleSelectSquare}
                           board={gameBoard}
                />
            </div>
            <Log turns={gameTurns}/>
        </main>
    )
}

export default App
