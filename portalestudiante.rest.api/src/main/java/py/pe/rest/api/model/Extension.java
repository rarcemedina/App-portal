package py.pe.rest.api.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
 
@Entity
@Table(name = "extension")
public class Extension {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	  private long id;
	 
	  @Column(name = "cedula")
	  private int cedula;
	 
	  @Column(name = "actividad")
	  private String actividad;
	 
	  @Column(name = "horas")
	  private int horas;
	 
	  public Extension() {
	  }
	 
	  public Extension(int cedula, String actividad, int horas) {
	    this.cedula = cedula;
	    this.actividad = actividad;
	    this.horas = horas;
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
	 
	  public void setActividad(String actividad) {
	    this.actividad = actividad;
	  }
	 
	  public String getActividad() {
	    return this.actividad;
	  }
	 
	  public void setHoras(int horas) {
	    this.horas = horas;
	  }
	 
	  public int getHoras() {
	    return this.horas;
	  }
	 
	  @Override
	  public String toString() {
	    return "Extension [id=" + id + ", cedula=" + cedula + ", actividad=" + actividad + ", horas=" + horas + "]";
	  }
}
