export default function GameBoard({onSelectSquare, board}) {
    // function handleSelectSquare(rowIndex, colIndex){
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerArray=>[...innerArray])];
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbole; // 타이밍에 맞는 문자 대입
    //         return updatedBoard
    //     });
    //
    //     onSelectSquare(); // 대입이 끝났으니 문자 바꿔줌.
    // } log와 gameBoard 모두 같은 결과 페이지를 원하니 부모로 이동시켜줄 예졍.
    return <ol id="game-board">
        {board.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) => <li key={colIndex}>
                    <button onClick={() => onSelectSquare(rowIndex,colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                </li>)}
            </ol>
        </li>)}
    </ol>
}