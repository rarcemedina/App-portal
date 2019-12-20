package py.pe.rest.api.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import py.pe.rest.api.model.Materia;

public interface MateriaRepository extends CrudRepository<Materia, Long> {
	List<Materia> findByCedula(int cedula);
}
