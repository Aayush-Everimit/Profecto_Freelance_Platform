package com.profecto.api.model;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class MyUserService implements UserDetailsService {

    private final MyUsersRepository repository;

    public MyUserService(MyUsersRepository repository) {
        this.repository = repository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return repository.findByUsername(username)
                .map(myUser -> User.builder()
                        .username(myUser.getUsername())
                        .password(myUser.getPassword())
                        .roles("USER")
                        .build())
                .orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + username));
    }

    public MyUsers save(MyUsers user) {
        return repository.save(user);
    }
}
