package com.profecto.api.model;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "jobs")
@Getter
@Setter
public class Job
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false)
    private String Title;
    @Column(columnDefinition = "TEXT", nullable = false)
    private String description;

    private Double stipend;

    @Column(nullable = false)
    private String jobType;
    private String location;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private MyUsers postedBy;
}
