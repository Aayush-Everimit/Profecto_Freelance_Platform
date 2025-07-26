package com.profecto.api.Controller;

import com.profecto.api.model.Job;
import com.profecto.api.model.JobService;
import com.profecto.api.model.MyUsers;
import com.profecto.api.model.MyUsersRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/jobs")
public class JobController
{
    private final JobService jobService;
    private final MyUsersRepository myUsersRepository;

    public JobController(JobService jobService, MyUsersRepository myUsersRepository)
    {
        this.jobService = jobService;
        this.myUsersRepository = myUsersRepository;
    }
    @GetMapping
    public List<Job> getAllJobs()
    {
        return jobService.findAll();
    }
    @PostMapping
    public ResponseEntity<Job> createJob(@RequestBody Job jobRequest)
    {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentUserName = authentication.getName();

        MyUsers currentUser = MyUsersRepository.findByUsername(currentUserName).orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "User not found"))
    }
}
