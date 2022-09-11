package com.tfg.attijarieBank.Models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


import com.fasterxml.jackson.annotation.JsonFormat;



@Entity
@Table(name = "fjo_stat1")
@IdClass(ProgrammeId.class)
public class ListeDTfj implements Serializable{
	
	@Id
    private String	prog ;
	//@JsonFormat(pattern="yyyy-MM-dd")
	@Id
	private String dco ;	
	@JsonFormat(pattern="yyyy-MM-dd")
	private String datd ;	
	
	private String  HEURD ;
	//@JsonFormat(pattern="yyyy-MM-dd")
	private String DATF ;	
	private String HEURF ;	
	private String DUREE ;
	private String CUTI ;	
	private int ETAPE ;
	
	
	
@ManyToOne()
@JoinColumn(name = "ListeTfj_id" )

private ListeTfj listeTFJ ;



public ListeDTfj() {}



public ListeDTfj(String pROG, String dCO, String dATD, String hEURD, String dATF, String hEURF, String dUREE, String cUTI,
		int eTAPE, ListeTfj listeTFJ) {
	super();
	prog = pROG;
	dco = dCO;
	datd = dATD;
	HEURD = hEURD;
	DATF = dATF;
	HEURF = hEURF;
	DUREE = dUREE;
	CUTI = cUTI;
	ETAPE = eTAPE;
	this.listeTFJ = listeTFJ;
}



public String getprog() {
	return prog;
}



public void setprog(String pROG) {
	prog = pROG;
}

 

public String getdco() {
	return dco;
}



public void setdco(String dCO) {
	dco = dCO;
}



public String getDATD() {
	return datd;
}


 
public void setDATD(String dATD) {
	datd = dATD;
}



public String getHEURD() {
	return HEURD;
}



public void setHEURD(String hEURD) {
	HEURD = hEURD;
}



public String getDATF() {
	return DATF;
}



public void setDATF(String dATF) {
	DATF = dATF;
}



public String getHEURF() {
	return HEURF;
}



public void setHEURF(String hEURF) {
	HEURF = hEURF;
}



public String getDUREE() {
	return DUREE;
}



public void setDUREE(String dUREE) {
	DUREE = dUREE;
}



public String getCUTI() {
	return CUTI;
}



public void setCUTI(String cUTI) {
	CUTI = cUTI;
}



public int getETAPE() {
	return ETAPE;
}



public void setETAPE(int eTAPE) {
	ETAPE = eTAPE;
}



public ListeTfj getListeTFJ() {
	return listeTFJ;
}



public void setListeTFJ(ListeTfj listeTFJ) {
	this.listeTFJ = listeTFJ;
}
	

	
	

}
