package com.studentportal.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.studentportal.Entity.Student;
import com.studentportal.Service.StudentService;

@RestController
@RequestMapping("/api")
public class StudentController {

//	@RequestMapping("/api/hello")
//	public String hello() {
//		return "Hello WOrld!";
//	}
	  
	@Autowired
	StudentService service;
	
	
	@PostMapping(value="",produces = { "application/json" })
	ResponseEntity<Integer> checkCredentials(@RequestBody Student student) {
		System.out.println(student.getName());
		return ResponseEntity.status(HttpStatus.OK).body(service.checkCredentials(student));
	}
	
	@PostMapping(value="/addstudent",produces = { "application/json" })
	ResponseEntity<Boolean> addStudent(@RequestBody Student student) {
		return ResponseEntity.status(HttpStatus.OK).body(service.addStudent(student));
	}
	
	@GetMapping(value="/{student}",produces = { "application/json" })
	ResponseEntity<Student> alldetails(@PathVariable String student) {
		return ResponseEntity.status(HttpStatus.OK).body(service.alldetails(student));
	}
}
