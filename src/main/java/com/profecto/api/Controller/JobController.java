package com.profecto.api.controller;

import com.profecto.api.model.Job;
import com.profecto.api.model.JobService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/jobs")
public class JobController {

    private final JobService jobService;

    public JobController(JobService jobService) {
        this.jobService = jobService;
    }

    @GetMapping
    public List<Job> getAllJobs() {
        return jobService.findAll();
    }


    @PostMapping
    public ResponseEntity<Job> createJob(@RequestBody Job jobRequest) {
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