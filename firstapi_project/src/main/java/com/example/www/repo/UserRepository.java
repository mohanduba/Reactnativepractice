package com.example.www.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.www.model.AuthUser;

public interface UserRepository extends JpaRepository<AuthUser, Long> {
    Optional<AuthUser> findByUsername(String username);
}