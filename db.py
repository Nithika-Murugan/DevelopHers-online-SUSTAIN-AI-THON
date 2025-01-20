import sqlite3

# Connect to SQLite database (creates the database if it doesn't exist)
connection = sqlite3.connect("materials.db")

# Create a cursor object to execute SQL commands
cursor = connection.cursor()

# Create a table to store material details
cursor.execute('''
CREATE TABLE IF NOT EXISTS materials (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    material_name TEXT NOT NULL,
    supplier_name TEXT NOT NULL,
    batch_number TEXT NOT NULL,
    item_code TEXT NOT NULL,
    location TEXT NOT NULL,
    qr_code TEXT NOT NULL
)
''')

# Commit changes and close the connection
connection.commit()
connection.close()

print("Database and table created successfully.")
