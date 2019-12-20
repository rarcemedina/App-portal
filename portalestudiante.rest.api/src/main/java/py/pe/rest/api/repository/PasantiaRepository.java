package py.pe.rest.api.repository;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import py.pe.rest.api.model.Pasantia;

public interface PasantiaRepository extends CrudRepository<Pasantia, Long> {
	List<Pasantia> findByCedula(int cedula);
}
