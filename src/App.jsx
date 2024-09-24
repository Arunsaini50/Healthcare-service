import React, { useState } from 'react';
import ServiceList from './Components/ServiceList';
import ServiceForm from './Components/ServiceForm';

function App() {
  const [services, setServices] = useState([]);
  const [editingService, setEditingService] = useState(null);

  // Add new service
  const addService = (service) => {
    setServices([...services, { ...service, id: Date.now() }]);
  };

  // Update existing service
  const updateService = (updatedService) => {
    setServices(
      services.map((service) =>
        service.id === updatedService.id ? updatedService : service
      )
    );
    setEditingService(null);
  };

  // Delete service
  const deleteService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  // Set the service to be edited
  const editService = (service) => {
    setEditingService(service);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 bg-slate-700 text-white p-4">Healthcare Services</h1>
      <ServiceForm
        onAdd={addService}
        onUpdate={updateService}
        editingService={editingService}
      />
      <ServiceList
        services={services}
        onDelete={deleteService}
        onEdit={editService}
      />
    </div>
  );
}

export default App;
