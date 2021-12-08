INSERT INTO departement (id, name)
VALUES (1, "customer service"),
       (2,"management"),
       (3, "kitchen"),
       (4, "HR");
       
INSERT INTO role (id, title, salary, departement_id)
VALUES (1, "sales", 100000, 5),
       (2, "Manager", 100000, 6),
       (3, "Web Dev",80000 ,7),
       (4, "Director",70000 ,8 );
      

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Mike", "Achebe", sales, 5),
       (2, "Slima", "Ayoubi", "Manager",6),
       (3, "Debbie", "Wili", "Web Dev"),
       (4, "Richard", "Jhones", "Director"); 