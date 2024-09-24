import React, { useState, useEffect } from 'react';

function ServiceForm({ onAdd, onUpdate, editingService }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (editingService) {
      setName(editingService.name);
      setDescription(editingService.description);
      setPrice(editingService.price);
    } else {
      setName('');
      setDescription('');
      setPrice('');
    }
  }, [editingService]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const service = { name, description, price };
    if (editingService) {
      onUpdate({ ...editingService, ...service });
    } else {
      onAdd(service);
    }
    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <label className="block">Service Name</label>
        <input
          type="text"
          className="border px-2 py-1 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-2">
        <label className="block">Service Description</label>
        <textarea
          className="border px-2 py-1 w-full"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="mb-2">
        <label className="block">Price (Rs)</label>
        <input
          type="number"
          className="border px-2 py-1 w-full"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        {editingService ? 'Update Service' : 'Add Service'}
      </button>
    </form>
  );
}

export default ServiceForm;
