"use client";
import { useState } from "react";
import "@/app/Inventory/Inventory.css";

const initialInventory = [
  { id: 1, name: "Ashwagandha", quantity: 100, unit: "bottles", perItemPrice: 350, expiryDate: "2025-05-01" },
  { id: 2, name: "Brahmi", quantity: 50, unit: "bottles", perItemPrice: 250, expiryDate: "2025-06-01" },
  { id: 3, name: "Turmeric", quantity: 200, unit: "grams", perItemPrice: 120, expiryDate: "2025-08-01" }
];

export default function InventoryManager() {
  const [inventory, setInventory] = useState(initialInventory);
  const [removedProducts, setRemovedProducts] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", quantity: 1, unit: "bottles", perItemPrice: 1, expiryDate: "" });
  const [showModal, setShowModal] = useState(false);
  const [idCounter, setIdCounter] = useState(initialInventory.length + 1);

  const addItem = () => {
    if (!newItem.name || newItem.quantity <= 0 || newItem.perItemPrice <= 0 || !newItem.expiryDate) {
      alert("Please fill out all fields correctly.");
      return;
    }
    const newId = idCounter;
    setInventory([...inventory, { ...newItem, id: newId, price: newItem.quantity * newItem.perItemPrice }]);
    setNewItem({ name: "", quantity: 1, unit: "bottles", perItemPrice: 1, expiryDate: "" });
    setIdCounter(idCounter + 1);
    setShowModal(false);
  };

  const updateQuantity = (id, amount) => {
    setInventory(inventory.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(0, item.quantity + amount), price: (Math.max(0, item.quantity + amount) * item.perItemPrice) }
        : item
    ));
  };

  const deleteItem = (id) => {
    const deletedItem = inventory.find(item => item.id === id);
    setInventory(inventory.filter(item => item.id !== id));
    setRemovedProducts([...removedProducts, deletedItem]);
  };

  const isExpired = (expiryDate) => {
    const today = new Date();
    return new Date(expiryDate) < today;
  };

  return (
    <div className="container">
      <h2 className="productsTitle">Products</h2>
      <div className="buttonContainer">
        <button className="addButton" onClick={() => setShowModal(true)}>Add Item</button>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modalContent">
            <h2>Add New Item</h2>
            <input type="text" value={newItem.name} onChange={(e) => setNewItem({ ...newItem, name: e.target.value })} placeholder="Item Name" className="inputField" />
            <div className="quantityPriceWrapper">
              <input type="number" min="1" value={newItem.quantity} onChange={(e) => setNewItem({ ...newItem, quantity: Math.max(1, parseInt(e.target.value)) })} className="inputField" placeholder="Quantity" />
              <input type="number" min="1" value={newItem.perItemPrice} onChange={(e) => setNewItem({ ...newItem, perItemPrice: Math.max(1, parseFloat(e.target.value)) })} className="inputField" placeholder="Price per Item" />
            </div>
            <input type="date" value={newItem.expiryDate} onChange={(e) => setNewItem({ ...newItem, expiryDate: e.target.value })} className="inputField" />
            <button onClick={addItem} className="confirmButton">Add Item</button>
            <button className="closeButton" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}

      <div className="inventoryTable">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Price (Rs)</th>
              <th>Expiry</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>Rs {item.perItemPrice}</td>
                <td>{isExpired(item.expiryDate) && <span className="expiredIcon">⚠️</span>} {item.expiryDate}</td>
                <td>
                  <button onClick={() => updateQuantity(item.id, 1)} className="quantityButton">+</button>
                  <button onClick={() => updateQuantity(item.id, -1)} className="quantityButton">-</button>
                  <button onClick={() => deleteItem(item.id)} className="deleteButton">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
