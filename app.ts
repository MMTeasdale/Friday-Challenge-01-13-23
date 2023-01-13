import mysql from 'mysql';
// Create a connection pool
const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'Mariah',
  password: 'LunaNiver14',
  database: 'classicmodels'
});
// Function to execute a query and return the result
async function query(sql: string, values?: any): Promise<any> {
  const conn = await pool.getConnection();
  try {
    const [rows] = await conn.execute(sql, values);
    return rows;
  } finally {
    conn.release();
  }
}

//CRUD BEGINS HERE :)
// READING OUR DATA
// Example of using the query function to SELECT all items from the ‘customers’ table
async function getAllCustomers(): Promise<any> {
  const sql = 'SELECT * FROM customers';
  return await query(sql);
}
// CREATING NEW DATA
// Example of using the query function to INSERT a new item into the ‘customers’ table
async function insertCustomers(customers: any): Promise<void> {
  const sql = 'INSERT INTO customers SET ?';
  await query(sql, customers);
}
// UPDATING OUR DATA
// Example of using the query function to UPDATE an existing item in the ‘customers’ table
async function updateCustomers(customerNumber: number, updates: any): Promise<void> {
  const sql = 'UPDATE customers SET ? WHERE customerName = ?';
  await query(sql, [updates, customerNumber]);
}
// DELETING OUR DATA 
// Example of using the query function to DELETE an existing item in the ‘customers’ table
async function deleteItem(customerNumber: number): Promise<void> {
  const sql = 'DELETE FROM customers WHERE id = ?';
  await query(sql, customerNumber);
}



