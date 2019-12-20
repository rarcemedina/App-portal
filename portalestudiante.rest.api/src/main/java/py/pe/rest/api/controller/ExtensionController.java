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

import py.pe.rest.api.model.Extension;
import py.pe.rest.api.repository.ExtensionRepository;

 
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class ExtensionController {

	@Autowired
	  ExtensionRepository repository;
	 
	  @GetMapping("/extensiones")
	  public List<Extension> getAllExtensiones() {
	    System.out.println("Get all Extensiones...");
	 
	    List<Extension> extensiones = new ArrayList<>();
	    repository.findAll().forEach(extensiones::add);
	 
	    return extensiones;
	  }
	 
	  @PostMapping(value = "/extensions/create")
	  public Extension postExtension(@RequestBody Extension extension) {
	 
		  Extension _extension = repository.save(new Extension(extension.getCedula(), extension.getActividad(), extension.getHoras()));
	    return _extension;
	  }
	 
	  @DeleteMapping("/extensions/{id}")
	  public ResponseEntity<String> deleteExtension(@PathVariable("id") long id) {
	    System.out.println("Delete Extension with ID = " + id + "...");
	 
	    repository.deleteById(id);
	 
	    return new ResponseEntity<>("Extension has been deleted!", HttpStatus.OK);
	  }
	 
	  @DeleteMapping("/extensions/delete")
	  public ResponseEntity<String> deleteAllExtensions() {
	    System.out.println("Delete All Extensions...");
	 
	    repository.deleteAll();
	 
	    return new ResponseEntity<>("All extensions have been deleted!", HttpStatus.OK);
	  }
	 
	  @GetMapping(value = "extensiones/cedula/{cedula}")
	  public List<Extension> findByCedula(@PathVariable int cedula) {
	 
	    List<Extension> extensiones = repository.findByCedula(cedula);
	    return extensiones;
	  }
	 
	  @PutMapping("/extension/{id}")
	  public ResponseEntity<Extension> updateExtension(@PathVariable("id") long id, @RequestBody Extension extension) {
	    System.out.println("Update Extension with ID = " + id + "...");
	 
	    Optional<Extension> extensionData = repository.findById(id);
	 
	    if (extensionData.isPresent()) {
	    	Extension _extension = extensionData.get();
	      _extension.setCedula(extension.getCedula());
	      _extension.setActividad(extension.getActividad());
	      _extension.setHoras(extension.getHoras());
	      return new ResponseEntity<>(repository.save(_extension), HttpStatus.OK);
	    } else {
	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	  }
}
