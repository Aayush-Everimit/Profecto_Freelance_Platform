package com.profecto.api.model;

import lombok.Getter;
import lombok.Setter;

// This class defines the shape of the user data we send back to the frontend.
// It intentionally excludes the password.
@Getter
@Setter
public class UserDto {
    private Long id;
    private String username;
    private String email;
}
