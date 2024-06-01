package br.com.mts.metas.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.mts.metas.entities.Sale;
import br.com.mts.metas.repositories.SaleRepository;

@Service
public class SaleService {

	@Autowired
	private SaleRepository repository;
	
	public List<Sale> findSales(){
		return repository.findAll();
	}
	
}
