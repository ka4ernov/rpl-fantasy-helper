class RplFantasyService {

    getResource = async (url, options) => {
        let res = await fetch(url, options);

        if (!res.ok) {
            throw new Error(`Failed to get resource ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllMatches = async () => {
        const myHeaders = new Headers();
        myHeaders.append("x-rapidapi-key", process.env.REACT_APP_RAPID_API_KEY);
        myHeaders.append("x-rapidapi-host", process.env.REACT_APP_RAPID_API_HOST);
        
        const options = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        const res = await this.getResource("https://v3.football.api-sports.io/fixtures?league=235&season=2022&from=2022-10-14&to=2022-10-16", options);
        return res.response.map(this._transformMatchData);
    }

    getOdds = async (id) => {
        const myHeaders = new Headers();
        myHeaders.append("x-rapidapi-key", process.env.REACT_APP_RAPID_API_KEY);
        myHeaders.append("x-rapidapi-host", process.env.REACT_APP_RAPID_API_HOST);
        
        const options = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        };

        const res = await this.getResource(`https://v3.football.api-sports.io/odds?league=235&season=2022&fixture=${id}&bookmaker=2`, options);
        return this._transformOddsData(res.response[0]);
    }

    _transformMatchData = (match) => {
        return {
            home: match.teams.home.name,
            away: match.teams.away.name,
            logoHome: match.teams.home.logo,
            logoAway: match.teams.away.logo,
            idHome: match.teams.home.id,
            idAway: match.teams.away.id,
            idMatch: match.fixture.id
        }
    }

    _transformOddsData = (odds) => {
        return {
            homeWin: odds.bookmakers[0].bets[0].values[0].odd,
            draw: odds.bookmakers[0].bets[0].values[1].odd,
            awayWin: odds.bookmakers[0].bets[0].values[2].odd,
        }
    }
}

export default RplFantasyService;