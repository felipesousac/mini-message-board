package com.message.board.model;

import java.util.Date;

public class UserMessage {

    private String text;
    private String user;
    private Date date;

    public UserMessage(String text, String user, Date date) {
        this.text = text;
        this.user = user;
        this.date = date;
    }

    public String getText() {
        return text;
    }

    public String getUser() {
        return user;
    }

    public Date getDate() {
        return date;
    }
}
