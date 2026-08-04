-- Write your query below
SELECT c.name FROM customers as c
LEFT JOIN orders as o 
on o.customer_id = c.id
where c.id not in (SELECT customer_id from orders)