//=========================================
// File name: page_NNNNN.js
//-----------------------------------------
// Project : QuizFaber 4.0.20
// Licence : GNU General Public License v3.0
// Author  : Luca Galli
// Email   : info@quizfaber.com
//-----------------------------------------
// Script for NNNNN-th question
//=========================================

var allInitQuestionFunctions = new Array (
    InitQuestion1,
    InitQuestion2,
    InitQuestion3,
    InitQuestion4,
    InitQuestion5,
    InitQuestion6,
    InitQuestion7,
    InitQuestion8,
    InitQuestion9,
    InitQuestion10,
    InitQuestion11,
    InitQuestion12,
    InitQuestion13,
    InitQuestion14,
    InitQuestion15,
    InitQuestion16,
    InitQuestion17,
    InitQuestion18,
    InitQuestion19,
    InitQuestion20,
    InitQuestion21,
    InitQuestion22,
    InitQuestion23,
    InitQuestion24,
    InitQuestion25,
    InitQuestion26,
    InitQuestion27,
    InitQuestion28,
    InitQuestion29,
    InitQuestion30,
    InitQuestion31,
    InitQuestion32,
    InitQuestion33,
    InitQuestion34,
    InitQuestion35,
    InitQuestion36,
    InitQuestion37,
    InitQuestion38,
    InitQuestion39,
    InitQuestion40,
    InitQuestion41,
    InitQuestion42,
    InitQuestion43,
    InitQuestion44,
    InitQuestion45,
    InitQuestion46,
    InitQuestion47,
    InitQuestion48,
);



$(document).ready(function ()
{
	const questionIndex = 0;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	
});

$(window).on("beforeunload", function ()
{
	PageUnload();
});

$(window).on("scroll", function ()
{
	PageOnScroll();
});


