-- Nessun identificativo: solo città, versione, risposte e giorno (senza ora).
CREATE TABLE IF NOT EXISTS submissions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  day TEXT NOT NULL,
  city TEXT NOT NULL,
  version TEXT NOT NULL,
  answers TEXT NOT NULL,
  important TEXT NOT NULL DEFAULT '[]'
);
CREATE INDEX IF NOT EXISTS idx_submissions_city ON submissions (city);
