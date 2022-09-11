package com.tfg.attijarieBank.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tfg.attijarieBank.Models.ListeDTfj;
import com.tfg.attijarieBank.Models.ListeTfj;

public interface RepositoryLTFJ  extends JpaRepository<ListeTfj, Integer>{
	
	
//	public List<ListeTfj> findAllByOrderByDCODesc();

}


