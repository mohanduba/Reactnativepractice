package com.example.www.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.www.service.FirstService;
import com.example.www.model.Firstprj;

@RestController
@RequestMapping("/api/exp1/")
@CrossOrigin(origins = "*")
public class FirstController {
	@Autowired
	FirstService firstService;
	
	
	@GetMapping("/getemp")
	public List<Firstprj> getAllData(){
		return firstService.getAllData();
	}
	
	
	@PostMapping("/addemp")
	public Firstprj createData(@RequestBody Firstprj firstprj) {
		return firstService.createData(firstprj);
	}
	
	@GetMapping("/getemp/{id}")
	public Firstprj getEmployeeById(@PathVariable Long id) {
		return firstService.getEmployeeById(id);
	}

}
