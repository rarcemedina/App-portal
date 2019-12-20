package py.pe.rest.api.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "materia")
public class Materia {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	  private long id;
	 
	  @Column(name = "cedula")
	  private int cedula;
	 
	  @Column(name = "materia")
	  private String materia;
	 
	  @Column(name = "semestre")
	  private int semestre;
	  
	  @Column(name = "nota")
	  private int nota;
	 
	  public Materia() {
	  }
	 
	  public Materia(int cedula, String materia, int semestre, int nota) {
	    this.cedula = cedula;
	    this.materia = materia;
	    this.semestre = semestre;
	    this.nota = nota;
	  }
	 
	  public long getId() {
	    return id;
	  }
	  
	  public void setCedula(int cedula) {
		    this.cedula = cedula;
		  }
		 
		  public int getCedula() {
		    return this.cedula;
	}
	 
	  public void setMateria(String materia) {
	    this.materia = materia;
	  }
	 
	  public String getMateria() {
	    return this.materia;
	  }
	 
	  public void setSemestre(int semestre) {
		    this.semestre = semestre;
		  }
		 
		  public int getSemestre() {
		    return this.semestre;
		  }
		  
		  public void setNota(int nota) {
			    this.nota = nota;
			  }
			 
			  public int getNota() {
			    return this.nota;
		}
}
