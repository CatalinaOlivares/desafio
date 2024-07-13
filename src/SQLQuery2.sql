
USE PersonasDB;

CREATE TABLE Logins (
	Id INT PRIMARY KEY IDENTITY(1,1),
    Identificacion NVARCHAR(20) NOT NULL,
    Username NVARCHAR(50) NOT NULL,
    Password NVARCHAR(256) NOT NULL,


);



INSERT INTO Logins (Identificacion, Username, Password)
VALUES 
('123406789', 'juanita.perez', 'password1'),
('987657321', 'ana.gomez', 'password2'),
('123977456', 'carlos.lopez', 'password3' ),
('321654987', 'maria.martinez', 'password4'),
('756789123', 'luis.rodriguez', 'password5'),
('14577789', 'mario.perez', 'password6'),
('173456789', 'juanita.perez2', 'password7'),
('987654311', 'ana.gomez2', 'password8'),
('123987756', 'carlos.lopez2', 'password9'),
('32165498', 'maria.martinez2', 'password10'),
('476789123', 'luis.rodriguez2', 'password11'),
('145737898', 'mario.perez2', 'password12'),
('12345679', 'juanita.perez3', 'password13'),
('97657321', 'ana.gomez3', 'password14'),
('12398456', 'carlos.lopez3', 'password15'),
('32165487', 'maria.martinez3', 'password16'),
('456789123', 'luis.rodriguez3', 'password17'),
('14573789', 'mario.perez3', 'password18');

SELECT * FROM Logins