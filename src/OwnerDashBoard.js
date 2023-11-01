import React, { useState } from 'react';
import TimePicker from 'react-time-picker';

function OwnerDashBoard() {
  const initialFormData = {
    name: '',
    email: '',
    address: '',
    parkingAreaAddress: '',
    timeSlot: '',
    cost: '',
    description: '',
  };

  const [formDataList, setFormDataList] = useState([initialFormData]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedDataList = [...formDataList];
    updatedDataList[index][name] = value;
    setFormDataList(updatedDataList);
  };

  const handleTimeChange = (value, index) => {
    const updatedDataList = [...formDataList];
    updatedDataList[index]['timeSlot'] = value;
    setFormDataList(updatedDataList);
  };

  const handleAddSection = () => {
    setFormDataList([...formDataList, initialFormData]);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/submitData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataList),
      });
      if (response.ok) {
      } else {
        console.error('Submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Owner Dashboard</h1>
      {formDataList.map((formData, index) => (
        <div key={index}>
          <form>
            <div>
              <label>Name:</label>
              <input type="text" name="name" value={formData.name} onChange={(e) => handleChange(e, index)} />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" name="email" value={formData.email} onChange={(e) => handleChange(e, index)} />
            </div>
            <div>
              <label>Address:</label>
              <input type="text" name="address" value={formData.address} onChange={(e) => handleChange(e, index)} />
            </div>
            <div>
              <label>Parking Area Address:</label>
              <input
                type="text"
                name="parkingAreaAddress"
                value={formData.parkingAreaAddress}
                onChange={(e) => handleChange(e, index)}
              />
            </div>
            <div>
              <label>Time Slot:</label>
              <TimePicker
                name="timeSlot"
                value={formData.timeSlot}
                onChange={(value) => handleTimeChange(value, index)}
              />
            </div>
            <div>
              <label>Cost:</label>
              <input type="text" name="cost" value={formData.cost} onChange={(e) => handleChange(e, index)} />
            </div>
            <div>
              <label>Description:</label>
              <textarea name="description" value={formData.description} onChange={(e) => handleChange(e, index)} />
            </div>
          </form>
        </div>
      ))}
      <button onClick={handleAddSection}>Add</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default OwnerDashBoard;
