package com.example.www.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.www.model.Firstprj;

import com.example.www.repo.FirstRepository;

@Service
public class FirstService {
  @Autowired
  FirstRepository firstRepository;
  
  
	public List<Firstprj> getAllData(){
		return firstRepository.findAll();
	}
	
	public Firstprj createData(Firstprj firstprj) {
		return firstRepository.save(firstprj);
	}
	
	public Firstprj getEmployeeById(Long id) {
	    return firstRepository.findById(id)
	            .orElseThrow(() -> new RuntimeException("Employee not found with id: " + id));
	}
}
