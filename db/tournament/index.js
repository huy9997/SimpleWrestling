module.exports = {
  CreateTournament: require("./insert/createTournament"),
  SignUpForTournament: require("./insert/tournamentSignUp"),
  getWeightClassBouts: require("./get/weightClassBouts"),
  InsertWeightClass: require("./insert/WeightClasses"),
  InsertBracketMatches: require("./insert/bracketMatches"),
  InsertMatchResults: require("./insert/matchResults"),
  GetTournamentCardData: require("./get/tournamentCardData"),
  GetWrestlerBracketData: require("./get/wrestlerBracket"),
  GetTournamentLevel: require("./get/tournamentLevel"),
  GetTournamentSignUps: require("./get/tournamentSignUps"),
  GetTournamentBrackets: require("./get/tournamentBrackets")
};
