class RplFantasyService {
    
    getResource = async (url, options) => {
        let res = await fetch(url, options);

        if (!res.ok) {
            throw new Error(`Failed to get resource ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllMatches = async () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'e684dcb1a9msh5c11db4a6510681p1b5862jsn86e0c0308d64',
                'X-RapidAPI-Host': 'pinnacle-odds.p.rapidapi.com'
            }
        };

        const res = await this.getResource('https://pinnacle-odds.p.rapidapi.com/kit/v1/markets?sport_id=1&event_type=prematch&league_ids=2406&is_have_odds=true', options);
        return res;
    }
}

export default RplFantasyService;