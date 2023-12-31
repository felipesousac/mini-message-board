package com.message.board.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.text.SimpleDateFormat;
import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Table(name = "user_message")
@Entity(name = "Message")
public class UserMessage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 500)
    private String text;

    @NotBlank
    @Size(max = 50)
    private String name;

    private String datetime;

    public UserMessage(UserMessageRegisterData data) {
        this.name = data.name();
        this.text = data.text();

        SimpleDateFormat format = new SimpleDateFormat("dd/MM/yyyy");
        this.datetime = format.format(new Date());
    }
}
