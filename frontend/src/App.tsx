// src/App.tsx
import { useState } from "react"
import ListPage from "./routes/todo/ListPage"
//import AddPage from "./routes/todo/AddPage"

function App() {
    const [page, setPage] = useState<"list" | "add">("list")

    return (
        <div className="p-6 max-w-xl mx-auto">
            <header className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">📝 Todo App</h1>
                <div className="space-x-2">
                    <button
                        onClick={() => setPage("list")}
                        className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                        목록
                    </button>
                    <button
                        onClick={() => setPage("add")}
                        className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                        등록
                    </button>
                </div>
            </header>

            {page === "list" && <ListPage />}
            {/*{page === "add" && <AddPage />}*/}
        </div>
    )
}

export default App
