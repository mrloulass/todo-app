import React from 'react';
import { Button, Card, Elevation } from '@blueprintjs/core';
import './list.scss';

function List(props) {
  return (
    <Card elevation={Elevation.THREE}>
      {
        props.pagination().map(item => (
          <div key={item.id}>
            <p>{item.text}</p>
            <p><small>Assigned to: {item.assignee}</small></p>
            <p><small>Difficulty: {item.difficulty}</small></p>
            {
              (!item.complete)
                ? <Button onClick={() => props.toggleComplete(item.id)}>Complete: {item.complete.toString()}</Button>
                : <Button onClick={() => props.deleteItem(item.id)}>Delete </Button>
            }
            <hr />
          </div>
        ))
      }
      <Button onClick={props.previous}>Previous</Button>
      <Button onClick={props.next}>Next</Button>
    </Card>
  );
};

export default List;
