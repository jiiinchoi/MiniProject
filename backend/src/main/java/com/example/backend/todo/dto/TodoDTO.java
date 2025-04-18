package com.example.backend.todo.dto;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TodoDTO {
    private Long tno;
    private String title;
    private String writer;
    private LocalDateTime regDate;
    private LocalDateTime modDate;
}
