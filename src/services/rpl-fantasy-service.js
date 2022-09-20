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

        const res = await this.getResource('https://pinnacle-odds.p.rapidapi.com/kit/v1/markets?sport_id=1&event_type=prematch&league_ids=2686&is_have_odds=true', options);
        return res.events.map(this._transformMatchData);
    }

    _transformMatchData = (match) => {
        return {
            eventId: match.event_id,
            home: match.home,
            away: match.away,
            winHome: match.periods.num_0.money_line.home,
            winAway: match.periods.num_0.money_line.away,
            draw: match.periods.num_0.money_line.draw,
            scoreHome: match.periods.num_0.team_total.home.over,
            scoreAway: match.periods.num_0.team_total.away.over,
            noScoreHome: match.periods.num_0.team_total.home.under,
            noScoreAway: match.periods.num_0.team_total.away.under,
        }
    }
}

export default RplFantasyService;