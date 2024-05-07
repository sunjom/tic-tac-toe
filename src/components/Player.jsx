import {useState} from 'react';
export default function Player({initialName, symbol, isActive , onChangeName}){
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);
    function handleEditClick(){
        setIsEditing((isEditing) =>!isEditing);
        if(isEditing){
            onChangeName(symbol, playerName); // 자식이 부모의 값을 바꿔줌
        }
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }
    let editablePlayerName = <span className='player-name'>{playerName}</span>

    if(isEditing){
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>
    }
    return(
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}