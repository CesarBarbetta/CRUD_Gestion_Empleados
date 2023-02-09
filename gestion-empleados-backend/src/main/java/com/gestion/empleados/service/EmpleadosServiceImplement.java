package com.gestion.empleados.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gestion.empleados.dao.EmpleadosDao;
import com.gestion.empleados.modelo.Empleados;

@Service
public class EmpleadosServiceImplement implements EmpleadosService {

	@Autowired
	private EmpleadosDao empleadoDao;

	@Override
	@Transactional(readOnly = true)
	public List<Empleados> findAll() {
		return (List<Empleados>) empleadoDao.findAll();
	}

	@Override
	@Transactional(readOnly = false)
	public Empleados save(Empleados empleado) {
		return empleadoDao.save(empleado);
	}

	@Override
	@Transactional(readOnly = true)
	public Empleados findById(Integer id) {
		return empleadoDao.findById(id).orElse(null);
	}

	@Override
	@Transactional(readOnly = false)
	public void delete(Integer id) {
		empleadoDao.deleteById(id);
	}
}
