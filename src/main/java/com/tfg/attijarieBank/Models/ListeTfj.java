package com.tfg.attijarieBank.Models;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;


@Entity
@Table(name = "fjo_stat2")
public class ListeTfj {
	

	
	private String T_TOT;
		
	private String  T_HI;
	private Long  NMVT; 
	@Id
	@JsonFormat(pattern="yyyy-MM-dd")
	private  String dco	;
	
	@OneToMany(mappedBy = "listeTFJ")
	private List<ListeDTfj> listeDetailTfj = new ArrayList<>() ; 
	


	
	public ListeTfj(String t_TOT, String t_HI, Long nMVT, String dCO, List<ListeDTfj> listeDetailTfj) {
		super();
		T_TOT = t_TOT;
		T_HI = t_HI;
		NMVT = nMVT;
		dco = dCO;
		this.listeDetailTfj = listeDetailTfj;
	}



	public ListeTfj() {
		
	}



	public String getdco() {
		return dco;
	}


	public void setdco(String dCO) {
		dco = dCO;
	}



	public String getT_TOT() {
		return T_TOT;
	}



	public void setT_TOT(String t_TOT) {
		T_TOT = t_TOT;
	}



	public String getT_HI() {
		return T_HI;
	}



	public void setT_HI(String t_HI) {
		T_HI = t_HI;
	}



	public List<ListeDTfj> getListeDetailTfj() {
		return listeDetailTfj;
	}



	public void setListeDetailTfj(List<ListeDTfj> listeDetailTfj) {
		this.listeDetailTfj = listeDetailTfj;
	}



	public Long getNMVT() {
		return NMVT;
	}


	public void setNMVT(Long nMVT) {
		NMVT = nMVT;
	}
	
	
	
}
