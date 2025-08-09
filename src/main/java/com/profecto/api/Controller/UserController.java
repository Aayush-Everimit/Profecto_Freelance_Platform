package com.profecto.api.Controller;

import com.profecto.api.model.MyUsers;
import com.profecto.api.model.MyUsersRepository;
import com.profecto.api.model.UserDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final MyUsersRepository myUsersRepository;

    public UserController(MyUsersRepository myUsersRepository) {
        this.myUsersRepository = myUsersRepository;
    }

    @GetMapping("/me")
    public ResponseEntity<UserDto> getCurrentUser() {
        // Get the currently authenticated user from Spring Security's context
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentUsername = authentication.getName();

        // Find the user in the database
        MyUsers currentUser = myUsersRepository.findByUsername(currentUsername)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));

        // Convert the user entity to a safe DTO
        UserDto userDto = new UserDto();
        userDto.setId(currentUser.getId());
        userDto.setUsername(currentUser.getUsername());
        userDto.setEmail(currentUser.getEmail());

        // Return the DTO
        return ResponseEntity.ok(userDto);
    }
}