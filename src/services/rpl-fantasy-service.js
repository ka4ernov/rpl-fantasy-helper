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

        const res = await this.getResource(process.env.REACT_APP_RAPID_API_LINK_TEST, options);
        return res.events.map(this._transformMatchData);
    }

    _transformMatchData = (match) => {
        return {
            home: match.home,
            away: match.away,
            winHome: match.periods.num_0.money_line.home,
            winAway: match.periods.num_0.money_line.away,
            draw: match.periods.num_0.money_line.draw,
        }
    }
}

export default RplFantasyService;