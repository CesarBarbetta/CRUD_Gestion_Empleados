package com.gestion.empleados.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gestion.empleados.modelo.Empleados;
import com.gestion.empleados.service.EmpleadosService;

@RestController
@CrossOrigin(origins = { "*" })
@RequestMapping({ "/api" })
public class EmpleadosController {

	@Autowired
	private EmpleadosService empleadosService;

	// Listar empleados
	@GetMapping("/empleados")
	public List<Empleados> listar() {
		return empleadosService.findAll();
	}

	// Guardar nuevo empleado
	@PostMapping("/empleados")
	public Empleados guardar(@RequestBody Empleados empleado) {
		return empleadosService.save(empleado);
	}

	// Tomar un empleado

	@GetMapping("/empleados/{id}")
	public Empleados getEmpleados(@PathVariable Integer id) {
		return empleadosService.findById(id);
	}

	// Modificar un empleado
	@PutMapping("/empleados/{id}")
	public Empleados modificar(@RequestBody Empleados detallesEmpleado, @PathVariable Integer id) {
		Empleados empleadoActual = empleadosService.findById(id);
		empleadoActual.setName(detallesEmpleado.getName());
		empleadoActual.setDesignation(detallesEmpleado.getDesignation());
		empleadoActual.setSalary(detallesEmpleado.getSalary());

		return empleadosService.save(empleadoActual);

	}

	// Eliminar un empleado
	@DeleteMapping("/empleados/{id}")
	public void eliminar(@PathVariable Integer id) {
		empleadosService.delete(id);

	}
}
