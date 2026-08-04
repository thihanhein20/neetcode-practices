-- Write your query below
SELECT p.first_name, p.last_name, a.city, a.state from person as p
LEFT JOIN address as a
on p.person_id = a.person_id;