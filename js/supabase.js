const supabaseUrl = SUPABASE_CONFIG.URL;
const supabaseKey = SUPABASE_CONFIG.ANON_KEY;


const supabase = supabase.createClient(supabaseUrl, supabaseKey);


async function getUserIP() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.error('Error al obtener IP:', error);
        return 'unknown';
    }
}


async function saveEvaluation(personalInfo, country, probability, score, totalQuestions, answers) {
    try {

        const ip = await getUserIP();
        const userAgent = navigator.userAgent;


        const evaluationData = {
            full_name: personalInfo.fullName,
            email: personalInfo.email,
            phone: personalInfo.phone,
            document_type: personalInfo.documentType,
            document_number: personalInfo.documentNumber,
            country: country,
            probability: probability,
            score: score,
            total_questions: totalQuestions,
            answers: answers,
            ip_address: ip,
            user_agent: userAgent
        };


        const { data, error } = await supabase
            .from('evaluations')
            .insert([evaluationData])
            .select();

        if (error) {
            console.error('Error al guardar evaluación:', error);
            return null;
        }

        console.log('Evaluación guardada:', data);
        return data[0]; 
        } catch (error) {
        console.error('Error:', error);
        return null;
    }
}


async function saveRecommendations(evaluationId, recommendations) {
    try {
        const recommendationsData = recommendations.map(rec => ({
            evaluation_id: evaluationId,
            recommendation_type: rec.type || 'general',
            content: rec.content
        }));

        const { data, error } = await supabase
            .from('recommendations')
            .insert(recommendationsData)
            .select();

        if (error) {
            console.error('Error al guardar recomendaciones:', error);
            return false;
        }

        console.log('Recomendaciones guardadas:', data);
        return true;
    } catch (error) {
        console.error('Error:', error);
        return false;
    }
}


async function getEvaluations(limit = 50) {
    try {
        const { data, error } = await supabase
            .from('evaluaciones')
            .select(`
                *,
                recomendaciones (*)
            `)
            .order('created_at', { ascending: false })
            .limit(limit);

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error al obtener evaluaciones:', error);
        return [];
    }
}


window.SupabaseDB = {
    saveEvaluation,
    saveRecommendations,
    getEvaluations,
    supabase
};