CREATE TABLE Users(
	userID INT PRIMARY KEY AUTO_INCREMENT,
	firstName VARCHAR(30),
    lastName VARCHAR(30),
    gender VARCHAR(10),
	cellphoneNumber VARCHAR(12),
    emailAdd VARCHAR(45) UNIQUE,
    userPass TEXT,
    userRole VARCHAR(5),
    userProfile TEXT,
    joinDate DATE
);

CREATE TABLE Products(
	id INT PRIMARY KEY AUTO_INCREMENT,
    prodName VARCHAR(50),
    prodDescription TEXT,
    category VARCHAR(25),
    price DECIMAL(10,2),
    prodQuantity INT,
    imgURL TEXT,
    userID INT,
    CONSTRAINT user_product FOREIGN KEY(userID)
    REFERENCES Users(userID)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

SELECT * FROM Products;
