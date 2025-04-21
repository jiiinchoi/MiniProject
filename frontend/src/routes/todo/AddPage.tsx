import { useState } from "react"
import { Todo } from "../../types/Todo"

interface AddPageProps {
    onSave: (todo: Omit<Todo, "tno" | "regDate" | "modDate">) => void
}

function AddPage({ onSave }: AddPageProps) {
    const [title, setTitle] = useState("")
    const [writer, setWriter] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!title || !writer) {
            alert("제목과 작성자를 입력하세요!")
            return
        }

        onSave({ title, writer })
        setTitle("")
        setWriter("")
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-gray-50 p-6 rounded-lg shadow"
        >
            <h2 className="text-xl font-bold">➕ 할 일 등록</h2>

            <div>
                <label className="block mb-1 font-medium">제목</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border rounded w-full p-2"
                    placeholder="할 일 제목을 입력하세요"
                />
            </div>

            <div>
                <label className="block mb-1 font-medium">작성자</label>
                <input
                    type="text"
                    value={writer}
                    onChange={(e) => setWriter(e.target.value)}
                    className="border rounded w-full p-2"
                    placeholder="작성자 이름을 입력하세요"
                />
            </div>

            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                등록하기
            </button>
        </form>
    )
}

export default AddPage
