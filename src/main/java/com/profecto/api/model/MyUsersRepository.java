package com.profecto.api.model;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface MyUsersRepository extends JpaRepository<MyUsers, Long> {
    Optional<MyUsers> findByUsername(String username);
}