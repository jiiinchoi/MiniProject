import { useQuery } from "@tanstack/react-query";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router";
import { TodoList } from "~/api/todoAPI";
//import type { Todo } from "~/types/todo";

function TodoListComponent() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const pageStr = searchParams.get("page") || "1";
    const sizeStr = searchParams.get("size") || "10";

    const query = useQuery({
        queryKey: ["todos", pageStr, sizeStr],
        queryFn: () => TodoList(pageStr, sizeStr),
        staleTime: 10 * 60 * 1000,
        retry: false,
    });

    const { isFetching, data, error } = query;

    if (error) {
        return <Navigate to="/member/login" replace />;
    }

    return (
        <div className="max-w-4xl mx-auto mt-10">
            <h2 className="text-4xl font-bold mb-6">📋 Todo List</h2>

            {isFetching && <div className="text-xl text-blue-500">불러오는 중...</div>}

            {!isFetching && Array.isArray(data?.dtoList) && data.dtoList.length === 0 && (
                <div className="text-gray-500 text-lg">등록된 할 일이 없습니다.</div>
            )}

            <div className="todo-list space-y-4">
                {Array.isArray(data?.dtoList) &&
                    data.dtoList.map((todo: Todo) => (
                        <div
                            key={todo.tno}
                            className="flex items-center justify-between px-4 py-3 bg-white shadow rounded-lg"
                        >
                            <div className="flex items-center gap-2">
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" />
                                <div className="flex flex-col">
                                    <span className="font-medium text-gray-800">{todo.title}</span>
                                    <span className="text-sm text-gray-500">작성자: {todo.writer}</span>
                                    <span className="text-xs text-gray-400">
                                        작성일: {todo.regDate ? new Date(todo.regDate).toLocaleString() : "없음"}
                                    </span>
                                </div>
                            </div>

                            <div className="flex gap-3 items-center">
                                <Link
                                    to={`/todo/edit/${todo.tno}`}
                                    className="text-blue-500 hover:underline text-sm"
                                >
                                    ✏ 수정
                                </Link>
                                <Link
                                    to={`/todo/read/${todo.tno}`}
                                    className="text-gray-500 hover:underline text-sm"
                                >
                                    🔍 보기
                                </Link>
                                <button className="text-red-500 hover:underline text-sm">🗑 삭제</button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default TodoListComponent;
