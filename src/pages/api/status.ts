// src/pages/api/status.ts

import { defineEventHandler, send } from 'h3';

// Definir la interfaz de un monitor
interface Monitor {
  Name: string;
  Status: string;
  Target: string;
  Uptime_Status: string;
}

// Handler de la función para manejar la solicitud GET
export default defineEventHandler(async (event) => {
  // Fetch de los datos de la API de los monitores
  const response = await fetch('https://api.hetrixtools.com/v1/3b329a731b91b40d1851b883982c5efa/uptime/monitors/0/30/');
  const data = await response.json();

  let statusMessage = 'Todo está OK';
  let failingMonitor: Monitor | null = null;
  let hasMaintenance = false;
  let maintenanceMonitors: Monitor[] = [];
  let hasError = false;

  // Iterar sobre los monitores
  const monitors: Monitor[] = data[0];

  for (const monitor of monitors) {
    if (monitor.Uptime_Status !== 'Online') {
      statusMessage = 'Hay un error';
      failingMonitor = monitor;
      hasError = true;
      break;
    }
    if (monitor.Status === 'Maintenance With Notifications' || monitor.Status === 'Maintenance Without Notifications') {
      if (!maintenanceMonitors.includes(monitor)) {
        maintenanceMonitors.push(monitor);
      }
      hasMaintenance = true;
    }
  }

  // Crear la respuesta JSON
  const responseJson = {
    status: statusMessage,
    error: hasError ? {
      name: failingMonitor?.Name,
      link: `https://${failingMonitor?.Target}`
    } : null,
    maintenance: hasMaintenance ? maintenanceMonitors.map(monitor => ({
      name: monitor.Name,
      link: `https://${monitor.Target}`
    })) : []
  };

  // Enviar la respuesta
  return send(event, responseJson);
});
