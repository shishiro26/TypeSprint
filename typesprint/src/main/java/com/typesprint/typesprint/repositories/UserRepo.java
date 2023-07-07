package com.typesprint.typesprint.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.typesprint.typesprint.entities.User;

public interface UserRepo extends JpaRepository<User, Integer>{
		
	
	Optional<User> findByEmail(String email);
}
