package br.com.mts.metas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.mts.metas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
