import { useEffect, useState } from "react"
import { Todo } from "../types/Todo"
import { getTodoList } from "../api/TodoAPI"

function ListComponents() {
    const [todos, setTodos] = useState<Todo[]>([])

    useEffect(() => {
        getTodoList()
            .then(res => setTodos(res.data))
            .catch(err => console.error("❌ 목록 불러오기 실패", err))
    }, [])

    return (
        <ul className="space-y-2">
            {todos.length === 0 ? (
                <li className="text-gray-500">할 일이 없습니다.</li>
            ) : (
                todos.map(todo => (
                    <li
                        key={todo.tno}
                        className="border p-3 rounded shadow-sm hover:bg-gray-50"
                    >
                        <div className="font-semibold">📌 {todo.title}</div>
                        <div className="text-sm text-gray-500">✍️ {todo.writer}</div>
                    </li>
                ))
            )}
        </ul>
    )
}

export default ListComponents
