import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoLayout from "./layouts/TodoLayout.tsx";
import ListPage from "./routes/todo/ListPage.tsx";
import AddPage from "./routes/todo/AddPage.tsx";
import EditPage from "./routes/todo/EditPage.tsx";
import ReadPage from "./routes/todo/ReadPage.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* /todo 공통 레이아웃으로 묶기 */}
                <Route path="/todo" element={<TodoLayout />}>
                    <Route path="list" element={<ListPage />} />
                    <Route path="add" element={<AddPage />} />
                    <Route path="edit" element={<EditPage />} />
                    <Route path="read" element={<ReadPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
