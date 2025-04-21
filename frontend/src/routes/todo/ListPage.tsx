import TodoListComponent from "../../components/listComponents.tsx";

function ListPage() {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-indigo-600 mb-6">📋 Todo 목록</h1>
            <TodoListComponent />
        </div>
    );
}

export default ListPage;
