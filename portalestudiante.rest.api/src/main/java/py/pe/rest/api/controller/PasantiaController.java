package py.pe.rest.api.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import py.pe.rest.api.model.Pasantia;
import py.pe.rest.api.repository.PasantiaRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class PasantiaController {

	@Autowired
	PasantiaRepository repository;
	 
	  @GetMapping("/pasantias")
	  public List<Pasantia> getAllPasantias() {
	    System.out.println("Get all Pasantias...");
	 
	    List<Pasantia> pasantias = new ArrayList<>();
	    repository.findAll().forEach(pasantias::add);
	 
	    return pasantias;
	  }
	 
	  @PostMapping(value = "/pasantias/create")
	  public Pasantia postPasantia(@RequestBody Pasantia pasantia) {
	 
		  Pasantia _pasantia = repository.save(new Pasantia(pasantia.getCedula(), pasantia.getDocumento(), pasantia.getEstado(), pasantia.getProgreso()));
	    return _pasantia;
	  }
	 
	  @DeleteMapping("/pasantia/{id}")
	  public ResponseEntity<String> deletePasantia(@PathVariable("id") long id) {
	    System.out.println("Delete Pasantia with ID = " + id + "...");
	 
	    repository.deleteById(id);
	 
	    return new ResponseEntity<>("Pasantia has been deleted!", HttpStatus.OK);
	  }
	 
	  @DeleteMapping("/pasantias/delete")
	  public ResponseEntity<String> deleteAllPasantias() {
	    System.out.println("Delete All Pasantias...");
	 
	    repository.deleteAll();
	 
	    return new ResponseEntity<>("All Pasantias have been deleted!", HttpStatus.OK);
	  }
	 
	  @GetMapping(value = "pasantias/cedula/{cedula}")
	  public List<Pasantia> findByCedula(@PathVariable int cedula) {
	 
	    List<Pasantia> pasantias = repository.findByCedula(cedula);
	    return pasantias;
	  }
	 
	  @PutMapping("/pasantia/{id}")
	  public ResponseEntity<Pasantia> updatePasantia(@PathVariable("id") long id, @RequestBody Pasantia pasantia) {
	    System.out.println("Update Pasantia with ID = " + id + "...");
	 
	    Optional<Pasantia> pasantiaData = repository.findById(id);
	 
	    if (pasantiaData.isPresent()) {
	    	Pasantia _pasantia = pasantiaData.get();
	    	_pasantia.setCedula(pasantia.getCedula());
	    	_pasantia.setDocumento(pasantia.getDocumento());
	    	_pasantia.setEstado(pasantia.getEstado());
	    	_pasantia.setProgreso(pasantia.getProgreso());
	      return new ResponseEntity<>(repository.save(_pasantia), HttpStatus.OK);
	    } else {
	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	  }
}
