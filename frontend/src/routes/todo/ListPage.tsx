import { useEffect, useState } from "react"
import { Todo } from "../../types/Todo"
import { getTodoList } from "../../api/TodoAPI"

function ListPage() {
    const [todos, setTodos] = useState<Todo[]>([])

    useEffect(() => {
        getTodoList()
            .then(res => {
                setTodos(res.data)
            })
            .catch(err => {
                console.error("❌ 할 일 목록 불러오기 실패:", err)
            })
    }, [])

    return (
        <div className="p-6 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">📝 할 일 목록</h1>

            {todos.length === 0 ? (
                <p className="text-gray-500">할 일이 없습니다.</p>
            ) : (
                <ul className="space-y-3">
                    {todos.map(todo => (
                        <li key={todo.tno} className="border p-3 rounded-md shadow">
                            <div className="font-semibold text-lg">📌 {todo.title}</div>
                            <div className="text-sm text-gray-500">✍️ {todo.writer}</div>
                            <div className="text-xs text-gray-400 mt-1">
                                🕒 {todo.regDate?.replace("T", " ").substring(0, 16)}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ListPage
