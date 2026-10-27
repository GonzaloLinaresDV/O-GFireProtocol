// Inicializar iconos de Lucide
lucide.createIcons();

// Manejo del menú desplegable móvil
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Configuraciones globales para Chart.js en tema oscuro
Chart.defaults.color = '#9ca3af';
Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.08)';

window.addEventListener('DOMContentLoaded', () => {
    // 1. Gráfico Donut: Zona Ex
    const ctxZone = document.getElementById('zoneDonutChart');
    if (ctxZone) {
        new Chart(ctxZone.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ['Zona 0: Prohibida Inst.', 'Zona 1: Gabinetes', 'Zona 2: Vías de Evacuación'],
                datasets: [{
                    data: [35, 45, 20],
                    backgroundColor: ['#ef4444', '#f59e0b', '#3b82f6'],
                    borderWidth: 2,
                    borderColor: '#111827'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { boxWidth: 12, font: { size: 10 } }
                    }
                }
            }
        });
    }

    // 2. Gráfico Radar: Rendimiento de Sistemas
    const ctxRadar = document.getElementById('radarChart');
    if (ctxRadar) {
        new Chart(ctxRadar.getContext('2d'), {
            type: 'radar',
            data: {
                labels: ['Resistencia Vibración', 'Recarga en Sitio', 'Distancia Descarga', 'Facilidad Taller', 'Durabilidad Acero'],
                datasets: [
                    {
                        label: 'Operado por Cartucho',
                        data: [95, 90, 85, 75, 90],
                        backgroundColor: 'rgba(249, 115, 22, 0.2)',
                        borderColor: '#f97316',
                        borderWidth: 2,
                        pointBackgroundColor: '#f97316'
                    },
                    {
                        label: 'Presión Contenida',
                        data: [50, 40, 70, 90, 80],
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        borderColor: '#3b82f6',
                        borderWidth: 2,
                        pointBackgroundColor: '#3b82f6'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        grid: { color: 'rgba(255, 255, 255, 0.08)' },
                        angleLines: { color: 'rgba(255, 255, 255, 0.08)' },
                        pointLabels: { font: { size: 10 } },
                        ticks: { display: false, max: 100 }
                    }
                },
                plugins: { legend: { display: false } }
            }
        });
    }

    // 3. Gráfico de Barras: Eficacia de Agentes
    const ctxEfficacy = document.getElementById('efficacyBarChart');
    if (ctxEfficacy) {
        new Chart(ctxEfficacy.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Clase A (Sólidos)', 'Clase B (Líquidos/Gas)', 'Clase C (Eléctricos)'],
                datasets: [
                    {
                        label: 'Purple-K (PKP)',
                        data: [40, 100, 90],
                        backgroundColor: '#8b5cf6',
                        borderRadius: 4
                    },
                    {
                        label: 'PQS Multipropósito ABC',
                        data: [85, 75, 80],
                        backgroundColor: '#f59e0b',
                        borderRadius: 4
                    },
                    {
                        label: 'CO2 (Dióxido de Carbono)',
                        data: [10, 50, 100],
                        backgroundColor: '#0ea5e9',
                        borderRadius: 4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: { beginAtZero: true, max: 100, grid: { color: 'rgba(255, 255, 255, 0.05)' } },
                    x: { grid: { display: false } }
                },
                plugins: { legend: { display: false } }
            }
        });
    }

    // 4. Gráfico de Barras Horizontales: Mantenimiento
    const ctxMaint = document.getElementById('maintenanceBarChart');
    if (ctxMaint) {
        new Chart(ctxMaint.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Inspección Visual Mensual', 'Mantenimiento Técnico Anual', 'Prueba Hidrostática CO2', 'Prueba Hidrostática PQS'],
                datasets: [{
                    data: [1, 12, 60, 144],
                    backgroundColor: ['#10b981', '#0ea5e9', '#f59e0b', '#ef4444'],
                    borderRadius: 4
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: { beginAtZero: true, grid: { color: 'rgba(255, 255, 255, 0.05)' }, title: { display: true, text: 'Meses', color: '#9ca3af' } },
                    y: { grid: { display: false } }
                },
                plugins: { legend: { display: false } }
            }
        });
    }
});