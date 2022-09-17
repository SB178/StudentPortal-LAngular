package com.studentportal.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.studentportal.Entity.Student;


@Repository
public interface StudentRepository extends JpaRepository<Student, Integer>{
	
    @Query(value = "select * from student where name = ?1", nativeQuery = true)
    public Optional<Student> findbyName(String name);
}
