/*use control_empleados;

#tabla empleados

create table tb_empleados
(
	id INT auto_increment primary key,
    name varchar(200),
    designation varchar(200),
    salary double
);

insert into tb_empleados(name,designation,salary) values("Carlos", "Arquitecto", 3000);
insert into tb_empleados(name,designation,salary) values("Andrés", "Médico", 2800);
*/
use control_empleados;
select * from tb_empleados;