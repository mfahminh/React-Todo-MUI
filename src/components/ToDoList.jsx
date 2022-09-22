import {
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React from 'react';

const ToDoList = ({ todos, handleCheckbox }) => {
  return (
    <div className="todo-list">
      <List>
        {todos.map((todo, index) => {
          return (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Checkbox
                    disableRipple
                    checked={todo.done}
                    onChange={() => handleCheckbox(todos.id)}
                  />
                </ListItemIcon>
                <ListItemText primary={todo.title} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default ToDoList;
