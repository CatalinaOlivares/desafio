CREATE DATABASE PersonasDB;

USE PersonaDB;

CREATE TABLE Personas (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Nombre NVARCHAR(50),
    Apellido NVARCHAR(50),
    Identificacion NVARCHAR(20),
    Genero NVARCHAR(20),
    FechaNacimiento DATE,
    Direccion NVARCHAR(100),
    Empleo NVARCHAR(50),
    Fallecido NVARCHAR(10)
);

INSERT INTO Personas (Nombre, Apellido, Identificacion, Genero, FechaNacimiento, Direccion, Empleo, Fallecido)
VALUES 
('Juanita', 'Perez', '123406789', 'Femenino', '1990-01-01', 'Calle 123', 'Programadora', 'No'),
('Ana', 'Gomez', '987657321', 'Femenino', '1992-03-15', 'Avenida Siempre Viva 742', 'Diseñadora', 'No'),
('Carlos', 'Lopez', '123977456', 'Masculino', '1985-07-20', 'Calle Falsa 123', 'Ingeniero', 'No'),
('Maria', 'Martinez', '321654987', 'Femenino', '1991-11-11', 'Plaza Mayor 456', 'Abogada', 'No'),
('Luis', 'Rodriguez', '756789123', 'Masculino', '1987-09-30', 'Calle del Sol 789', 'Médico', 'No'),
('Mario', 'Perez', '14577789', 'Masculino', '1990-01-01', 'Calle 13', 'Programador', 'No'),
('Juanita', 'Perez', '173456789', 'Femenino', '1990-01-01', 'Calle 123', 'Programadora', 'No'),
('Ana', 'Gomez', '987654311', 'Femenino', '1992-03-15', 'Avenida Siempre Viva 742', 'Diseñadora', 'No'),
('Carlos', 'Lopez', '123987756', 'Masculino', '1985-07-20', 'Calle Falsa 123', 'Ingeniero', 'No'),
('Maria', 'Martinez', '32165498', 'Femenino', '1991-11-11', 'Plaza Mayor 456', 'Abogada', 'No'),
('Luis', 'Rodriguez', '476789123', 'Masculino', '1987-09-30', 'Calle del Sol 789', 'Médico', 'No'),
('Mario', 'Perez', '145737898', 'Masculino', '1990-01-01', 'Calle 13', 'Programador', 'No'),
('Juanita', 'Perez', '12345679', 'Femenino', '1990-01-01', 'Calle 123', 'Programadora', 'No'),
('Ana', 'Gomez', '97657321', 'Femenino', '1992-03-15', 'Avenida Siempre Viva 742', 'Diseñadora', 'No'),
('Carlos', 'Lopez', '12398456', 'Masculino', '1985-07-20', 'Calle Falsa 123', 'Ingeniero', 'No'),
('Maria', 'Martinez', '32165487', 'Femenino', '1991-11-11', 'Plaza Mayor 456', 'Abogada', 'No'),
('Luis', 'Rodriguez', '456789123', 'Masculino', '1987-09-30', 'Calle del Sol 789', 'Médico', 'No'),
('Mario', 'Perez', '14573789', 'Masculino', '1990-01-01', 'Calle 13', 'Programador', 'No');

SELECT * FROM Personas