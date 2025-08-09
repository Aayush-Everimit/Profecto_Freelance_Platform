// File: src/main/java/com/profecto/api/controller/AuthController.java

package com.profecto.api.controller;

import com.profecto.api.model.MyUsers;
import com.profecto.api.model.RegistrationRequest;
import com.profecto.api.model.MyUserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final MyUserService myUserService;
    private final PasswordEncoder passwordEncoder;
    // We no longer need AuthenticationManager here

    public AuthController(MyUserService myUserService, PasswordEncoder passwordEncoder) {
        this.myUserService = myUserService;
        this.passwordEncoder = passwordEncoder;
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

    // THE LOGIN METHOD HAS BEEN REMOVED FROM THIS FILE
}