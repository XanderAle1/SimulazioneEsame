//=========================================
// File name: page_results.js
//-----------------------------------------
// Project : QuizFaber 4.0.20
// Licence : GNU General Public License v3.0
// Author  : Luca Galli
// Email   : info@quizfaber.com
//-----------------------------------------
// Functions included in this file:
// - ready()
// - on beforeunload
// - GetTypeOfSubstitution() - code generated
// - GetRemFromMark() - code generated
// - GetLinkFromMark() - code generated
//=========================================

$(document).ready(function () {
	PageLoadResult();
});

$(window).on("beforeunload", function ()
{
	if (!closedFromBrowser) {
		PageUnloadIndex();
	}
	else {
		ClearQuiz();
	}
});

/* Code generated function */
function GetTypeOfSubstitution(aMark)
{
    if ((aMark>=24)&&(aMark<48)) return QMAKE_VALUATION_NEAR_TO_MARK;
    else if ((aMark>=0)&&(aMark<=23)) return QMAKE_VALUATION_NEAR_TO_MARK;
    else return 0;

}


/* Code generated function */
function GetRemFromMark(aMark)
{
    if ((aMark>=24)&&(aMark<48)) return "Congratulazioni, hai superato l'esonero!";
    if ((aMark>=0)&&(aMark<=23)) return "Mi dispiace, il punteggio è insufficiente per superare l'esonero.";
    return "";

}


/* Code generated function */
function GetLinkFromMark(aMark)
{
    return "";

}



