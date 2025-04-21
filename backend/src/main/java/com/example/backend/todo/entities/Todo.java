package com.example.backend.todo.entities;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "tbl_todo")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tno;

    @Column(nullable = false, length = 300)
    private String title;

    private String writer;


    private boolean complete;


    private LocalDateTime regDate;

    private LocalDateTime modDate;


    @PrePersist
    public void onCreate() {
        this.regDate = LocalDateTime.now();
        this.modDate = LocalDateTime.now();
    }


    @PreUpdate
    public void onUpdate() {
        this.modDate = LocalDateTime.now();
    }


    public void changeTitle(String title){
        this.title = title;
    }
}
