package py.pe.rest.api.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import py.pe.rest.api.model.Extension;

public interface ExtensionRepository extends CrudRepository<Extension, Long> {
  List<Extension> findByCedula(int cedula);
}