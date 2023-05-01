package com.studentportal.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.studentportal.Entity.Student;
import com.studentportal.Repository.StudentRepository;


@Service
@Component
public class StudentService {

	@Autowired
	StudentRepository repo;
	
	public Integer checkCredentials(Student student) {
		Optional<Student> o = repo.findbyName(student.getName());
		if(o.isPresent()) {
			if(o.get().getPassword().equals(student.getPassword())) {
				return 1;
			}
			else {
				return 3;
			}
		}
		else{
			return 2;
		}
	}
	public boolean addStudent(Student student) {
		if(repo.save(student) != null) {
			return true;
		}
		else {
			return false;
		}
	}
	public Student alldetails(String student) {
		return repo.findbyName(student).get();
	}
}
