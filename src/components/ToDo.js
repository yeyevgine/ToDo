import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

const ToDo = ({ text, todos, setTodos, todo }) => {
    const [open, setOpen] = React.useState(false);

    const deleteHandler = () => {
        setTodos(todos.filter((item) => item.id !== todo.id));
    };

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item,
                    completed: !item.completed,
                };
            }
            return item;
        }));
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className="todo">
                <div className="todo-body">
                    <input type="checkbox" id="completed" name="completed" className="sorting-completed-button" onClick={completeHandler} />
                    <label htmlFor="completed" className="sorting-select-p"> </label>

                    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
                        {text}
                    </li>

                    <div id="delete-section">
                        <input onClick={handleClickOpen}
                            id="delete"
                            type="checkbox"
                            className="delete-task" />
                        <label htmlFor="delete"></label>
                    </div>
                </div>
            </div>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure you want to delete?"}
                </DialogTitle>

                <DialogActions>
                    <Button color='primary' onClick={deleteHandler}> 
                        Yes
                    </Button>
                    <Button onClick={handleClose} autoFocus>
                        No
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default ToDo;