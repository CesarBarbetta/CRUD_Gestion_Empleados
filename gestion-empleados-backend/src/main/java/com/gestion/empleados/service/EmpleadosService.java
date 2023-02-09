package com.gestion.empleados.service;

import java.util.List;

import com.gestion.empleados.modelo.Empleados;

public interface EmpleadosService {

	public List<Empleados> findAll();

	public Empleados save(Empleados empleado);

	public Empleados findById(Integer id);

	public void delete(Integer id);

};