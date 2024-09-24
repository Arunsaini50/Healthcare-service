import React from 'react';

function ServiceList({ services, onDelete, onEdit }) {
  if (services.length === 0) {
    return <p>No services available.</p>;
  }

  return (
    <ul className="list-disc pl-5">
      {services.map((service) => (
        <li key={service.id} className="mb-2">
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold">{service.name}</h3>
              <p>{service.description}</p>
              <p>Rs{service.price}</p>
            </div>
            <div>
              <button
                onClick={() => onEdit(service)}
                className="text-blue-500 mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(service.id)}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ServiceList;
