import { Todo } from "../../types/Todo"

interface ListPageProps {
    todoList: Todo[]
    onDelete: (tno: number) => void
    onEdit: (tno: number) => void
}

function ListPage({ todoList, onDelete, onEdit }: ListPageProps) {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">📋 할 일 목록</h2>

            {todoList.length === 0 ? (
                <p className="text-gray-500">할 일이 없습니다.</p>
            ) : (
                <ul className="space-y-3">
                    {todoList.map((todo) => (
                        <li
                            key={todo.tno}
                            className="border rounded p-4 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between"
                        >
                            <div>
                                <div className="font-bold text-lg">📌 {todo.title}</div>
                                <div className="text-sm text-gray-500">
                                    ✍️ {todo.writer} / 🕒{" "}
                                    {todo.regDate?.replace("T", " ").substring(0, 16)}
                                </div>
                            </div>
                            <div className="space-x-2 mt-2 sm:mt-0">
                                <button
                                    onClick={() => onEdit(todo.tno)}
                                    className="px-3 py-1 text-sm bg-yellow-400 text-white rounded"
                                >
                                    수정
                                </button>
                                <button
                                    onClick={() => onDelete(todo.tno)}
                                    className="px-3 py-1 text-sm bg-red-500 text-white rounded"
                                >
                                    삭제
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ListPage
