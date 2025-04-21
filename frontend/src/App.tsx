// ✅ Todo 전체 CRUD 구현을 위한 기본 뼈대 코드 (상태 기반 라우팅)

import { useEffect, useState } from "react"
import ListPage from "./routes/todo/ListPage"
import AddPage from "./routes/todo/AddPage"
import EditPage from "./routes/todo/EditPage"
import { Todo } from "./types/Todo"
import {
    getTodoList,
    getTodo,
    createTodo,
    deleteTodo,
    updateTodo,
} from "./api/TodoAPI"

function App() {
    const [page, setPage] = useState<"list" | "add" | "edit">("list")
    const [todoList, setTodoList] = useState<Todo[]>([])
    const [currentTodo, setCurrentTodo] = useState<Todo | null>(null)

    const fetchList = () => {
        getTodoList().then((res) => setTodoList(res.data))
    }

    useEffect(() => {
        if (page === "list") fetchList()
    }, [page])

    const handleDelete = async (tno: number) => {
        await deleteTodo(tno)
        fetchList()
    }

    const handleEdit = async (tno: number) => {
        const res = await getTodo(tno)
        setCurrentTodo(res.data)
        setPage("edit")
    }

    return (
        <div className="p-8 max-w-xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">📝 Todo App</h1>
            <div className="space-x-2 mb-6">
                <button onClick={() => setPage("list")}>목록</button>
                <button onClick={() => setPage("add")}>등록</button>
            </div>

            {page === "list" && (
                <ListPage
                    todoList={todoList}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                />
            )}

            {page === "add" && <AddPage onSave={() => setPage("list")} />}

            {page === "edit" && currentTodo && (
                <EditPage
                    todo={currentTodo}
                    onSave={() => {
                        setCurrentTodo(null)
                        setPage("list")
                    }}
                />
            )}
        </div>
    )
}

export default App
