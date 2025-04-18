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

    // ✅ 완료 여부 필드 (추가 가능)
    private boolean complete;

    // ✅ 등록일/수정일 직접 관리
    private LocalDateTime regDate;

    private LocalDateTime modDate;

    // ✅ INSERT 직전에 실행
    @PrePersist
    public void onCreate() {
        this.regDate = LocalDateTime.now();
        this.modDate = LocalDateTime.now();
    }

    // ✅ UPDATE 직전에 실행
    @PreUpdate
    public void onUpdate() {
        this.modDate = LocalDateTime.now();
    }

    // ✅ 제목 수정용 커스텀 메서드
    public void changeTitle(String title){
        this.title = title;
    }
}
