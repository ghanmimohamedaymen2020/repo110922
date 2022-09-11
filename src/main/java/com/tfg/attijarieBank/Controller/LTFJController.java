package com.tfg.attijarieBank.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tfg.attijarieBank.Models.ListeDTfj;
import com.tfg.attijarieBank.Models.ListeTfj;
import com.tfg.attijarieBank.Repository.RepositoryLTFJ;

@RestController
@CrossOrigin(origins = "*")

public class LTFJController {
	
	
	@Autowired
	RepositoryLTFJ repositoryDTFJ ;

	
	@GetMapping("/LTFJ")
	public  List<ListeTfj> getAllTFJ(){
		return repositoryDTFJ.findAll();
		
	}
	
	

}
