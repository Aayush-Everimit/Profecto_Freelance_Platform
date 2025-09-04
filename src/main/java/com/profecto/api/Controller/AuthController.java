package com.profecto.api.Controller;

import com.profecto.api.model.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final MyUserService myUserService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final MyUsersRepository myUsersRepository;

    public AuthController(MyUserService myUserService, PasswordEncoder passwordEncoder, AuthenticationManager authenticationManager, MyUsersRepository myUsersRepository) {
        this.myUserService = myUserService;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.myUsersRepository = myUsersRepository;
    }

    @PostMapping("/signup")
    public ResponseEntity<String> registerUser(@RequestBody RegistrationRequest registrationRequest) {
        MyUsers newUser = new MyUsers();
        newUser.setUsername(registrationRequest.getUsername());
        newUser.setEmail(registrationRequest.getEmail());
        newUser.setPassword(passwordEncoder.encode(registrationRequest.getPassword()));
        myUserService.save(newUser);
        return ResponseEntity.ok("User registered successfully!");
    }

    @PostMapping("/login")
    public ResponseEntity<UserDto> login(@RequestBody LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);

        MyUsers currentUser = myUsersRepository.findByUsername(loginRequest.getUsername())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "User not found after authentication"));

        UserDto userDto = new UserDto();
        userDto.setId(currentUser.getId());
        userDto.setUsername(currentUser.getUsername());
        userDto.setEmail(currentUser.getEmail());

        return ResponseEntity.ok(userDto);
    }
}
