package com.profecto.api.Controller;

import com.profecto.api.model.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/jobs")
public class JobController {

    private final JobService jobService;
    private final MyUsersRepository myUsersRepository;

    public JobController(JobService jobService, MyUsersRepository myUsersRepository) {
        this.jobService = jobService;
        this.myUsersRepository = myUsersRepository;
    }

    @GetMapping
    public List<Job> getAllJobs() {
        return jobService.findAll();
    }

    @PostMapping
    public ResponseEntity<Job> createJob(@RequestBody Job jobRequest, Authentication authentication) {
        if (authentication == null || !authentication.isAuthenticated()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        String username;
        Object principal = authentication.getPrincipal();
        if (principal instanceof org.springframework.security.core.userdetails.User userDetails) {
            username = userDetails.getUsername();
        } else if (principal instanceof String) {
            username = (String) principal;
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        MyUsers user = myUsersRepository.findByUsername(username)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Authenticated user not found"));

        jobRequest.setPostedBy(user);

        Job savedJob = jobService.saveJob(jobRequest);
        return new ResponseEntity<>(savedJob, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Job> getJobById(@PathVariable Long id) {
        Optional<Job> job = jobService.findJobById(id);
        return job.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
