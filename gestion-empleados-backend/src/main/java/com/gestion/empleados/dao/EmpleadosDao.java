package com.gestion.empleados.dao;

import org.springframework.data.repository.CrudRepository;

import com.gestion.empleados.modelo.Empleados;

public interface EmpleadosDao extends CrudRepository<Empleados, Integer> {

}
