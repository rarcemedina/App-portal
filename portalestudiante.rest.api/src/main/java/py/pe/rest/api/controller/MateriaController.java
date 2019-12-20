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

import py.pe.rest.api.model.Materia;
import py.pe.rest.api.repository.MateriaRepository;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class MateriaController {
	@Autowired
	MateriaRepository repository;
	 
	  @GetMapping("/materias")
	  public List<Materia> getAllPasantias() {
	    System.out.println("Get all Materias...");
	 
	    List<Materia> materias = new ArrayList<>();
	    repository.findAll().forEach(materias::add);
	 
	    return materias;
	  }
	 
	  @PostMapping(value = "/materia/create")
	  public Materia postMateria(@RequestBody Materia materia) {
	 
		  Materia _materia = repository.save(new Materia(materia.getCedula(), materia.getMateria(), materia.getSemestre(), materia.getNota()));
	    return _materia;
	  }
	 
	  @DeleteMapping("/materia/{id}")
	  public ResponseEntity<String> deleteMateria(@PathVariable("id") long id) {
	    System.out.println("Delete Materia with ID = " + id + "...");
	 
	    repository.deleteById(id);
	 
	    return new ResponseEntity<>("Materia has been deleted!", HttpStatus.OK);
	  }
	 
	  @DeleteMapping("/materias/delete")
	  public ResponseEntity<String> deleteAllMaterias() {
	    System.out.println("Delete All Materias...");
	 
	    repository.deleteAll();
	 
	    return new ResponseEntity<>("All Materias have been deleted!", HttpStatus.OK);
	  }
	 
	  @GetMapping(value = "materias/cedula/{cedula}")
	  public List<Materia> findByCedula(@PathVariable int cedula) {
	 
	    List<Materia> materias = repository.findByCedula(cedula);
	    return materias;
	  }
	 
	  @PutMapping("/materia/{id}")
	  public ResponseEntity<Materia> updateMateria(@PathVariable("id") long id, @RequestBody Materia materia) {
	    System.out.println("Update Materia with ID = " + id + "...");
	 
	    Optional<Materia> materiaData = repository.findById(id);
	 
	    if (materiaData.isPresent()) {
	    	Materia _materia = materiaData.get();
	    	_materia.setCedula(materia.getCedula());
	    	_materia.setMateria(materia.getMateria());
	    	_materia.setSemestre(materia.getSemestre());
	    	_materia.setNota(materia.getNota());
	      return new ResponseEntity<>(repository.save(_materia), HttpStatus.OK);
	    } else {
	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	  }
}
