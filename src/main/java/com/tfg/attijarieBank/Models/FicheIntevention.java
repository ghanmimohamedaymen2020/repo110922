package com.tfg.attijarieBank.Models;

import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "FicheIntevention")
public class FicheIntevention {
//@Id
//@GeneratedValue(strategy = GenerationType.IDENTITY)
//private int id ;

@Id
@Column(name = "prog", nullable = false, unique = true)
private String	prog ;
@Column(name="")
private String actionsRealisees ;
@Column(name="Constats")

private String Constats  ;
@Column(name="DetailInvestigations")

private String DetailInvestigations ;
@Column(name="CauseIncident")

private String CauseIncident ;
@Column(name="ConsequencesIncident")

private String ConsequencesIncident ;
@Column(name="DureeIncident")

private String DureeIncident ;
@Column(name="StatutResolution")

private String StatutResolution ;
private String Composantimpacte ;
private String domaine;

private String dateReclamation;
private String nomDemandeur ;
private String  nomIntervenants;
private String  origine;
private String revision;
private String dateModification;
private String visaIntervenants;
private String object;








public FicheIntevention() {}








public FicheIntevention(String pROG, String actionsRealisees, String constats, String detailInvestigations,
		String causeIncident, String consequencesIncident, String dureeIncident, String statutResolution,
		String composantimpacte, String domaine, String dateReclamation, String nomDemandeur, String nomIntervenants,
		String origine, String revision, String dateModification, String visaIntervenants, String object) {
	super();
	prog = pROG;
	this.actionsRealisees = actionsRealisees;
	Constats = constats;
	DetailInvestigations = detailInvestigations;
	CauseIncident = causeIncident;
	ConsequencesIncident = consequencesIncident;
	DureeIncident = dureeIncident;
	StatutResolution = statutResolution;
	Composantimpacte = composantimpacte;
	this.domaine = domaine;
	this.dateReclamation = dateReclamation;
	this.nomDemandeur = nomDemandeur;
	this.nomIntervenants = nomIntervenants;
	this.origine = origine;
	this.revision = revision;
	this.dateModification = dateModification;
	this.visaIntervenants = visaIntervenants;
	this.object = object;
}



public String getComposantimpacte() {
	return Composantimpacte;
}



public void setComposantimpacte(String composantimpacte) {
	Composantimpacte = composantimpacte;
}



public String getDomaine() {
	return domaine;
}



public void setDomaine(String domaine) {
	this.domaine = domaine;
}



public String getDateReclamation() {
	return dateReclamation;
}



public void setDateReclamation(String dateReclamation) {
	this.dateReclamation = dateReclamation;
}



public String getNomDemandeur() {
	return nomDemandeur;
}



public void setNomDemandeur(String nomDemandeur) {
	this.nomDemandeur = nomDemandeur;
}



public String getNomIntervenants() {
	return nomIntervenants;
}



public void setNomIntervenants(String nomIntervenants) {
	this.nomIntervenants = nomIntervenants;
}



public String getOrigine() {
	return origine;
}



public void setOrigine(String origine) {
	this.origine = origine;
}



public String getRevision() {
	return revision;
}



public void setRevision(String revision) {
	this.revision = revision;
}



public String getDateModification() {
	return dateModification;
}



public void setDateModification(String dateModification) {
	this.dateModification = dateModification;
}













@Override
public String toString() {
	return "FicheIntevention [prog=" + prog + ", actionsRealisees=" + actionsRealisees + ", Constats=" + Constats
			+ ", DetailInvestigations=" + DetailInvestigations + ", CauseIncident=" + CauseIncident
			+ ", ConsequencesIncident=" + ConsequencesIncident + ", DureeIncident=" + DureeIncident
			+ ", StatutResolution=" + StatutResolution + ", Composantimpacte=" + Composantimpacte + ", domaine="
			+ domaine + ", dateReclamation=" + dateReclamation + ", nomDemandeur=" + nomDemandeur + ", nomIntervenants="
			+ nomIntervenants + ", origine=" + origine + ", revision=" + revision + ", dateModification="
			+ dateModification + "]";
}



public java.lang.String getprog() {
	return prog;
}



public void setprog(java.lang.String pROG) {
	prog = pROG;
}



public String getConstats() {
	return Constats;
}



public void setConstats(String constats) {
	Constats = constats;
}



public String getDetailInvestigations() {
	return DetailInvestigations;
}



public void setDetailInvestigations(String detailInvestigations) {
	DetailInvestigations = detailInvestigations;
}



public String getCauseIncident() {
	return CauseIncident;
}



public void setCauseIncident(String causeIncident) {
	CauseIncident = causeIncident;
}



public String getConsequencesIncident() {
	return ConsequencesIncident;
}



public void setConsequencesIncident(String consequencesIncident) {
	ConsequencesIncident = consequencesIncident;
}



public String getDureeIncident() {
	return DureeIncident;
}



public void setDureeIncident(String dureeIncident) {
	DureeIncident = dureeIncident;
}



public String getActionsRealisees() {
	return actionsRealisees;
}



public void setActionsRealisees(String actionsRealisees) {
	this.actionsRealisees = actionsRealisees;
}



public String getStatutResolution() {
	return StatutResolution;
}



public void setStatutResolution(String statutResolution) {
	StatutResolution = statutResolution;
}



public String getVisaIntervenants() {
	return visaIntervenants;
}



public void setVisaIntervenants(String visaIntervenants) {
	this.visaIntervenants = visaIntervenants;
}



public String getObject() {
	return object;
}



public void setObject(String object) {
	this.object = object;
}




}
  