import React from 'react';
import TodoListComponent from "~/components/todo/listComponent";
import PagingComponent from "~/components/common/PagingComponent";
import {data} from "react-router";

function TodoListPage() {


    return (
        <div>
            <TodoListComponent></TodoListComponent>

        </div>
    );
}

export default TodoListPage;