/* Code generated function */
function InitQuestion1()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 0;
    var weight = DecodeNumber('1qjSRWuJT2M=', 380, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = true;
    question.shortTextQuestion = "Il tetano è un avvelenamento acuto dovuto all'ingestione di una neurotossina prodotta dal batterio gram+ Clostridium tetani. Le manifestazioni cliniche constano in una contrazione involontaria e vigorosa dei muscoli scheletrici, fino alla morte che sopraggiunge per insufficinenza respiratoria. La tossina tetanica agisce:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('1qjSRWuJT2M=', 382, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Come inibitore competitivo della acetilcolinesterasi a livello delle placche motrici";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('iv0L36yVsBA=', 384, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Come una proteasi che demolisce l'apparato proteico deputato alla secrezione dell'acetilcolina";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('FEmWyWVYw8c=', 386, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Come inibitore irreversibile dei canali del potassio V-dipendenti dei motoneuroni";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('78m9OVwVCuI=', 747, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Come attivatore delle caspasi, causando l'apoptosi dei motoneuroni";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('oFrgm9TkF5A=', 749, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Come una proteasi che demolisce l'apparato proteico deputato alla secrezione del GABA e della Glicina";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion2()
{
    const type = QMAKE_BOOLEAN;
    const questionIndex = 1;
    var choice, valuation, noChoice = false;;
    var weight = DecodeNumber('oFrgm9TkF5A=', 749, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "La palitossina (PLX o PLTX) è uno dei veleni marini più potenti mai scoperti, isolata per la prima volta dal celenterato marino Palythoa toxica. Indica per ciascuna delle seguenti affermazioni riguardo la palitosina è vera o falsa:";
    choice = GetBooleanChoice(questionIndex,0);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 0);
    valuation = DecodeNumber('KQSAYr2VrL4=', 749, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer0 = new Answer(choice, valuation, 1, 0, '');
    answer0.shortTextAnswer = "Si lega alla ATPasi Na+/K+, inibendola";
    question.answers.push(answer0);
    choice = GetBooleanChoice(questionIndex,1);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 1);
    valuation = DecodeNumber('G/yyXZGoZwE=', 751, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer(choice, valuation, 1, 0, '');
    answer1.shortTextAnswer = "Il legame col suo recettore induce la dissipazione del gradiente trans-membranario";
    question.answers.push(answer1);
    choice = GetBooleanChoice(questionIndex,2);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 2);
    valuation = DecodeNumber('SPRu5RDvkhY=', 111, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer(choice, valuation, 1, 0, '');
    answer2.shortTextAnswer = "Si lega alla pompa SERCA, aumentando il calcio intracellulare dei cardiomiociti";
    question.answers.push(answer2);
    choice = GetBooleanChoice(questionIndex,3);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 3);
    valuation = DecodeNumber('GXwjGllUFc4=', 113, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer(choice, valuation, 1, 0, '');
    answer3.shortTextAnswer = "Il suo ligando è una proteina di membrana";
    question.answers.push(answer3);
    choice = GetBooleanChoice(questionIndex,4);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 4);
    valuation = DecodeNumber('GXwjGllUFc4=', 115, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer(choice, valuation, 1, 0, '');
    answer4.shortTextAnswer = "Il suo meccanismo di azione è analogo a quello dei glicosidi digitalici";
    question.answers.push(answer4);
    question.noChoice = noChoice;
    return question;

}
/* Code generated function */
function InitQuestion3()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 2;
    var weight = DecodeNumber('KYWeQhxhD3g=', 954, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = true;
    question.shortTextQuestion = "L'equilibrio di Nernst per uno ione i+ la cui concentrazione intracellulare è di 350mmol/L e quella extracellulare è di 35mmol/L è pari a: (R·T/zF =2.6x10^13)";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('KYWeQhxhD3g=', 956, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "6x10^13 mV";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Kf87Hhv6J1I=', 958, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "14x10^13 mV";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('O3etkIkHL1E=', 960, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "-8x10^13 mV";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('dO7zbB6Q0uc=', 962, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "8x10^13 mV";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('LZd/b6mG69M=', 964, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "-6x10^13 mV";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion4()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 3;
    var weight = DecodeNumber('xOlduM6APUA=', 323, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Completa il seguente testo scegliendo le parole corrette:";
    choice = $('#idGap4_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('9XB3uIiP7QH2EV2i082c1g=='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap4_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('UJpVKvVK3TWkRSJy'));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap4_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('rUVKK5GBVmD2VRVt+POAug=='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    choice = $('#idGap4_3').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('1o0tY20if5Pm93mBQDXMakb1FGw='));
    var answer3 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer3);
    choice = $('#idGap4_4').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('qBmTcuP2v40RkpkAXyJF2mAACTw='));
    var answer4 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion5()
{
    const type = QMAKE_BOOLEAN;
    const questionIndex = 4;
    var choice, valuation, noChoice = false;;
    var weight = DecodeNumber('zE2jFJOr/sc=', 691, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Indica quali delle seguenti affermazioni riguardo il potenziale d'azione è vera o falsa:";
    choice = GetBooleanChoice(questionIndex,0);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 0);
    valuation = DecodeNumber('9hrTeOxp1UY=', 691, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer0 = new Answer(choice, valuation, 1, 0, '');
    answer0.shortTextAnswer = "Si riscontra in qualsiasi tipo cellulare";
    question.answers.push(answer0);
    choice = GetBooleanChoice(questionIndex,1);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 1);
    valuation = DecodeNumber('zE2jFJOr/sc=', 693, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer(choice, valuation, 1, 0, '');
    answer1.shortTextAnswer = "La sua intensità è stimolo-dipendente";
    question.answers.push(answer1);
    choice = GetBooleanChoice(questionIndex,2);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 2);
    valuation = DecodeNumber('1wEdEzlsuRo=', 695, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer(choice, valuation, 1, 0, '');
    answer2.shortTextAnswer = "è un evento del tipo \"tutto-o-nulla\"";
    question.answers.push(answer2);
    choice = GetBooleanChoice(questionIndex,3);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 3);
    valuation = DecodeNumber('oWQqeK7DRZw=', 697, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer(choice, valuation, 1, 0, '');
    answer3.shortTextAnswer = "Si manifesta solo per stimoli oltre un valore soglia";
    question.answers.push(answer3);
    choice = GetBooleanChoice(questionIndex,4);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 4);
    valuation = DecodeNumber('EqOC70h3ZOg=', 536, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer(choice, valuation, 1, 0, '');
    answer4.shortTextAnswer = "Si riscontra unicamente nelle cellule nervose";
    question.answers.push(answer4);
    question.noChoice = noChoice;
    return question;

}
/* Code generated function */
function InitQuestion6()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 5;
    var weight = DecodeNumber('tk4RBnXkGyY=', 538, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = true;
    question.shortTextQuestion = "L'antilocapra americana detiene il record di velocità terrestre sulle lunghe distanze, riuscendo a sostenere ben 56 Km/h su tratti di oltre 6Km. Sulla base di questo dato, ti aspetti che i suoi muscoli siano composti principalmente da:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('tk4RBnXkGyY=', 540, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Fibre di tipo IIa";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('VAsLaqVvnJ0=', 542, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Fibre di tipo IIx";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('VAsLaqVvnJ0=', 544, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Fibre di tipo III";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('H/RsCpgM6HM=', 546, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Fibre di tipo IIb";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('PbaCWAEsiCw=', 907, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Fibre di tipo I";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion7()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 6;
    var weight = DecodeNumber('fFu6LY3/3s4=', 907, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = true;
    question.shortTextQuestion = "Un fisiologo ricercatore scopre una nuova molecola in grado di indurre un potenziale d'azione in qualsiasi neurone cui entra in contatto e la battezza col nome kellerina in onore del suo vecchio professore di fisiologia. Secondo le tue conoscenze, quale potrebbe essere un possibile meccanismo d'azione della kellerina?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('ok8XqRDwn8Y=', 909, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Si lega ai canali del sodio, attivandoli";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ok8XqRDwn8Y=', 911, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Si lega ai canali del calcio, inattivandoli";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('E0L+5wTncE4=', 913, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Si lega ai canali del potassio, attivandoli";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('rw6x9zZADXY=', 915, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Si lega ai canali del potassio, inattivandoli";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('G/yyXZGoZwE=', 753, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Si lega ai canali del sodio, inattivandoli";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion8()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 7;
    var weight = DecodeNumber('2fK4eXiLJOw=', 774, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = true;
    question.shortTextQuestion = "  L'illustrazione qui riportata rappresenta:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('2fK4eXiLJOw=', 776, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Un canale del cloro voltaggio-dipendente";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('GtDxXZ9mqcE=', 778, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Una pendrina";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ql24T5EOLU4=', 780, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Un canale del potassio voltaggio-dipendente";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('nvNie2yNOfU=', 782, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Un'ATPasi Na+/K+";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('//hi3tUmuuw=', 784, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Un canale del sodio voltaggio-dipendente";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion9()
{
    const type = QMAKE_BOOLEAN;
    const questionIndex = 8;
    var choice, valuation, noChoice = false;;
    var weight = DecodeNumber('d2RujoJ7E9Y=', 620, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Indica quale tra le seguenti affermazioni riguardanti la ATP sintasi è vera oppure falsa:";
    choice = GetBooleanChoice(questionIndex,0);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 0);
    valuation = DecodeNumber('d2RujoJ7E9Y=', 620, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer0 = new Answer(choice, valuation, 1, 0, '');
    answer0.shortTextAnswer = "è un'ATPasi del tipo Fo/F1";
    question.answers.push(answer0);
    choice = GetBooleanChoice(questionIndex,1);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 1);
    valuation = DecodeNumber('d2RujoJ7E9Y=', 622, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer(choice, valuation, 1, 0, '');
    answer1.shortTextAnswer = "presenta un dominio sensibile alla uabaina";
    question.answers.push(answer1);
    choice = GetBooleanChoice(questionIndex,2);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 2);
    valuation = DecodeNumber('UV/fsp4EPYo=', 624, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer(choice, valuation, 1, 0, '');
    answer2.shortTextAnswer = "Ricopre un ruolo fondamentale nella glicolisi";
    question.answers.push(answer2);
    choice = GetBooleanChoice(questionIndex,3);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 3);
    valuation = DecodeNumber('absIhrPs6vc=', 626, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer(choice, valuation, 1, 0, '');
    answer3.shortTextAnswer = "Sfrutta un meccanismo di catalisi rotazionale";
    question.answers.push(answer3);
    choice = GetBooleanChoice(questionIndex,4);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 4);
    valuation = DecodeNumber('3MTTnn7i6bU=', 628, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer(choice, valuation, 1, 0, '');
    answer4.shortTextAnswer = "Consuma ATP per generare un gradiente protonico";
    question.answers.push(answer4);
    question.noChoice = noChoice;
    return question;

}
/* Code generated function */
function InitQuestion10()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 9;
    var weight = DecodeNumber('FxzgPL3Q9to=', 989, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Completa il seguente testo scegliendo le parole corrette:";
    choice = $('#idGap10_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('ecCQ3h5TSmI='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap10_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('vIX3MHnD/cCTZW9uQHtoLsD+qE8='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap10_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('K+BAsH58IEk='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion11()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 10;
    var weight = DecodeNumber('z8NQekgNVMg=', 358, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = true;
    question.shortTextQuestion = "Un paziente che normalmente scambia ossigeno a livello alveolare con una densità di flusso J pari a 16 mol / s · m^2 contrae un'infezione da coronavirus e sviluppa una polmonite interstiziale che a causa dell'infiammazione raddoppia il normale spessore della membrana alveolo-capillare. La densità del flusso d ossigeno in questa condizione sarà pari a:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('z8NQekgNVMg=', 360, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "5.3 mol/s · m^2";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('YcPJh70hbcM=', 362, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "8 mol/s · m^2";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('YcPJh70hbcM=', 364, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "48 mol/s · m^2";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('hpiXdw3PHGo=', 366, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "4 mol/s · m^2";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('CsgK6RNbD3s=', 368, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "32 mol/s · m^2";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion12()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 11;
    var weight = DecodeNumber('GS1Fjggo0rU=', 204, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Completare il seguente testo inserendo le parole più opportune:";
    choice = $('#idGap12_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('KN/PIoJWKik='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap12_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('tUxhDibWnuA='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap12_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('rGFo7xr+3oB3EalJ'));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    choice = $('#idGap12_3').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('aBtv6PrwShE/sphmdofe+wGh8iE='));
    var answer3 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion13()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 12;
    var weight = DecodeNumber('kgiX3RBH4P0=', 573, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = true;
    question.shortTextQuestion = "La conduzione elettrotonica:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('kgiX3RBH4P0=', 575, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Rappresenta il tipo di conduzione più affidabile sulle lunghe distanze";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('mfJoVQf5cgU=', 577, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Rappresenta la conduzione adoperata nelle fibre amieliniche";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('vH1QGQOw1mo=', 579, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Rappresenta il tipo di conduzione più rapido";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('UkWg2L4cVVs=', 417, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Rappresenta la conduzione adoperata nelle fibre mieliniche";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('HUV5UavRIDg=', 419, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Unisce i vantaggi della conduzione saltatoria e della conduzione con rigenerazione punto per punto";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion14()
{
    const type = QMAKE_BOOLEAN;
    const questionIndex = 13;
    var choice, valuation, noChoice = false;;
    var weight = DecodeNumber('Xvw38nopS58=', 419, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Indica quali delle seguenti affermazioni sulla tecnica delle optical tweezers è vera oppure falsa:";
    choice = GetBooleanChoice(questionIndex,0);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 0);
    valuation = DecodeNumber('Xvw38nopS58=', 419, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer0 = new Answer(choice, valuation, 1, 0, '');
    answer0.shortTextAnswer = "Si basa sulla pressione di radiazione agente su specchi microscopici";
    question.answers.push(answer0);
    choice = GetBooleanChoice(questionIndex,1);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 1);
    valuation = DecodeNumber('nvNie2yNOfU=', 780, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer(choice, valuation, 1, 0, '');
    answer1.shortTextAnswer = "Consente di calcolare spostamenti su scala microscopica";
    question.answers.push(answer1);
    choice = GetBooleanChoice(questionIndex,2);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 2);
    valuation = DecodeNumber('nvNie2yNOfU=', 782, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer(choice, valuation, 1, 0, '');
    answer2.shortTextAnswer = "Sfrutta l'effetto doppler ottico";
    question.answers.push(answer2);
    choice = GetBooleanChoice(questionIndex,3);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 3);
    valuation = DecodeNumber('//hi3tUmuuw=', 784, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer(choice, valuation, 1, 0, '');
    answer3.shortTextAnswer = "Consente di manipolare singole molecole";
    question.answers.push(answer3);
    choice = GetBooleanChoice(questionIndex,4);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 4);
    valuation = DecodeNumber('//hi3tUmuuw=', 786, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer(choice, valuation, 1, 0, '');
    answer4.shortTextAnswer = "è assimilabile ad un circuito a feedback negativo";
    question.answers.push(answer4);
    question.noChoice = noChoice;
    return question;

}
/* Code generated function */
function InitQuestion15()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 14;
    var weight = DecodeNumber('gqTzVZZbcV0=', 1147, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = true;
    question.shortTextQuestion = "Il riflesso di Ferguson:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('gqTzVZZbcV0=', 1149, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Si basa sull'attenuazione delle oscillazioni dal set-point causate da una perturbazione eterna";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('XlcbeHFHCw0=', 1151, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Si basa su un'integrazione del segnale rapida";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('D039b/T//Tc=', 1153, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Si basa sull'amplificazione dell'errore e sulla destabilizzazione del sistema";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('D039b/T//Tc=', 1155, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Mira ad eliminare l'elemento perturbante ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('CiDRkm6VuSQ=', 1157, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "è un tipico esempio di feedforward";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion16()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 15;
    var weight = DecodeNumber('KwbL2Hxida0=', 993, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = true;
    question.shortTextQuestion = "Le sinapsi elettriche presentano una caratteristica peculiare che le rende diverse dalle sinapsi chimiche. Questa è:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('P+TOEOJ67A8=', 995, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "La conduzione attraverso la sinapsi non è rettificante";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('P+TOEOJ67A8=', 997, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Possono essere di tipo eccitatorio o inibitorio";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('9bFQ+Wh3frw=', 999, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Sono molto più rappresentate all'interno dell'organismo";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('x5JTSSpZ5OU=', 1001, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Consentono una sommazione logica degli input";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('qpdVYxt9G60=', 1003, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Possono indurre potenziali post-sinaptici di segno opposto a quello pre-sinaptico";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion17()
{
    const type = QMAKE_BOOLEAN;
    const questionIndex = 16;
    var choice, valuation, noChoice = false;;
    var weight = DecodeNumber('YcPJh70hbcM=', 362, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Indica se le seguenti affermazioni sono vere oppure false. Il segno del potenziale post-sinaptico:";
    choice = GetBooleanChoice(questionIndex,0);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 0);
    valuation = DecodeNumber('YcPJh70hbcM=', 362, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer0 = new Answer(choice, valuation, 1, 0, '');
    answer0.shortTextAnswer = "Dipende dalla qualità del neurotrasmettitore";
    question.answers.push(answer0);
    choice = GetBooleanChoice(questionIndex,1);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 1);
    valuation = DecodeNumber('YcPJh70hbcM=', 364, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer(choice, valuation, 1, 0, '');
    answer1.shortTextAnswer = "Dipende dalla quantità del neurotrasmettitore";
    question.answers.push(answer1);
    choice = GetBooleanChoice(questionIndex,2);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 2);
    valuation = DecodeNumber('CsgK6RNbD3s=', 366, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer(choice, valuation, 1, 0, '');
    answer2.shortTextAnswer = "Dipende dai recettori post-sinaptici";
    question.answers.push(answer2);
    choice = GetBooleanChoice(questionIndex,3);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 3);
    valuation = DecodeNumber('CsgK6RNbD3s=', 368, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer(choice, valuation, 1, 0, '');
    answer3.shortTextAnswer = "Dipende dai recettori pre-sinaptici";
    question.answers.push(answer3);
    choice = GetBooleanChoice(questionIndex,4);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 4);
    valuation = DecodeNumber('jCXoFQ50Sr8=', 565, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer(choice, valuation, 1, 0, '');
    answer4.shortTextAnswer = "Dipende dal segno del potenziale pre-sinaptico";
    question.answers.push(answer4);
    question.noChoice = noChoice;
    return question;

}
/* Code generated function */
function InitQuestion18()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 17;
    var weight = DecodeNumber('tCKt90vqjcU=', 567, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = true;
    question.shortTextQuestion = "I neurotrasmettitori tipici dei neuroni inibitori sono:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('tCKt90vqjcU=', 569, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Acetilcolina e glicina";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('b11VVcAksbg=', 930, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Acido gamma-ammino-butirrico e Glicina";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('b11VVcAksbg=', 932, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Acetilcolina e glutammato";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('H+QPAaiDzb8=', 934, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Glutammato e glicina";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('m1pN63Xv2cc=', 772, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Acido gamma-ammino-butirrico e glutammato";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion19()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 18;
    var weight = DecodeNumber('P+rupo8xzyE=', 1131, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = true;
    question.shortTextQuestion = "La molecola idrosolubile oggetto dello studio su cui si basa il tuo dottorato di ricerca, quando interagisce con le sue cellule bersaglio, induce in vitro una risposta lenta e basata principalmente su modificazioni morfologiche e dell'espressione genica della suddetta cellula. Sulla base di queste osservazioni, ipotizzi che la molecola interagisca con:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('P+rupo8xzyE=', 1133, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Recettori-canale di membrana";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('k1RzpfWGORI=', 1135, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Recettori intracellulari";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('V0k5DXCrbo8=', 1137, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Recettori ionotropi di membrana";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('pL28RYmmX68=', 1139, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Recettori metabotropi di membrana";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('1RkbP01w7uI=', 500, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Recettori extracellulari";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion20()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 19;
    var weight = DecodeNumber('uGnNB0ZuP2s=', 336, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = true;
    question.shortTextQuestion = "Un paziente si reca in pronto soccorso per una sospetta intossicazione da atropina (lo stesso confessa di aver colto e mangiato funghi senza farsi aiutare da un esperto. Quale antidoto useresti?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('uGnNB0ZuP2s=', 338, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Propanololo";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('E7w/kXl8gRo=', 340, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Atropina";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('E7w/kXl8gRo=', 342, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Uabaina";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('RRvJWCwTdwA=', 703, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Sinapsina";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('WwDAkZzePqs=', 705, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Digossina";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion21()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 20;
    var weight = DecodeNumber('Nmco4d0/ILU=', 1064, 0, 99999);
    var numOfAnswers = 6;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = true;
    question.shortTextQuestion = "Una mutazione genetica non consente l'apertura dei canali V-dipendenti del potassio. Quali effetti ti aspetti sui neuroni affetti da questa canalopatia?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('Nmco4d0/ILU=', 1066, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Il valore del potenziale di membrana rimane bloccato a livelli più negativi";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('S1n93mhzsGs=', 1068, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "La durata del potenziale di azione sarà diminuita";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('o5ctesFyUkQ=', 1070, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Il valore del potenziale di membrana rimane bloccato a livelli meno negativi";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('9FPAjCQ46gk=', 908, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "La durata del potenziale di azione sarà aumentata";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('1W31q/7VOsk=', 910, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "L'ampiezza del potenziale di azione sarà aumentata";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    var valuation6 = DecodeNumber('7RtCM4Znko8=', 912, -1, 1);
    if (valuation6 === -2) PrintWrongKeyword(questionIndex);
    var answer6 = new Answer((choice == 6 ? 1 : 0), valuation6, 1, 0, '');
    answer6.shortTextAnswer = "L'ampiezza del potenziale di azione sarà diminuita";
    answer6.shortTextRemark = "";
    question.answers.push(answer6);
    return question;

}
/* Code generated function */
function InitQuestion22()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 21;
    var weight = DecodeNumber('m8PSKomtPeI=', 269, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = true;
    question.shortTextQuestion = "Ad un paziente ricoverato per ipofosfatemia grave vengono somministrate grandi dosi di fosfato sodico endovena. Il paziente però, a causa dell'aumento eccessivo di fosfati, sviluppa una grave ipocalcemia (un abbassamento dei livelli ematici di Ca++) iatrogena. Cosa ti aspetti accada a livello dei terinali sinaptici del paziente?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('m8PSKomtPeI=', 271, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Un aumento della quantità di neurotrasmettitore nelle vescicole sinaptiche";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('htrY2dbkaDU=', 1110, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "L'inibizione dell'ancoraggio delle vescicole sinaptiche mature alla membrana cellulare";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('T47Mr9TVqso=', 1112, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Una diminuzione della quantità di neurotrasmettitore nelle vescicole sinaptiche";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('VpqZNAUut0I=', 1114, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Una diminuzione della frequenza di rilascio di neurotrasmettitore";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('Vwdc9lZ+5Zo=', 474, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "Un aumento della frequenza di rilascio di neurotrasmettitore";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion23()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 22;
    var weight = DecodeNumber('vVQytQKlizY=', 474, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = true;
    question.shortTextQuestion = "Come viene definita la contrazione concentrica?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('vVQytQKlizY=', 476, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "E' caratteristica della muscolatura liscia";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('QoYZhjV7iWg=', 837, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "E' una forma di contrazione che non si osserva nei muscoli dei mammiferi";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('a2jmuihwSxQ=', 839, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "E' una forma di contrazione nel quale si accorcia solo la porzione centrale della fibra muscolare";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('uoDuKIvJG5k=', 678, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "E' una forma di contrazione nella quale il muscolo si accorcia invece di allungarsi";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion24()
{
    const type = QMAKE_BOOLEAN;
    const questionIndex = 23;
    var choice, valuation, noChoice = false;;
    var weight = DecodeNumber('CxXdLL0p6zo=', 1199, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Indica se le seguenti frasi in relazione all'illustrazione sono vere o false. Secondo il modello di Hebb: ";
    choice = GetBooleanChoice(questionIndex,0);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 0);
    valuation = DecodeNumber('jymyIC7Z5SY=', 1199, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer0 = new Answer(choice, valuation, 1, 0, '');
    answer0.shortTextAnswer = "Le sinapsi tra A e B vanno incontro a LTP";
    question.answers.push(answer0);
    choice = GetBooleanChoice(questionIndex,1);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 1);
    valuation = DecodeNumber('vevYz6NLgO4=', 1037, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer(choice, valuation, 1, 0, '');
    answer1.shortTextAnswer = "Le sinapsi tra A e C vanno incontro a LTP";
    question.answers.push(answer1);
    choice = GetBooleanChoice(questionIndex,2);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 2);
    valuation = DecodeNumber('vevYz6NLgO4=', 1039, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer(choice, valuation, 1, 0, '');
    answer2.shortTextAnswer = "Le sinapsi tra A e B vanno incontro a LTD";
    question.answers.push(answer2);
    choice = GetBooleanChoice(questionIndex,3);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 3);
    valuation = DecodeNumber('SjTQ/CQSX1Y=', 1041, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer(choice, valuation, 1, 0, '');
    answer3.shortTextAnswer = "Le sinapsi tra A e C vanno incontro a LTD";
    question.answers.push(answer3);
    question.noChoice = noChoice;
    return question;

}
/* Code generated function */
function InitQuestion25()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 24;
    var weight = DecodeNumber('mDuV2s2SqT0=', 404, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Completare il seguente testo inserendo le risposte corrette:";
    choice = $('#idGap25_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('PJRCSNiRdoQ0znXp'));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap25_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('tUxhDibWnuA='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap25_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('lIxUOXxIdx4='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    choice = $('#idGap25_3').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('csL3LC6eJW44DTGn9lJWwTf2/pdrJ+72'));
    var answer3 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion26()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 25;
    var weight = DecodeNumber('Cb9G+x4I5q4=', 968, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "La figura sottostante illustra i meccanismi che contribuiscono a regolare la concentrazione di Ca2+ nel citoplasma: alcuni di questi contribuiscono ad aumentarla, quali? (più di una risposta può essere corretta)  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Cb9G+x4I5q4=', 970, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Ca2+ buffers";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('j5xkKJV4C4g=', 972, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "pompa PMCA";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('4Q9ohIffRNU=', 974, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "canali voltaggio dipendenti del calcio";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('4Q9ohIffRNU=', 976, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "canali SERCA";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('hCtBQTaMmVY=', 978, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "recettori associati a PLC";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion27()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 26;
    var weight = DecodeNumber('3qsK5rLmCPM=', 337, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = true;
    question.shortTextQuestion = "Un tetano muscolare rappresenta un fenomeno di sommazione di scosse muscolari che si susseguono ad una ben precisa frequenza, detta \"frequenza di fusione\". In un muscolo stimolato dai motoneuroni spinali la frequenza di fusione per l'ottenimento di un tetano è pari a:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('CVP5iI2Cj4g=', 339, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "20 Hz";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('CVP5iI2Cj4g=', 341, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "1000 Hz";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('5DJXlsDeG8I=', 343, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "30 Hz";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('k6ae3VFZGHM=', 345, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "100 Hz";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('8x/vXTJIKhU=', 1183, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "50 Hz";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion28()
{
    const type = QMAKE_BOOLEAN;
    const questionIndex = 27;
    var choice, valuation, noChoice = false;;
    var weight = DecodeNumber('BeCKinNG4GQ=', 1183, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Indica quali delle seguenti affermazioni circa il meccanismo di contrazione del muscolo cardiaco sono vere o false:";
    choice = GetBooleanChoice(questionIndex,0);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 0);
    valuation = DecodeNumber('8x/vXTJIKhU=', 1183, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer0 = new Answer(choice, valuation, 1, 0, '');
    answer0.shortTextAnswer = "I canali di membrana coinvolti sono soltanto i DHPR";
    question.answers.push(answer0);
    choice = GetBooleanChoice(questionIndex,1);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 1);
    valuation = DecodeNumber('vZ3fmIptLcM=', 1185, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer(choice, valuation, 1, 0, '');
    answer1.shortTextAnswer = "i canali di membrana coinvolti sono i DHPR e i canali voltaggio dipendenti del sodio";
    question.answers.push(answer1);
    choice = GetBooleanChoice(questionIndex,2);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 2);
    valuation = DecodeNumber('H/RsCpgM6HM=', 546, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer(choice, valuation, 1, 0, '');
    answer2.shortTextAnswer = "il calcio fuoriesce dal RE tramite il recettore Ryr1";
    question.answers.push(answer2);
    choice = GetBooleanChoice(questionIndex,3);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 3);
    valuation = DecodeNumber('yHZ0JNgegt0=', 548, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer(choice, valuation, 1, 0, '');
    answer3.shortTextAnswer = "tra il recettore DHPR e il recettore per la rianodina c'è un \"accoppiamento fisico\"";
    question.answers.push(answer3);
    question.noChoice = noChoice;
    return question;

}
/* Code generated function */
function InitQuestion29()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 28;
    var weight = DecodeNumber('5yyyqPNKBb4=', 552, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Quali sono i fattori che determinano il passo del \"power stroke\" all'interno del ciclo della contrazione muscolare del muscolo striato? (più di una risposta può essere corretta)";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('8VbqCfh6j3U=', 554, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "sito di legame della miosina sull'actina";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('8VbqCfh6j3U=', 556, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "grado stiramento della titina";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('5Bf5DYgtR50=', 394, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "lunghezza del braccio di leva";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('utQ7mM7ikkk=', 396, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "angolo di rigor";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('utQ7mM7ikkk=', 398, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "numero delle teste di miosina";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion30()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 29;
    var weight = DecodeNumber('mOCJ+AKmzNo=', 757, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Completa il seguente testo inserendo le parole corrette:";
    choice = $('#idGap30_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('fCE5cm41L0Di+nk5Xo5EWdkdqXnUj4Kqy3TfdMMEOCltk2LFF4hFMQ=='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap30_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('s/d1QG3oC3Xdgqfcc3LV2ToQaCNOk9DjQxZt5inKgvo91ceq'));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap30_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('q2GnBzW+Lp+nPWIatxwCNQ=='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion31()
{
    const type = QMAKE_BOOLEAN;
    const questionIndex = 30;
    var choice, valuation, noChoice = false;;
    var weight = DecodeNumber('TwXLrnb7zt4=', 767, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Indica quali informazioni riguardo il trasportatore pendrina sono vere o false:";
    choice = GetBooleanChoice(questionIndex,0);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 0);
    valuation = DecodeNumber('arPQFqNPpjc=', 767, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer0 = new Answer(choice, valuation, 1, 0, '');
    answer0.shortTextAnswer = "nel rene e nell'orecchio interno svolge lo stesso controtrasporto";
    question.answers.push(answer0);
    choice = GetBooleanChoice(questionIndex,1);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 1);
    valuation = DecodeNumber('GLqxnFwLAnU=', 1128, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer(choice, valuation, 1, 0, '');
    answer1.shortTextAnswer = "è espressa nel rene e nella tiroide";
    question.answers.push(answer1);
    choice = GetBooleanChoice(questionIndex,2);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 2);
    valuation = DecodeNumber('19eRFzk9o9E=', 1130, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer(choice, valuation, 1, 0, '');
    answer2.shortTextAnswer = "è espressa nel rene, nella tiroide e nel pancreas";
    question.answers.push(answer2);
    choice = GetBooleanChoice(questionIndex,3);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 3);
    valuation = DecodeNumber('fNj4CZJ1EpA=', 1132, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer(choice, valuation, 1, 0, '');
    answer3.shortTextAnswer = "nella tiroide permette l'immissione di iodio nella colloide";
    question.answers.push(answer3);
    choice = GetBooleanChoice(questionIndex,4);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 4);
    valuation = DecodeNumber('fNj4CZJ1EpA=', 1134, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer(choice, valuation, 1, 0, '');
    answer4.shortTextAnswer = "se mutata, causa una sindrome chiamata \"sindrome di Pendred\" caratterizzata unicamente da gozzo";
    question.answers.push(answer4);
    question.noChoice = noChoice;
    return question;

}
/* Code generated function */
function InitQuestion32()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 31;
    var weight = DecodeNumber('ICb4nktP8S8=', 972, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = true;
    question.shortTextQuestion = "ll potenziale di membrana a riposo di un segmento di assone è pari a -100mV. Il potenziale soglia per l'innesco di un potenziale di azione è -60mV. Il segmento di assone è lungo 10 mm. La costante di lunghezza ?=10 mm. L'assone è stimolato elettricamente ad entrambe le estremità, in modo da generare due potenziali depolarizzanti di ampiezza 30 mV, che si propagano l'uno contro l'altro e si incontrano a metà assone. Il potenziale risultante a metà assone è pari a:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('ICb4nktP8S8=', 974, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "+43,5 mV";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('IxRNHPWEVk8=', 976, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "-63,5 mV";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('IxRNHPWEVk8=', 978, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "+35 mV";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('hCtBQTaMmVY=', 980, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "-60 mV";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('jE4uzV7ua7I=', 982, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "-73,5 mV";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion33()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 32;
    var weight = DecodeNumber('5DJXlsDeG8I=', 341, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = true;
    question.shortTextQuestion = "La digossina è";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('5DJXlsDeG8I=', 343, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "un inibitore competitivo della pompa sodio-potassio";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('h/nNn+M21AI=', 345, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "un inibitore non competitivo della pompa sodio-potassio";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('h/nNn+M21AI=', 347, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "una tossina batterica";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('tlhVnpb5d1g=', 708, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "un ligando per un recettore di membrana";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('DgmAASRFkZE=', 710, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "un inibitore non competitivo della ATP sintasi";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion34()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 33;
    var weight = DecodeNumber('7uO+pNOOAlU=', 710, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Il premio Nobel per la medicina di quest'anno è assegnato ad un noto ricercatore americano che ha scoperto un farmaco capace di facilitare la trasmissione sinaptica sia attraverso meccanismi presinaptici che attraverso meccanismi postsinaptici.  N.B.: “Facilitare la trasmissione sinaptica” significa che la probabilità che un potenziale di azione nel neurone presinaptico generi un potenziale di azione nel neurone postsinaptico aumenta. Quali potrebbero essere i meccanismi sfruttati dal farmaco? (più di una risposta è corretta)";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('7uO+pNOOAlU=', 712, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "aumentare lo stockage di vescicole di neurotrasmettitore";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('uQm5m5Dv1E4=', 550, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "divenire antagonista del neurotrasmettitore";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('5yyyqPNKBb4=', 552, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "aumentare la quantità di recettori sul terminale postsinaptico";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('5yyyqPNKBb4=', 554, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "iperpolarizzare il terminale postsinaptico";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('tqe1byiYAZI=', 556, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "aumentare il rilascio di vescicole contenenti il neurotrasmettitore";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion35()
{
    const type = QMAKE_BOOLEAN;
    const questionIndex = 34;
    var choice, valuation, noChoice = false;;
    var weight = DecodeNumber('cjqu5tbcwos=', 915, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Indica quali affermazioni sono vere o false circa il trasporto di glucosio:";
    choice = GetBooleanChoice(questionIndex,0);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 0);
    valuation = DecodeNumber('rw6x9zZADXY=', 915, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer0 = new Answer(choice, valuation, 1, 0, '');
    answer0.shortTextAnswer = "nel tubulo contorno prossimale i trasportatori sono in ordine SGLT1 e SGLT2";
    question.answers.push(answer0);
    choice = GetBooleanChoice(questionIndex,1);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 1);
    valuation = DecodeNumber('cjqu5tbcwos=', 917, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer(choice, valuation, 1, 0, '');
    answer1.shortTextAnswer = "nel tubulo contorto distale i trasportatori sono in ordine SGLT2 e SGLT1";
    question.answers.push(answer1);
    choice = GetBooleanChoice(questionIndex,2);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 2);
    valuation = DecodeNumber('J/6fVATBr9I=', 919, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer(choice, valuation, 1, 0, '');
    answer2.shortTextAnswer = "il trasportatore SGLT2 ha una Km molto elevata";
    question.answers.push(answer2);
    choice = GetBooleanChoice(questionIndex,3);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 3);
    valuation = DecodeNumber('J/6fVATBr9I=', 921, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer(choice, valuation, 1, 0, '');
    answer3.shortTextAnswer = "il trasportatore SGLT1 ha una Km molto elevata";
    question.answers.push(answer3);
    choice = GetBooleanChoice(questionIndex,4);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 4);
    valuation = DecodeNumber('2qiYk8N9vGQ=', 759, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer(choice, valuation, 1, 0, '');
    answer4.shortTextAnswer = "il trasportatore SGLT1 riassorbe il 10% del glucosio presente nella preurina";
    question.answers.push(answer4);
    question.noChoice = noChoice;
    return question;

}
/* Code generated function */
function InitQuestion36()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 35;
    var weight = DecodeNumber('hR+U2gTP9oE=', 761, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = true;
    question.shortTextQuestion = "La miastenia grave è una malattia autoimmune nella qual il sistema immunitario genera autoanticorpi contro i recettori colinergici della placca neuromuscolare. La caratteristica clinica principale della malattia è la diminuzione della forza muscolare (paralisi). Quale dei seguenti farmaci somministreresti ad un pz affetto da miastenia per aumentare la forza muscolare?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('hR+U2gTP9oE=', 763, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "atropina";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Cks6IQ+Jjm8=', 765, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "digossina";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('TwXLrnb7zt4=', 767, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "inibitore dell'acetilcolinesterasi";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('GLqxnFwLAnU=', 1128, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "tossina tetanica";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('19eRFzk9o9E=', 1130, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "curaro";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion37()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 36;
    var weight = DecodeNumber('EZJx1BgdtH8=', 1130, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = true;
    question.shortTextQuestion = "Indica l'ordine corretto dei passaggi che portano al rilascio di neurotrasmettitore";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('EZJx1BgdtH8=', 1132, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "entrata di calcio, rilascio delle vesicole, inibizione della sinaptotagmina, attivazione della sinapsina, priming  e zippering, poro di fusione, rilascio";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('fNj4CZJ1EpA=', 1134, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "entrata di calcio, attivazione della sinapsina, rilascio della vescicole, inibizione della sinaptotagmina, priming e zippering, rilascio, poro di fusione";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('p21XabHPCO4=', 495, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "entrata di calcio, attivazione della sinapsina, rilascio delle vescicole, priming e zippering, inibiione della sinaptotagmina, poro di fusione, rilascio";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('p21XabHPCO4=', 497, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "entrata di calcio, rilascio delle vescicole, attivazione sinapsina, inibizione della sinaptotagmina, priming e zippering, poro di fusione, rilascio";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion38()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 37;
    var weight = DecodeNumber('8tx2Vts8wp8=', 499, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = true;
    question.shortTextQuestion = "La reserpina è un farmaco che blocca il trasportatore vescicolare VMAT, che trasporta adrenalina, noradrenalina e serotonina dal citoplasma nelle vescicole sinaptiche. Che effetto ha la reserpina sul rilascio di questi neurotrasmettitori?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('cppJFJzw48U=', 501, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "le vescicole sono rilasciate vuote con un successivo mEPP mancante";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('0TrLAw4d+Nw=', 1339, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "nessuno";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('pLrX/2Y49PY=', 1341, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "le vescicole vanno incontro a lisi";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Jso34EzZUEA=', 1343, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "le vescicole non sono rilasciate";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('L0qlra69F8A=', 1345, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "nessuno";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion39()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 38;
    var weight = DecodeNumber('9MC3cd29p6U=', 899, 0, 99999);
    var numOfAnswers = 6;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "L'immagine sottostante rappresenta un famosissimo esperimento condotto da Otto Loewi sul cuore di rana in merito alla disputa \"dry versus wet\".  ";
    choice = $('#idGap39_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('WGsJ5wkt1eVaC8sCwnNhY+4fRiahdZGM84WHb2LeAnFbpAtU3zQYEA=='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap39_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('ABuGONr6fF7LkdPkj5EEzjP1aiflQ1bU'));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap39_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('9zsw5rc9BDWJEZY47cU5Wx6ECtrWB+N7'));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    choice = $('#idGap39_3').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('9zsw5rc9BDWJEZY47cU5Wx6ECtrWB+N7'));
    var answer3 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer3);
    choice = $('#idGap39_4').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('epBOxYRso8MoQBK0kk+PiMWhojK9cdHn'));
    var answer4 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer4);
    choice = $('#idGap39_5').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('pBJr7nE/8fBluUJQ'));
    var answer5 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion40()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 39;
    var weight = DecodeNumber('ACAmm1Mv/kk=', 1213, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = true;
    question.shortTextQuestion = "I grafici sottostanti mostrano le correnti di membrana in funzione del tempo, misurate in condizioni di voltage clamp nell’assone gigante del calamaro, per potenziali di membrana compresi tra -45 e +75 mV. Tracce in (1): correnti misurate in condizioni normali; tracce (2): correnti misurate in presenza di TTX; tracce (3): correnti misurate in presenza di TEA.  Qual è il potenziale di inversione della corrente di Na+?  ";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('ACAmm1Mv/kk=', 1215, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "0mV";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('xHKj1I8Vnyg=', 1217, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "-70mV";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('4yS03QJfShY=', 1219, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "-40mV";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('puXhMzkcCKw=', 1221, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "+30mV";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('u4CmQtfbN6g=', 1223, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "+45mV";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion41()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 40;
    var weight = DecodeNumber('T8NmH7dMjX0=', 581, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = true;
    question.shortTextQuestion = "Il TEA è un bloccante selettivo dei canali voltaggio dipendenti del potassio (Kv). Che effetto avrebbe il TEA sul potenziale di azione di una fibra nervosa?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('T8NmH7dMjX0=', 583, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "non ha alcun effetto";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('pNc6pFnClxs=', 585, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "rallenta al depolarizzazione";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Lix5ydhXB00=', 587, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "ostacola solo la iperpolarizzazione tardiva";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('MevmbexhF0g=', 589, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "cambia la soglia del potenziale di azione";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('sLrajATHxeA=', 428, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "ostacola la ripolarizzazione la successiva iperpolarizzazione tardiva";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion42()
{
    const type = QMAKE_BOOLEAN;
    const questionIndex = 41;
    var choice, valuation, noChoice = false;;
    var weight = DecodeNumber('sLrajATHxeA=', 428, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Indica quali affermazioni sono corrette rispetto al modello di Hodgkin e Huxley";
    choice = GetBooleanChoice(questionIndex,0);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 0);
    valuation = DecodeNumber('sLrajATHxeA=', 428, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer0 = new Answer(choice, valuation, 1, 0, '');
    answer0.shortTextAnswer = "fu in grado di spiegare l'overshoot del potenziale di azione";
    question.answers.push(answer0);
    choice = GetBooleanChoice(questionIndex,1);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 1);
    valuation = DecodeNumber('sLrajATHxeA=', 430, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer(choice, valuation, 1, 0, '');
    answer1.shortTextAnswer = "venne elaborato tramite la tecnica del Patch Clamp";
    question.answers.push(answer1);
    choice = GetBooleanChoice(questionIndex,2);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 2);
    valuation = DecodeNumber('E2n5TwgNDI4=', 791, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer(choice, valuation, 1, 0, '');
    answer2.shortTextAnswer = "prevede un cambiamento nella conduttanza della membrana a determinati ioni, prima lo ione potassio poi lo ione sodio";
    question.answers.push(answer2);
    choice = GetBooleanChoice(questionIndex,3);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 3);
    valuation = DecodeNumber('fpxmznQd1tk=', 793, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer(choice, valuation, 1, 0, '');
    answer3.shortTextAnswer = "prevede un iniziale aumento della conduttanza del sodio e successivamente di quella del potassio";
    question.answers.push(answer3);
    choice = GetBooleanChoice(questionIndex,4);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 4);
    valuation = DecodeNumber('fpxmznQd1tk=', 795, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer(choice, valuation, 1, 0, '');
    answer4.shortTextAnswer = "il modello venne anche definito come modello della \"rottura della barriera\"";
    question.answers.push(answer4);
    question.noChoice = noChoice;
    return question;

}
/* Code generated function */
function InitQuestion43()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 42;
    var weight = DecodeNumber('CiDRkm6VuSQ=', 1155, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "In cosa consiste il periodo refrattario? (più di una risposta è corretta)";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('CiDRkm6VuSQ=', 1157, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "dipende dall'inattivanzione dei canali del potassio";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('1dIyWTV8zHU=', 1159, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "dipende dal meccanismo di inattivazione dei canali del sodio";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('1dIyWTV8zHU=', 1161, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "è della stessa durata per tutte le cellule eccitabili";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('eMLM8w+kwhQ=', 1163, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "si distingue in assoluto e relativo";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('eMLM8w+kwhQ=', 1165, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "è una delle fasi del potenziale di azione";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion44()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 43;
    var weight = DecodeNumber('kpLdmqBJ16k=', 1002, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Un segmento di assone è stimolato elettricamente a entrambe le estremità, in modo da generare due potenziali depolarizzanti che viaggiano uno contro l'altro e si incontrano a metà dell'assone, in due differenti condizioni: 1. stimolo sotto soglia 2. stimolo sopra soglia. Cosa accade nel punto in cui i due potenziali collidono? (più di una risposta è corretta)";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('YOQ/slxKswk=', 1004, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "nel caso 1. se i due potenziali sommandosi generano una depolarizzazione sopra soglia, si innescherà un potenziale di azione altrimenti no";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('YOQ/slxKswk=', 1006, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "nel caso 1. non si innescherà mai un potenziale di azione, nel caso 2 si";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('7E7DBZXGXsQ=', 1008, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "nel caso 2 non si innescherà un potenziale di azione dato che ogni potenziale si spegne nel periodo refrattario dell'altro";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Vbw5rm/k9eI=', 1369, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "in nessun caso si innesca un potenziale di azione";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('4YoZbFAUL2k=', 1371, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var choice5 = GetMultipleAnswerChoice(questionIndex, 4);
    if (choice5 === 1) question.noChoice = false;
    var answer5 = new Answer(choice5, valuation5, 1, 0, '');
    answer5.shortTextAnswer = "in entrambi i casi di innesca un potenziale di azione";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion45()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 44;
    var weight = DecodeNumber('0q4vDYx6bW8=', 1371, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = true;
    question.shortTextQuestion = "Il \"duty ratio\"";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('0q4vDYx6bW8=', 1373, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "è il rapporto tra l'efficienza sviluppata dal muscolo e quello massima erogabile";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('UrDrhOtxF2Q=', 733, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "è il rapporto tra il tempo in cui la miosina è legata all'actina e quello in cui non vi è legata";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('atOJk14ab8o=', 735, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "aumenta all'aumentare della velocità dei cicli di contrazione";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('6gYgskC14c8=', 737, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "è il rapporto tra il tempo in cui la miosina è legata all'actina e il tempo totale";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('6gYgskC14c8=', 739, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "è importante nel meccanismo di contrazione del muscolo striato";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}
/* Code generated function */
function InitQuestion46()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 45;
    var weight = DecodeNumber('XSJy8BmvbMo=', 576, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Completa il seguente testo scegliendo le frasi corrette:";
    choice = $('#idGap46_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('ds/JsjrOkSqYHqgkZREN9N4Dv1os9wcrzFgDDQ=='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap46_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('cgbwlkY69m+KIusL'));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap46_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('5BvKzuieQ6uRv/PseHGHH/X6yGaZVkEt'));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    choice = $('#idGap46_3').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('BlaMW7P6Dkuw8ZOLaRlcXJyfvbX5dH9Obhg/JU8CGEzSOIlDP4KfhQ=='));
    var answer3 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer3);
    choice = $('#idGap46_4').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('ltEi7C1d2y2E3AK6gNnbkxz0Rg2ajXqvgDkpwFO2Tp0Qzz2BCbLy0pXU4WI='));
    var answer4 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion47()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 46;
    var weight = DecodeNumber('L4J/o0TUCG4=', 945, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = true;
    question.shortTextQuestion = "Indica il corretto ordine dei passaggi che conducono all'LTP";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('L4J/o0TUCG4=', 947, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "treno di spike, rilascio glutammato, attivazione NMDA, depolarizzazione tramite gli AMPA, pathway per modifiche strutturali sinapsi, aumento calcio intracellulare";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('6DXNp7jiYYw=', 949, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "treno di spike, rilascio glutammato, depolarizzazione tramite gli AMPA, attivazione NMDA, aumento calcio intracellulare, pathway per modifiche strutturali sinapsi";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('6DXNp7jiYYw=', 951, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "treno di spike, rilascio glutammato, attivazione NMDA, depolarizzazione tramite gli AMPA, aumento calcio intracellulare, pathway per modifiche strutturali sinapsi";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('I/dNpNCkYH0=', 789, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "rilascio di glutammato, treno di spike, depolarizzazione tramite gli AMPA, attivazione NMDA, aumento calcio intracellulare, pathway per modifiche strutturali sinapsi";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion48()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 47;
    var weight = DecodeNumber('iiG1nT0KEJ0=', 509, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = true;
    question.shortTextQuestion = "Lo schema sottostante mostra l’effetto di un disturbo su un generico sistema regolato, in assenza di un meccanismo a feedforward (parte sinistra della figura) e in presenza di feedforward (parte destra della figura). Applica lo schema ad una situazione in cui un probando deve mantenere il braccio orizzontale mentre gli viene applicato un carico. Qual è la variabile regolata in questo specifico caso?   Didascalia: PV = variabile regolata. Linea continua orizzontale = set point. Controller output = segnale in uscita dal controllore. Le unità di misura sono arbitrarie";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('iiG1nT0KEJ0=', 511, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "angolo dell'articolazione di spalla e gomito";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('OuEgaCyGxS4=', 513, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "altezza a cui il braccio si trova";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('wX6GdhLLGxM=', 515, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "angolo dell'articolazione di spalla e gomito";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('zlcVcBNDCSo=', 1353, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "forza con cui si sostiene il carico";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    var valuation5 = DecodeNumber('JBFErfb8CS4=', 1355, -1, 1);
    if (valuation5 === -2) PrintWrongKeyword(questionIndex);
    var answer5 = new Answer((choice == 5 ? 1 : 0), valuation5, 1, 0, '');
    answer5.shortTextAnswer = "traiettoria elaborata dalla vista";
    answer5.shortTextRemark = "";
    question.answers.push(answer5);
    return question;

}






