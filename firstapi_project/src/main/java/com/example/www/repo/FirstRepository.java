package com.example.www.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.www.model.Firstprj;

@Repository
public interface FirstRepository extends JpaRepository<Firstprj, Long> {

}
