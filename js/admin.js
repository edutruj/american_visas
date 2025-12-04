document.addEventListener('DOMContentLoaded', async function() {
    let currentPage = 0;
    const limit = 10;


    async function loadStatistics() {
        try {
            const evaluations = await SupabaseDB.getEvaluations(1000);
            

            document.getElementById('total-evaluations').textContent = evaluations.length;
            

            const today = new Date().toISOString().split('T')[0];
            const todayEvals = evaluations.filter(ev => 
                ev.created_at.split('T')[0] === today
            );
            document.getElementById('today-evaluations').textContent = todayEvals.length;
            

            const avgProb = evaluations.reduce((sum, ev) => sum + (ev.probability || 0), 0) / evaluations.length;
            document.getElementById('avg-probability').textContent = avgProb.toFixed(1) + '%';
        } catch (error) {
            console.error('Error al cargar estadísticas:', error);
        }
    }

    async function loadEvaluations(page = 0) {
        try {
            const evaluations = await SupabaseDB.getEvaluations(limit * (page + 1));
            displayEvaluations(evaluations);
            currentPage = page;

            document.getElementById('load-more').style.display = 
                evaluations.length < limit * (page + 1) ? 'none' : 'block';
        } catch (error) {
            console.error('Error al cargar evaluaciones:', error);
        }
    }

    function displayEvaluations(evaluations) {
        const tbody = document.getElementById('evaluations-list');
        tbody.innerHTML = '';
        
        evaluations.forEach(ev => {
            const row = document.createElement('tr');
            const date = new Date(ev.created_at).toLocaleDateString('es-ES');
            
            row.innerHTML = `
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${date}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${ev.full_name}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${ev.email}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${ev.country}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${ev.probability >= 80 ? 'bg-green-100 text-green-800' : 
                          ev.probability >= 60 ? 'bg-yellow-100 text-yellow-800' : 
                          ev.probability >= 40 ? 'bg-orange-100 text-orange-800' : 
                          'bg-red-100 text-red-800'}">
                        ${ev.probability ? ev.probability.toFixed(1) + '%' : 'N/A'}
                    </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button onclick="viewDetails('${ev.id}')" class="text-blue-600 hover:text-blue-900 mr-3">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button onclick="deleteEvaluation('${ev.id}')" class="text-red-600 hover:text-red-900">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    window.viewDetails = async function(id) {
        alert(`Ver detalles de evaluación ${id}\nEsta funcionalidad se puede expandir.`);
    };

    window.deleteEvaluation = async function(id) {
        if (confirm('¿Estás seguro de eliminar esta evaluación?')) {
            try {
                const { error } = await SupabaseDB.supabase
                    .from('evaluations')
                    .delete()
                    .eq('id', id);
                
                if (error) throw error;
                alert('Evaluación eliminada');
                loadEvaluations(currentPage);
                loadStatistics();
            } catch (error) {
                console.error('Error al eliminar:', error);
                alert('Error al eliminar evaluación');
            }
        }
    };


    document.getElementById('load-more').addEventListener('click', () => {
        loadEvaluations(currentPage + 1);
    });


    loadStatistics();
    loadEvaluations(0);
});