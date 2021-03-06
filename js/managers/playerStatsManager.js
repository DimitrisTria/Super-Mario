/* global textManager, colors, gameOver, levelScore, level */

var playerStatsManager = new Object();

playerStatsManager.printOveralStats = function(game, lives, score, time, level, numOfLevels) {
    textManager.createText(game, game.width/2, 24, 'Your stats \n', colors.orange, false);
    var say = 'Congrats\n' +'next level: ' +level;
    if (level > numOfLevels) {
        say = 'End of game';
    }
    if(gameOver === true) {
        say = 'Game Over';
    }
    
    score = playerStatsManager.currentOveralScore(game, levelScore);
    textManager.createText(game, game.width/2,  game.height/2, '\n' +say +'\n' +lives +':lives left\n' +'total score gained: ' +score +'\n' +'level time: ' +time +' seconds\n', colors.white, false);
};

playerStatsManager.currentOveralScore = function(game, scoresArray) {
    var i = 0;
    var result = 0;
    for(i = 0; i < scoresArray.length; i++) {
        result = result + scoresArray[i];
    }
    return result;
};

playerStatsManager.resetScores = function(game) {
    var c = 0;
    for(c=0; c<level.length; c++) {
        levelScore[c] = 0;
    }
};
