package com.profecto.api.model;

import lombok.Setter;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Setter
public class JobService
{
    private final JobRepository jobRepository;
    public JobService(JobRepository jobRepository)
    {
        this.jobRepository = jobRepository;
    }

    public List<Job> findAll()
    {
        return jobRepository.findAll();
    }
    public Job saveJob(Job job)
    {
        return jobRepository.save(job);
    }
    public Optional<Job> findJobById(long id)
    {
        return jobRepository.findById(id);
    }

}
