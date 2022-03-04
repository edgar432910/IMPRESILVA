
-- familia
use PruebaFINAL
create  table familia(
id_familia int primary key not null identity(1,1),
familiaid nvarchar(20) ,
nombre nvarchar(200) not null,
estado bit not null default 1,
fecha_creacion datetime null,
fecha_actualizacion datetime null
)

-- Marca
create  table marca(
id_marca int primary key not null identity(1,1),
marcaid nvarchar(20) ,
nombre nvarchar(200) not null,
estado bit not null default 1,
fecha_creacion datetime null,
fecha_actualizacion datetime null
)

-- Unidad
create table unidad(
id_unidad int primary key not null identity(1,1),
unidadid nvarchar(20) ,
nombre nvarchar(200) not null,
estado bit not null default 1,
fecha_creacion datetime null,
fecha_actualizacion datetime null
)

-- MarcaVehiculo
create table marca_vehiculo(
id_marca_vehiculo int primary key not null identity(1,1),
marca_vehiculoid nvarchar(20) ,
nombre nvarchar(200) not null,
estado bit not null default 1,
fecha_creacion datetime null,
fecha_actualizacion datetime null
)

-- Proveedor 
create table proveedor(
id_proveedor int primary key not null identity(1,1),
proveedorid nvarchar(20) ,
nombrecomercial nvarchar(200) not null,
direccion nvarchar(200) not null,
ruc nvarchar(200) not null,
telefono nvarchar(200) not null,
estado bit not null default 1,
fecha_creacion datetime null,
fecha_actualizacion datetime null
)
-- Clase 

create table clase(
id_clase int primary key not null identity(1,1),
claseid nvarchar(20) not null,
id_familia int  ,
familiaid nvarchar(20) null,

nombre nvarchar(200) not null,
estado bit not null default 1,

fecha_creacion datetime null,
fecha_actualizacion datetime null,

CONSTRAINT fk_familia FOREIGN KEY (id_familia)
references familia(id_familia)
)

-- Producto 

create table producto (
id_producto int primary key not null identity(1,1),
productoid nvarchar(20) ,

nombre nvarchar(200) not null,
costo nvarchar(200) not null,
pais nvarchar(200) not null,
cod_alterno nvarchar(255)  null,
cod_original nvarchar(255)  not null,
descripcion varchar(255) not null,
facturanumero nvarchar(200),
ganancia nvarchar(255),
moneda  nvarchar(255),
fecha_ingreso datetime2(7) null,

estado bit not null default 1,
fecha_creacion datetime2(7) null,
fecha_actualizacion datetime2(7) null,

id_proveedor int  ,
id_clase int  ,
id_marca int  ,
id_unidad int  ,
id_marca_vehiculo int  ,
proveedorid nvarchar(20) null, 
claseid nvarchar(20) null, 
marcaid nvarchar(20) null, 
unidadid nvarchar(20) null, 
marcavehiculoid nvarchar(20) null, 
CONSTRAINT fk_proveedor FOREIGN KEY (id_proveedor)
references proveedor(id_proveedor),

CONSTRAINT fk_clase FOREIGN KEY (id_clase)
references clase(id_clase),

CONSTRAINT fk_marca FOREIGN KEY (id_marca )
references marca (id_marca),

CONSTRAINT fk_unidad FOREIGN KEY (id_unidad )
references unidad(id_unidad ),

CONSTRAINT fk_marcavehiculo FOREIGN KEY (id_marca_vehiculo )
references marca_vehiculo(id_marca_vehiculo ),


)
-- CONSTRAINT fk_ FOREIGN KEY (id_ ) references (id_ ),
-- select * from clase
-- drop table clase 
use Prueba
go
update clase
set clase.id_familia= f.id_familia
from clase c
inner join familia f
on c.familiaid= f.familiaid