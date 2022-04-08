import {useState} from "react";

function Todo({addTodos, todos }) {
    console.log(addTodos)
    const [form, setForm] = useState({ new_todo:""})
    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]:e.target.value})
    }
    const  onSubmit = (e) => {
        e.preventDefault()

        if (form.new_todo === ''){
            return false;
        }
        addTodos([...todos,form])
        console.log(form)
        setForm({new_todo:""})
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <input name="new_todo" class="new-todo" placeholder="What needs to be done?" autofocus onChange={onChangeInput} value={form.new_todo} />
            </form>
            <section class="main">
                <input class="toggle-all" type="checkbox" />
                <label for="toggle-all">
                    Mark all as complete
                </label>

                <ul class="todo-list">
                    <li class="completed">
                        <div class="view">
                            <input class="toggle" type="checkbox" />
                            <label>Learn JavaScript</label>
                            <button class="destroy"></button>
                        </div>
                    </li>
                    <li>
                        <div class="view">
                            <input class="toggle" type="checkbox" />
                            <label>Learn React</label>
                            <button class="destroy"></button>
                        </div>
                    </li>
                    <li>
                        <div class="view">
                            <input class="toggle" type="checkbox" />
                            <label>Have a life!</label>
                            <button class="destroy"></button>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Todo;