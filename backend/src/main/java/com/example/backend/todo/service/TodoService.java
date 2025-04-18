package com.example.backend.todo.service;


import com.example.backend.todo.dto.TodoDTO;
import org.springframework.transaction.annotation.Transactional;


@Transactional
public interface TodoService {

    TodoDTO getOne(Long tno);

}
