package com.tfg.attijarieBank.Models;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonFormat;

public class ProgrammeId implements Serializable  {
	
	
    private String	prog ;
	
	@JsonFormat(pattern="yyyy-MM-dd")
	private String datd ;
	public ProgrammeId() {
		
	}
	
	public ProgrammeId(String pROG, String dATD) {
		prog = pROG;
		datd = dATD;
	}

	@Override
	public int hashCode() {
		return Objects.hash(prog, datd);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        ProgrammeId programmeid = (ProgrammeId) obj;
        return prog.equals(programmeid.prog) &&
        		datd.equals(programmeid.datd);
	}	
	
	
	
	
}
