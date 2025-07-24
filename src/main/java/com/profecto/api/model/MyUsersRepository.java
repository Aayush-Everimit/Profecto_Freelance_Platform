package com.profecto.api.model;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

// No @Repository needed as JpaRepository provides it
public interface MyUsersRepository extends JpaRepository<MyUsers, Long> {
    Optional<MyUsers> findByUsername(String username);
}