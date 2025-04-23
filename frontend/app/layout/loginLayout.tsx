import { Link, Outlet } from "react-router";


export default function TodoLayout() {



    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-800">👤 Login Page</h1>
                    <nav className="flex gap-4">

                        <Link
                            to="/todo/list"
                            className={`px-3 py-2 rounded-lg text-sm font-medium `}
                        >
                            📋 Todo List
                        </Link>
                        <Link
                            to="/member/join"
                            className={`px-3 py-2 rounded-lg text-sm font-medium `}
                        >
                            ➕ Sign Up
                        </Link>



                    </nav>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-6">
                <Outlet />
            </main>
        </div>
    );
}
