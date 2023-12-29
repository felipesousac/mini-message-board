package com.message.board.model;

import jakarta.validation.constraints.NotBlank;

public record UserMessageRegisterData(@NotBlank String name, @NotBlank String text) {
}
