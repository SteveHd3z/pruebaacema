import { useState } from "react";
import { useAppContext } from "../../context/appContext";
import "./Search.css";

function Search() {
    const { users, setUsers } = useAppContext();
    const [query, setQuery] = useState("");
    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [selected, setSelected] = useState(null);
    const [editForm, setEditForm] = useState({});

    const filtered = users.filter(u =>
        u.user.name.first.toLowerCase().includes(query.toLowerCase()) ||
        u.user.name.last.toLowerCase().includes(query.toLowerCase()) ||
        u.user.email.toLowerCase().includes(query.toLowerCase())
    );

    function handleEditOpen(u) {
        setSelected(u);
        setEditForm({
            first: u.user.name.first,
            last: u.user.name.last,
            email: u.user.email,
            phone: u.user.phone,
        });
        setEditOpen(true);
    }

    function handleEditSave() {
        setUsers(users.map(u =>
            u === selected
                ? { ...u, user: { ...u.user, name: { ...u.user.name, first: editForm.first, last: editForm.last }, email: editForm.email, phone: editForm.phone } }
                : u
        ));
        setEditOpen(false);
    }

    function handleDeleteOpen(u) {
        setSelected(u);
        setDeleteOpen(true);
    }

    function handleDeleteConfirm() {
        setUsers(users.filter(u => u !== selected));
        setDeleteOpen(false);
    }

    return (
        <div className="search-container">
            <h1>Buscar usuarios</h1>

            <input
                className="search-input"
                type="text"
                placeholder="Buscar por nombre o email..."
                value={query}
                onChange={e => setQuery(e.target.value)}
            />

            {filtered.length === 0 ? (
                <p className="no-results">No se encontraron usuarios.</p>
            ) : (
                <table className="search-table">
                    <thead>
                        <tr>
                            <th>Foto</th>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Teléfono</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((u, i) => (
                            <tr key={i}>
                                <td><img src={u.user.picture.thumbnail} alt={u.user.name.first} /></td>
                                <td style={{ textTransform: "capitalize" }}>{u.user.name.first} {u.user.name.last}</td>
                                <td>{u.user.email}</td>
                                <td>{u.user.phone}</td>
                                <td>
                                    <button className="btn-edit" onClick={() => handleEditOpen(u)}>Editar</button>
                                    <button className="btn-delete" onClick={() => handleDeleteOpen(u)}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {/* Modal editar */}
            {editOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>Editar usuario</h2>
                        <div className="modal-field">
                            <label>Nombre</label>
                            <input value={editForm.first || ""} onChange={e => setEditForm({ ...editForm, first: e.target.value })} />
                        </div>
                        <div className="modal-field">
                            <label>Apellido</label>
                            <input value={editForm.last || ""} onChange={e => setEditForm({ ...editForm, last: e.target.value })} />
                        </div>
                        <div className="modal-field">
                            <label>Email</label>
                            <input value={editForm.email || ""} onChange={e => setEditForm({ ...editForm, email: e.target.value })} />
                        </div>
                        <div className="modal-field">
                            <label>Teléfono</label>
                            <input value={editForm.phone || ""} onChange={e => setEditForm({ ...editForm, phone: e.target.value })} />
                        </div>
                        <div className="modal-actions">
                            <button className="btn-cancel" onClick={() => setEditOpen(false)}>Cancelar</button>
                            <button className="btn-confirm" onClick={handleEditSave}>Guardar</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal confirmar eliminación */}
            {deleteOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>Eliminar usuario</h2>
                        <p>¿Seguro que deseas eliminar a <strong>{selected?.user.name.first} {selected?.user.name.last}</strong>?</p>
                        <div className="modal-actions">
                            <button className="btn-cancel" onClick={() => setDeleteOpen(false)}>Cancelar</button>
                            <button className="btn-confirm-delete" onClick={handleDeleteConfirm}>Eliminar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Search;