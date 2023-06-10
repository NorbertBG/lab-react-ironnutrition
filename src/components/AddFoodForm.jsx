// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm(props) {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState('');
    const [servings, setServings] = useState('');

    const handleName = (event) => setName(event.target.value)
    const handleImage = (event) => setImage(event.target.value)
    const handleCalories = (event) => setCalories(event.target.value)
    const handleServings = (event) => setServings(event.target.value)
    
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        props.addFoodForm(name, image, calories, servings);
      };
    

  return (
    <form onSubmit={onFormSubmit}>
      <Divider>Add Food Entry</Divider>

      <label htmlFor='name'>Name</label>
      <Input id="name" value={name} type="text" onChange={handleName} />

      <label>Image</label>
      <Input id="image" value={image} type="text" onChange={handleImage} />

      <label>Calories</label>
      <Input id="calories" value={calories} type="number" onChange={handleCalories} />

      <label>Servings</label>
      <Input id="servings" value={servings} type="number" onChange={handleServings} />

      <button>Create</button>
    </form>
  );
}

export default AddFoodForm;
