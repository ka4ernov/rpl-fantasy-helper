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
                'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST
            }
        };

        const res = await this.getResource('https://pinnacle-odds.p.rapidapi.com/kit/v1/markets?sport_id=1&event_type=prematch&league_ids=2406&is_have_odds=true', options);
        return res;
    }
}

export default RplFantasyService;