export const generateId = (): number => {
    // Crear el item de almacenamiento con un ID único (0001, 0002, etc.)
    // Si no existe el item, se inicializa con 0
    // Si existe, se incrementa en 1 y se formatea con ceros a la izquierda
    const currentId = localStorage.getItem('uniqueId');
    const newId = currentId ? parseInt(currentId) + 1 : 1;
    const formattedId = newId.toString().padStart(4, '0');
    localStorage.setItem('uniqueId', formattedId);
    return Number(formattedId);
}