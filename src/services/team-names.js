class TeamsNames {
    changeTeamsNames = (name, variable) => {
        switch(name) {
            case "Spartak Moscow":
        variable = name.replace("Spartak Moscow", "Спартак");
        break;
            case "Lokomotiv Moscow":
        variable = name.replace("Lokomotiv Moscow", "Локомотив");
        break;
            case "FC Rostov":
        variable = name.replace("FC Rostov", "Ростов");
        break;
            case "Krylya Sovetov":
        variable = name.replace("Krylya Sovetov", "Крылья");
        break;
            case "Krasnodar":
        variable = name.replace("Krasnodar", "Краснодар");
        break;
            case "Khimki":
        variable = name.replace("Khimki", "Химки");
        break;
            case "Dinamo Moscow":
        variable = name.replace("Dinamo Moscow", "Динамо");
        break;
            case "Zenit Saint Petersburg":
        variable = name.replace("Zenit Saint Petersburg", "Зенит");
        break;
            case "PFC Sochi":
        variable = name.replace("PFC Sochi", "Сочи");
        break;
            case "Fakel Voronezh":
        variable = name.replace("Fakel Voronezh", "Факел");
        break;
            case "Torpedo Moskva":
        variable = name.replace("Torpedo Moskva", "Торпедо");
        break;
            case "CSKA Moscow":
        variable = name.replace("CSKA Moscow", "ЦСКА");
        break;
            case "Nizhny Novgorod":
        variable = name.replace("Nizhny Novgorod", "Пари НН");
        break;
            case "Orenburg":
        variable = name.replace("Orenburg", "Оренбург");
        break;
            case "Ural":
        variable = name.replace("Ural", "Урал");
        break;
            case "Akhmat Grozny":
        variable = name.replace("Akhmat Grozny", "Ахмат");
        break;
            default:
            variable = "Нет такой команды";
        }
        return variable;
    }
}

export default TeamsNames;