INSERT INTO products (name, price, image_url)
VALUES ($1, $2, $3);
SELECT * FROM products
order by product_id

-- [name, price, image_url]