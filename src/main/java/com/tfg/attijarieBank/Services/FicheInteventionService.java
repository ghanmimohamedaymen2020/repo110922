package com.tfg.attijarieBank.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tfg.attijarieBank.Models.FicheIntevention;
import com.tfg.attijarieBank.Repository.FicheInterventionRepository;


@Service
public class FicheInteventionService {
	
	@Autowired
	private FicheInterventionRepository ficheInterventionRepository ;
	
	
/*	public FicheIntevention findByName(String prog) {
	
		
		return this.ficheInterventionRepository.findByName(prog) ;
	}
	
	*/
	
	public List<FicheIntevention> getAllFicheIntervention(){
		return this.ficheInterventionRepository.findAll();
		
	}
	
	
	public void addFicheIntervention(FicheIntevention ficheIntervention) {
		
		this.ficheInterventionRepository.save(ficheIntervention);
		
		
		
	}
	

}
