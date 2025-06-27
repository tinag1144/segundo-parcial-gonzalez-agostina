import { Book } from "../models/book.model.js"; // Agrega esta línea

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll(); // Usa el modelo correcto
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Error al traer libros", error });
  }
};

export const getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findByPk(id);
    if (!book) return res.status(404).json({ message: "Libro no encontrado" });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: "Error al buscar libro", error });
  }
};

export const createBook = async (req, res) => {
  const { title, author, pages, genre, description } = req.body;

  if (!title || !author || !pages || !genre) {
    return res.status(400).json({ message: "Faltan campos obligatorios" });
  }

  if (!Number.isInteger(pages) || pages < 1) {
    return res.status(400).json({ message: "La cantidad de páginas debe ser un número positivo" });
  }

  try {
    const exists = await Book.findOne({ where: { title } });
    if (exists) return res.status(400).json({ message: "Ya existe un libro con ese título" });

    const newBook = await Book.create({ title, author, pages, genre, description });
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: "Error al crear libro", error });
  }
};

export const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, pages, genre, description } = req.body;

  if (!title || !author || !pages || !genre) {
    return res.status(400).json({ message: "Faltan campos obligatorios" });
  }

  if (!Number.isInteger(pages) || pages < 1) {
    return res.status(400).json({ message: "La cantidad de páginas debe ser un número positivo" });
  }

  try {
    const book = await Book.findByPk(id);
    if (!book) return res.status(404).json({ message: "Libro no encontrado" });

    const titleExists = await Book.findOne({ where: { title } });
    if (titleExists && titleExists.id !== Number(id)) {
      return res.status(400).json({ message: "Ya existe otro libro con ese título" });
    }

    await book.update({ title, author, pages, genre, description });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar libro", error });
  }
};

export const deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findByPk(id);
    if (!book) return res.status(404).json({ message: "Libro no encontrado" });

    await book.destroy();
    res.status(200).json({ message: "Libro eliminado con éxito" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar libro", error });
  }
};

