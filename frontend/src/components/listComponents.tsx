import { useEffect, useState } from "react";
import {todoDTO} from "../types/Todo.ts";
import {getTodoList} from "../api/TodoAPI.ts";

function TodoListComponent() {
    const [todos, setTodos] = useState<todoDTO[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const result = await getTodoList(1, 10); // 기본 page=1, size=10
                setTodos(result.content);
            } catch (err) {
                setError("불러오기에 실패했습니다.");
            } finally {
                setLoading(false);
            }
        };

        fetchTodos();
    }, []);

    if (loading) {
        return <div className="p-6 text-lg text-gray-500">로딩 중...</div>;
    }

    if (error) {
        return <div className="p-6 text-red-500">{error}</div>;
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4 text-indigo-600">📋 Todo List</h1>

            <div className="space-y-3">
                {todos.length > 0 ? (
                    todos.map((todo) => (
                        <div
                            key={todo.tno}
                            className="p-4 border rounded-md shadow hover:bg-gray-50 transition"
                        >
                            <div className="text-lg font-semibold">{todo.title}</div>
                            <div className="text-sm text-gray-500">작성자: {todo.writer}</div>
                            <div className="text-sm text-gray-400">등록일: {todo.regDate}</div>
                        </div>
                    ))
                ) : (
                    <div className="text-gray-400">등록된 할 일이 없습니다.</div>
                )}
            </div>
        </div>
    );
}

export default TodoListComponent;
