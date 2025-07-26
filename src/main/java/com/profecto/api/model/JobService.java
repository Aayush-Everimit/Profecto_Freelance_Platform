package com.profecto.api.model;

import lombok.Setter;
import java.util.List;

@Setter
public class JobService
{
    private final JobRepository jobRepository;
    public JobService(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    public List<Job> findAll() {
        return jobRepository.findAll();
    }
    public Job saveJob(Job job) {
        return jobRepository.save(job);
    }

}
