
-- use BDNORMALIZADO
drop table producto
drop table clase
drop table familia
drop table marca
drop table marca_vehiculo
drop table proveedor
drop table unidad
-- familia
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
nombre nvarchar(255) not null,
estado bit not null default 1,
fecha_creacion datetime null,
fecha_actualizacion datetime null
)
-- MarcaVehiculo
create table marca_vehiculo(
id_marca_vehiculo int primary key not null identity(1,1),
marcavehiculoid nvarchar(20) ,
nombre nvarchar(255) not null,
estado bit not null default 1,
fecha_creacion datetime null,
fecha_actualizacion datetime null
)


-- Proveedor 
create table proveedor(
id_proveedor int primary key not null identity(1,1),
ruc nvarchar(255)  null,
proveedorid nvarchar(255) null,
razonsocial nvarchar(255) null,
nombrecomercial nvarchar(255) null,
departamento nvarchar(255)  null,
provincia nvarchar(255)  null,
distrito nvarchar(255)  null,
direccion nvarchar(255)  null,
telefono nvarchar(255)  null,
estado bit not null default 1,
fecha_creacion datetime null,
fecha_actualizacion datetime null
)

-- Moneda
create table moneda(
    id_moneda int primary key not null identity(1,1),
    monedaid nvarchar(3),
    nombre nvarchar(25) null
)

-- Clase 

create table clase(
id_clase int primary key not null identity(1,1),
claseid nvarchar(20) not null,
id_familia int  ,
familiaid nvarchar(20) null,

nombre nvarchar(200) not null,
utilidad money null,
estado bit not null default 1,

fecha_creacion datetime null,
fecha_actualizacion datetime null,

CONSTRAINT fk_familia FOREIGN KEY (id_familia)
references familia(id_familia)
)



-- Producto 

create table producto (
id_producto int primary key not null identity(1,1),
productoid nvarchar(30) ,
codigo1 nvarchar(35)  null,
codigo2 nvarchar(35)  null,
nombre1 nvarchar(250)  null,
nombre2 nvarchar(50)  null,
factura1 nvarchar(20)  null,
factura2 nvarchar(20)  null,
factura3 nvarchar(20)  null,
costo money null,
pais nvarchar(3)  null,

estado bit not null default 1,
fecha_creacion smalldatetime null,
fecha_actualizacion smalldatetime null,

id_proveedor int  ,
id_clase int  ,
id_marca int  ,
id_unidad int  ,
id_marca_vehiculo int  ,
id_moneda int,
proveedorid nvarchar(5) null, 
claseid nvarchar(20) not null, 
marcaid nvarchar(20) null, 
unidadid nvarchar(20) not null, 
marcavehiculoid int null, 

monedaid nvarchar(3) null,
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


CONSTRAINT fk_moneda FOREIGN KEY (id_moneda )
references moneda(id_moneda ),

)
<!-- -- Factura 
create table factura_compra(
id_factura_compra int primary key not null identity(1,1),
registro nvarchar(20) ,
registro2 nvarchar(20) ,
registro3 nvarchar(20) ,
proveedorid nvarchar(5),
id_proveedor int,
estado bit not null default 1,
fecha_creacion datetime null,
fecha_actualizacion datetime null,
CONSTRAINT fk_factura_proveedor FOREIGN KEY (id_proveedor)
references proveedor(id_proveedor)
) -->
-- CONSTRAINT fk_ FOREIGN KEY (id_ ) references (id_ ),
-- select * from clase
-- drop table clase 
use Prueba
go
# Enlazar columnas 

-- UPDATE
update clase
set clase.id_familia= f.id_familia
from clase c
inner join familia f
on c.familiaid= f.familiaid

-- clase producto
update producto
set producto.id_clase= c.id_clase
from producto p
inner join clase c
on p.claseid= c.claseid

-- proveedor
update producto
set producto.id_proveedor= pro.id_proveedor
from producto p
inner join proveedor pro
on p.proveedorid= pro.proveedorid

-- MarcaVehiculo
update producto
set producto.id_marca_vehiculo= m.id_marca_vehiculo
from producto p
inner join marca_vehiculo m
on p.marcavehiculoid= m.marcavehiculoid

