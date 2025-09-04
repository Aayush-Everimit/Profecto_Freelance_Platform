package com.profecto.api.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "users")
@Getter
@Setter
public class MyUsers {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false)
    private String password;

    private String email;

    // Add any other user-specific fields (e.g. roles, enabled, etc.)

    // Bidirectional relationship (optional)
    @OneToMany(mappedBy = "postedBy")
    @JsonManagedReference
    private List<Job> jobsPosted;
}
