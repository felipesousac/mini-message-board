package com.message.board.controller;


import com.message.board.model.UserMessage;
import com.message.board.model.UserMessageRegisterData;
import com.message.board.repository.UserMessageRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/")
public class BoardController {
    @Autowired
    private UserMessageRepository userMessageRepository;

    @GetMapping
    public Iterable<UserMessage> listMessages() {

        return userMessageRepository.findAll();
    }

    @PostMapping("/new")
    public void newMessage(@Valid UserMessageRegisterData data) {
        UserMessage user = new UserMessage(data);
        userMessageRepository.save(user);

        System.out.println("Usuario salvo com sucesso");
    }
}
