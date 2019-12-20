package py.pe.rest.api.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "pasantia")
public class Pasantia {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	  private long id;
	 
	  @Column(name = "cedula")
	  private int cedula;
	 
	  @Column(name = "documento")
	  private String documento;
	 
	  @Column(name = "estado")
	  private String estado;
	  
	  @Column(name = "progreso")
	  private int progreso;
	 
	  public Pasantia() {
	  }
	 
	  public Pasantia(int cedula, String documento, String estado, int progreso) {
	    this.cedula = cedula;
	    this.documento = documento;
	    this.estado = estado;
	    this.progreso = progreso;
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
	 
	  public void setDocumento(String documento) {
	    this.documento = documento;
	  }
	 
	  public String getDocumento() {
	    return this.documento;
	  }
	 
	  public void setEstado(String estado) {
		    this.estado = estado;
		  }
		 
		  public String getEstado() {
		    return this.estado;
		  }
		  
		  public void setProgreso(int progreso) {
			    this.progreso = progreso;
			  }
			 
			  public int getProgreso() {
			    return this.progreso;
		}
}
