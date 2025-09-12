package com.example.www.controller;

import java.util.List;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

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
@Tag(name = "Employee APIs", description = "Manage employees")
public class FirstController {
	@Autowired
	FirstService firstService;
	
	@Operation(summary = "Get all employees", description = "Returns a list of all employees")
	@GetMapping("/getemp")
	public List<Firstprj> getAllData(){
		return firstService.getAllData();
	}
	
	@Operation(summary = "Add employee", description = "Add a new employee to the database")
	@PostMapping("/addemp")
	public Firstprj createData(@RequestBody Firstprj firstprj) {
		return firstService.createData(firstprj);
	}
	
	@Operation(summary = "Get employee by ID", description = "Fetch employee details using employee ID")
	@GetMapping("/getemp/{id}")
	public Firstprj getEmployeeById(@PathVariable Long id) {
		return firstService.getEmployeeById(id);
	}

}