-- Unidad
update producto
set producto.id_unidad= u.id_unidad
from producto p
inner join unidad u
on p.unidadid= u.unidadid

-- Marca
update producto
set producto.id_marca = m.id_marca
from producto p
inner join marca m
on p.marcaid= m.marcaid

-- Moneda
update producto
set producto.id_moneda = m.id_moneda
from producto p
inner join moneda m
on p.monedaid= m.monedaid

# Eliminar columnas de mas 
ALTER TABLE familia DROP COLUMN familiaid 
ALTER TABLE marca DROP COLUMN marcaid
ALTER TABLE unidad DROP COLUMN unidadid
ALTER TABLE marca_vehiculo DROP COLUMN marcavehiculoid
ALTER TABLE proveedor DROP COLUMN proveedorid
ALTER TABLE moneda DROP COLUMN monedaid
ALTER TABLE clase DROP COLUMN claseid, familiaid
ALTER TABLE  DROP COLUMN

ALTER TABLE producto DROP COLUMN 
productoid,
proveedorid, 
claseid , 
marcaid, 
unidadid , 
marcavehiculoid 

-- Creacion de querys para la migracion 
--Familia
SELECT Fam_Codigo AS familiaid, Fam_Nombre AS nombre
FROM Familia

--CLase
Select Cla_Codigo as claseid, Cla_Nombre as nombre, Cla_CodFamilia as familiaid , Cla_PorcUtilidad as utilidad from Clase

--Unidad
Select Und_Codigo as unidadid , Und_Nombre as nombre from Unidad

--Marca
select Mar_Codigo as marcaid, Mar_Nombre as nombre from Marca

-- Proveedor
select CODIGO as proveedorid, [Nombre Comercial] as nombrecomercial,
Direccion as direccion, RazonSocial as razonsocial,
Departamento as departamento, Provincia as provincia,
Distrito as distrito, NumeroRuc as ruc,
Telefono as telefono from Proveedores$

-- MarcaVehiculo
select  CODIGO as marcavehiculoid, MarcaVehiculo as nombre from MARCAVEHI$ 

-- MOneda
select Mon_Codigo as monedaid, Mon_Nombre as nombre from Moneda
-- Producto
select Pro_Codigo as productoid, Pro_Codigo2 as codigo1, Pro_Codigo3 as codigo2,
Pro_Nombre1_1 as nombre1, Pro_Nombre2_2 as nombre2, Pro_Modelo1 as factura1, Pro_Modelo2 as factura2, Pro_Modelo2 as factura3,
 Pro_CodMoneda as monedaid, Pro_Costo as costo, Pro_CodPais as pais, Pro_CodProveedor as proveedorid,Pro_CodClase as claseid, Pro_CodMarca as marcaid,
Pro_CodUnidad as unidadid , Pro_CodMarVehiculo as marcavehiculoid, Pro_FechaCreacion as fecha_creacion, Pro_FechaEdicion as fecha_actualizacion
from Producto

select * from Producto
SELECT Pro_Codigo AS productoid, Pro_Codigo2 AS codigo1, Pro_Codigo3 AS codigo2, Pro_Nombre1_1 AS nombre1, Pro_Nombre2_2 AS nombre2, Pro_Modelo1 AS factura1, Pro_Modelo2 AS factura2, Pro_Modelo2 AS factura3, 
 Pro_CodMoneda AS monedaid, Pro_Costo AS costo, Pro_CodPais AS pais, Pro_CodProveedor AS proveedorid, Pro_CodClase AS claseid, Pro_CodMarca AS marcaid, Pro_CodUnidad AS unidadid, 
Pro_CodMarVehiculo AS marcavehiculoid, Pro_FechaCreacion AS fecha_creacion, Pro_FechaEdicion AS fecha_actualizacion
FROM Producto



-- TODO MONDEDA, DOLARES, CLASE, UTILIDAD
-- TODO tabla factura, campos registro1,registro2, fecha 
select * from Producto

select * from Clase
select * from Moneda


-- SCRIPT ROLES

