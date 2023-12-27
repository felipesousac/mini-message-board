package com.message.board.controller;

import com.message.board.model.UserMessage;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.Date;

@Controller
public class BoardController {

    private ArrayList<UserMessage> messages = new ArrayList<>();


    @GetMapping("/")
    public String index(ModelMap model) {
        return "index";
    }

    @GetMapping("/new")
    public String newMessage() {
        return "newMessage";
    }
}
