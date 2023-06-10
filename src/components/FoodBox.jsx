import { Card, Col, Button, Row } from 'antd';

function FoodBox(props) {
    const { foodList } = props;
    const { deleteFood } = props;
  
    return (
      <Row gutter={[16, 16]}>
        {foodList.map(food => (
          <Col key={food.name + food.calories}>
            <Card
              title={food.name}
              style={{ width: 230, height: 300 }}
            >
              <img src={food.image} height={60} alt="food" />
              <p>Calories: {food.calories}</p>
              <p>Servings: {food.servings}</p>
              <p>
                <b>Total Calories: {food.calories * food.servings}</b> kcal
              </p>
              <Button type="primary" onClick={ () => {deleteFood(food.name)}}>Delete</Button>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }

export default FoodBox;
