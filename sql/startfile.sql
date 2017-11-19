use nodely;

CREATE TABLE `names` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `first` char(25) DEFAULT NULL,
  `last` char(25) DEFAULT NULL,
  `address` char(50) DEFAULT NULL,
  `city` char(25) DEFAULT NULL,
  `state` char(2) DEFAULT NULL,
  `zip` char(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

INSERT INTO `names` (`first`, `last`, `address`, `city`, `state`, `zip`)
VALUES
	('Tom', 'Sawyer', '22 Memory lane', 'St. Petersburg', 'MS', '63301');

INSERT INTO `names` (`first`, `last`, `address`, `city`, `state`, `zip`)
VALUES
	('Nancy', 'Pelosi', '11 Atlas Peak Road', 'Napa', 'CA', '94558');
		
INSERT INTO `names` (`first`, `last`, `address`, `city`, `state`, `zip`)
VALUES
	('Long John', 'Silver', '800 Colusa Ave', 'Yuba City', 'CA', '95991');
	
INSERT INTO `names` (`first`, `last`, `address`, `city`, `state`, `zip`)
VALUES
	('Colin', 'Kaepernick', '2700 Post Oak Boulevard', 'Houston', 'TX', '77056-5785');
	
INSERT INTO `names` (`first`, `last`, `address`, `city`, `state`, `zip`)
VALUES
	('Ronald', 'McDonald', '1700 NE Purcell Blvd', 'Bend', 'OR', '97701');

INSERT INTO `names` (`first`, `last`, `address`, `city`, `state`, `zip`)
VALUES
	('Paul', 'Hewson', '345 California Street', 'San Francisco', 'CA', '94104');
	
INSERT INTO `names` (`first`, `last`, `address`, `city`, `state`, `zip`)
VALUES
	('David', 'Letterman', 'Mamas Farm', 'North Salem', 'NY', '10560');
	
INSERT INTO `names` (`first`, `last`, `address`, `city`, `state`, `zip`)
VALUES
    ('Paul', 'Thorn', '894 Barton Woods Road', 'Atlanta', 'GA', '30307');
    
INSERT INTO `names` (`first`, `last`, `address`, `city`, `state`, `zip`)
VALUES
    ('Bilbo', 'Baggins', 'Bag End', 'Elizabeth River Shire', 'VA', '23669');
	
INSERT INTO `names` (`first`, `last`, `address`, `city`, `state`, `zip`)
VALUES
    (' Lupe', 'Fiasco', '555 Washington Ave', 'Miami Beach', 'FL', '33139');