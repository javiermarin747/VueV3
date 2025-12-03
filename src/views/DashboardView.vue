<script setup>
const devices = [
  {
    name: 'Pivot Norte',
    status: 'Activo',
    flow: '180 m³/h',
    pressure: '2.8 bar',
  },
  {
    name: 'Bomba Pozo 1',
    status: 'Standby',
    flow: '0 m³/h',
    pressure: '1.0 bar',
  },
  {
    name: 'Variador Sector A',
    status: 'Activo',
    flow: '120 m³/h',
    pressure: '3.1 bar',
  },
];
</script>

<template>
  <section class="dashboard">
    <div class="panel">
      <header class="panel-header">
        <div>
          <p class="eyebrow">Resumen</p>
          <h2>Monitoreo IoT</h2>
          <p class="muted">Vista inicial para probar autenticación y estilos. Integra tus datos de pivots y riego aquí.</p>
        </div>
        <div class="actions">
          <button class="secondary" type="button">Actualizar</button>
          <button class="primary" type="button">Nuevo dispositivo</button>
        </div>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <p class="muted">Activos</p>
          <h3>2</h3>
          <p class="tag green">En línea</p>
        </div>
        <div class="stat-card">
          <p class="muted">Alerta</p>
          <h3>1</h3>
          <p class="tag amber">Chequeo</p>
        </div>
        <div class="stat-card">
          <p class="muted">Caudal medio</p>
          <h3>165 m³/h</h3>
          <p class="tag">Última hora</p>
        </div>
        <div class="stat-card">
          <p class="muted">Cobertura</p>
          <h3>3.2 km²</h3>
          <p class="tag">Riego estimado</p>
        </div>
      </div>

      <div class="devices">
        <h4>Dispositivos</h4>
        <div class="device-list">
          <article v-for="device in devices" :key="device.name" class="device-card">
            <div>
              <p class="muted">{{ device.status }}</p>
              <h5>{{ device.name }}</h5>
            </div>
            <div class="device-metrics">
              <span>{{ device.flow }}</span>
              <span>{{ device.pressure }}</span>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
