import AddComponent from "../../components/addComponent.tsx";

function AddPage() {
    console.log("🚀 Rendering: Todo Add Page");

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-indigo-600 mb-6">📌 Todo 등록 페이지</h1>
            <AddComponent />
        </div>
    );
}

export default AddPage;