INSERT INTO usuario( nombre, clave, estado) values ( 'mitotest21@gmail.com', '$2a$10$ju20i95JTDkRa7Sua63JWOChSBc0MNFtG/6Sps2ahFFqN.HCCUMW.', '1');
INSERT INTO usuario( nombre, clave, estado) values ('mitocode21@gmail.com', '$2a$10$ju20i95JTDkRa7Sua63JWOChSBc0MNFtG/6Sps2ahFFqN.HCCUMW.', '1');

INSERT INTO Rol ( nombre, descripcion) VALUES ( 'ADMIN', 'Administrador');
INSERT INTO Rol (nombre, descripcion) VALUES ('USER', 'Usuario');
INSERT INTO Rol (nombre, descripcion) VALUES ('DBA', 'Admin de bd');

INSERT INTO usuario_rol (id_usuario, id_rol) VALUES (1, 1);
INSERT INTO usuario_rol (id_usuario, id_rol) VALUES (1, 3);
INSERT INTO usuario_rol (id_usuario, id_rol) VALUES (2, 2);

select * from usuario_rol
select * from menu

INSERT INTO menu( nombre, icono, url) VALUES ( 'Inicio', 'home', '/pages/inicio');
INSERT INTO menu( nombre, icono, url) VALUES ( 'Buscar', 'search', '/pages/buscar');
INSERT INTO menu( nombre, icono, url) VALUES ( 'Registrar F', 'insert_drive_file', '/pages/familia');
INSERT INTO menu( nombre, icono, url) VALUES ( 'Registrar C.', 'insert_drive_file', '/pages/clase');
INSERT INTO menu( nombre, icono, url) VALUES ( 'Registrar M.', 'view_carousel', '/pages/marca');
INSERT INTO menu( nombre, icono, url) VALUES ( 'Registrar MarcaVehiculo', 'star_rate', '/pages/marcavehiculo');
INSERT INTO menu( nombre, icono, url) VALUES ( 'Unidad', 'healing', '/pages/unidad');
INSERT INTO menu( nombre, icono, url) VALUES ( 'Proveedor', 'assignment', '/pages/proveedor');
INSERT INTO menu( nombre, icono, url) VALUES ( 'Producto', 'accessibility', '/pages/producto');
INSERT INTO menu( nombre, icono, url) VALUES ( 'Almacen', 'assessment', '/pages/almacen');


INSERT INTO menu_rol (id_menu, id_rol) VALUES (1, 1);
INSERT INTO menu_rol (id_menu, id_rol) VALUES (2, 1);
INSERT INTO menu_rol (id_menu, id_rol) VALUES (3, 1);
INSERT INTO menu_rol (id_menu, id_rol) VALUES (4, 1);
INSERT INTO menu_rol (id_menu, id_rol) VALUES (5, 1);
INSERT INTO menu_rol (id_menu, id_rol) VALUES (6, 1);
INSERT INTO menu_rol (id_menu, id_rol) VALUES (7, 1);
INSERT INTO menu_rol (id_menu, id_rol) VALUES (8, 1);
INSERT INTO menu_rol (id_menu, id_rol) VALUES (9, 1);
INSERT INTO menu_rol (id_menu, id_rol) VALUES (10, 1);
INSERT INTO menu_rol (id_menu, id_rol) VALUES (1, 2);
INSERT INTO menu_rol (id_menu, id_rol) VALUES (3, 2);
INSERT INTO menu_rol (id_menu, id_rol) VALUES (4, 2);
INSERT INTO menu_rol (id_menu, id_rol) VALUES (5, 2);
INSERT INTO menu_rol (id_menu, id_rol) VALUES (6, 2);
select * from menu_rol
select * from usuario_rol

select m.* 
from menu_rol mr 
inner join usuario_rol ur on ur.id_rol = mr.id_rol 
inner join menu m on m.id_menu = mr.id_menu 
inner join usuario u on u.id_usuario = ur.id_usuario 
where u.nombre = 'mitotest21@gmail.com'


create table oauth_access_token (
  token_id VARCHAR(256),
  token binary,
  authentication_id VARCHAR(256),
  user_name VARCHAR(256),
  client_id VARCHAR(256),
  authentication binary,
  refresh_token VARCHAR(256)
);
VARBINARY(MAX).

