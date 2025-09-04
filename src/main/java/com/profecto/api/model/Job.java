package com.profecto.api.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.profecto.api.model.MyUsers;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "jobs")
@Getter
@Setter
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String companyName;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String description;

    private Double stipend;

    @Column(nullable = false)
    private String jobType;

    private String location;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = true)
    @JsonBackReference
    private MyUsers postedBy;
}

