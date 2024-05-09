import React, { useEffect, useState } from 'react';
import { getRoomTypes } from '../utils/ApiFunctions';
import './RoomTypeSelector.css';

const RoomTypeSelector = ({ handleRoomInputChange, newRoom }) => {
  const [roomTypes, setRoomTypes] = useState(['']);
  const [showNewRoomTypeInput, setShowNewRoomTypeInput] = useState(false);
  const [newRoomType, setNewRoomType] = useState('');

  useEffect(() => {
    getRoomTypes().then((data) => {
        if (Array.isArray(data)) {
          setRoomTypes(data);
        } else {
          console.error("Received data from API is not an array:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching room types:", error);
      });
  }, []);

  const handleNewRoomTypeInputChange = (e) => {
    setNewRoomType(e.target.value);
  };

  const handleAddNewRoomType = () => {
    if (newRoomType !== "") {
      setRoomTypes([...roomTypes, newRoomType]);
      setNewRoomType("");
      setShowNewRoomTypeInput(false);
      //handleNewRoomTypeInputChange(newRoomType);
    }
  };

  return (
    <>
      {roomTypes.length > 0 && (
        <div>
          <select
            required
            className="form-select"
            name="roomType"
            onChange={(e) => {
              if(e.target.value==="Add New")
              {
                setShowNewRoomTypeInput(true)
              }
              else{
                handleRoomInputChange(e)
                setShowNewRoomTypeInput(false);
              }
            }}
            value = {newRoom.roomType}>
            <option value={""}>Select a room type</option>
            <option value={"Add New"}>Add New</option>
            {roomTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
          {showNewRoomTypeInput && (
            <div className='mt-2'>
            <div className='input-group'>
              <input
                className='form-control'
                type='text'
                placeholder='Enter a new room type'
                value={newRoomType}
                onChange={handleNewRoomTypeInputChange}
              />
              <button className='btn btn-hotel' type='button' onClick={handleAddNewRoomType}>
                Add
              </button>
            </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default RoomTypeSelector;
