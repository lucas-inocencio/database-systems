if __name__ == "__main__":
    import sqlite3
    
    # create a connection to the database
    conn = sqlite3.connect("vacinacao.db")
    cursor = conn.cursor()
    # create a table to store vaccination data
    with open("./create_database.sql", "r") as sql_file:
        cursor.executescript(sql_file.read())
    # create a table to store vaccination data
    cursor.execute(
        """
        CREATE TABLE IF NOT EXISTS vacinacao (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            idade INTEGER NOT NULL,
            vacina TEXT NOT NULL,
            data DATE NOT NULL
        )
        """
    )
    
    # close the connection
    conn.commit()
    conn.close()