package com.example.backend.todo.controller;

import com.example.backend.todo.dto.TodoDTO;
import com.example.backend.todo.entities.Todo;
import com.example.backend.todo.repository.TodoRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/todos")
@RequiredArgsConstructor
@Slf4j
public class TodoController {

    private final TodoRepository todoRepository;

    // ✅ Todo 목록 조회
    @GetMapping("/list")
    public List<TodoDTO> getList() {
        List<Todo> todos = todoRepository.findAll();

        return todos.stream()
                .map(this::entityToDTO)
                .collect(Collectors.toList());
    }

    // ✅ Todo 등록
    @PostMapping("")
    public TodoDTO register(@RequestBody TodoDTO dto) {

        Todo todo = Todo.builder()
                .title(dto.getTitle())
                .writer(dto.getWriter())
                .complete(false)
                .build();

        Todo saved = todoRepository.save(todo);

        return entityToDTO(saved);
    }

    // ✅ Entity → DTO 변환
    private TodoDTO entityToDTO(Todo todo) {
        return TodoDTO.builder()
                .tno(todo.getTno())
                .title(todo.getTitle())
                .writer(todo.getWriter())
                .regDate(todo.getRegDate())
                .modDate(todo.getModDate())
                .build();
    }
}
