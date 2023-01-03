

const arrayOrder = [
    { id: 2379521065, name: "	Ковтун Володимир Іванович	", startPeriod30t: "	01.11.2022	", finishPeriod30t: "	02.11.2022	", periodNumbers30t: [], days30t: 2, startPeriod100t: "	00.01.1900	", finishPeriod100t: "	00.01.1900	", periodNumbers100t: [], days100t: 0 },
    { id: 2705017324, name: "	Тарасенко Дмитро Валентинович	", startPeriod30t: "	01.11.2022	", finishPeriod30t: "	02.11.2022	", periodNumbers30t: [], days30t: 2, startPeriod100t: "	00.01.1900	", finishPeriod100t: "	00.01.1900	", periodNumbers100t: [], days100t: 0 },
    { id: 3333503477, name: "	Кумиков Олександр Валерійович	", startPeriod30t: "	01.11.2022	", finishPeriod30t: "	02.11.2022	", periodNumbers30t: [], days30t: 2, startPeriod100t: "	00.01.1900	", finishPeriod100t: "	00.01.1900	", periodNumbers100t: [], days100t: 0 },
    { id: 2627902683, name: "	Деркач Володимир Іванович	", startPeriod30t: "	28.11.2022	", finishPeriod30t: "	30.11.2022	", periodNumbers30t: [], days30t: 3, startPeriod100t: "	00.01.1900	", finishPeriod100t: "	00.01.1900	", periodNumbers100t: [], days100t: 0 },
    { id: 2609718258, name: "	Лучко Микола Васильович	", startPeriod30t: "	26.11.2022	", finishPeriod30t: "	30.11.2022	", periodNumbers30t: [], days30t: 5, startPeriod100t: "	00.01.1900	", finishPeriod100t: "	00.01.1900	", periodNumbers100t: [], days100t: 0 },
    { id: 2568905597, name: "	Литвиненко Руслан Олексійович	", startPeriod30t: "	25.11.2022	", finishPeriod30t: "	30.11.2022	", periodNumbers30t: [], days30t: 6, startPeriod100t: "	00.01.1900	", finishPeriod100t: "	00.01.1900	", periodNumbers100t: [], days100t: 0 },
    { id: 2489112463, name: "	Шандиба Андрій Семенович	", startPeriod30t: "	00.01.1900	", finishPeriod30t: "	00.01.1900	", periodNumbers30t: [], days30t: 0, startPeriod100t: "	01.11.2022	", finishPeriod100t: "	30.11.2022	", periodNumbers100t: [], days100t: 30 },
    { id: 3414409736, name: "	Лещинський Олександр Юрійович	", startPeriod30t: "	00.01.1900	", finishPeriod30t: "	00.01.1900	", periodNumbers30t: [], days30t: 0, startPeriod100t: "	01.11.2022	", finishPeriod100t: "	30.11.2022	", periodNumbers100t: [], days100t: 30 },
    { id: 3508008557, name: "	Славуцький Ілля Олександрович	", startPeriod30t: "	00.01.1900	", finishPeriod30t: "	00.01.1900	", periodNumbers30t: [], days30t: 0, startPeriod100t: "	01.11.2022	", finishPeriod100t: "	30.11.2022	", periodNumbers100t: [], days100t: 30 },
    { id: 2526913182, name: "	Федоренко Станіслав Євгенович	", startPeriod30t: "	00.01.1900	", finishPeriod30t: "	00.01.1900	", periodNumbers30t: [], days30t: 0, startPeriod100t: "	01.11.2022	", finishPeriod100t: "	30.11.2022	", periodNumbers100t: [], days100t: 30 },
    { id: 2881115521, name: "	Макаров Іван Олексійович	", startPeriod30t: "	00.01.1900	", finishPeriod30t: "	00.01.1900	", periodNumbers30t: [], days30t: 0, startPeriod100t: "	01.11.2022	", finishPeriod100t: "	30.11.2022	", periodNumbers100t: [], days100t: 30 },
    { id: "бк ID003523014", name: "	Брічак Давид Олександрович	", startPeriod30t: "	00.01.1900	", finishPeriod30t: "	00.01.1900	", periodNumbers30t: [], days30t: 0, startPeriod100t: "	01.11.2022	", finishPeriod100t: "	30.11.2022	", periodNumbers100t: [], days100t: 30 },
    { id: 3389109780, name: "	Русавський Роман Леонідович	", startPeriod30t: "	00.01.1900	", finishPeriod30t: "	00.01.1900	", periodNumbers30t: [], days30t: 0, startPeriod100t: "	01.11.2022	", finishPeriod100t: "	30.11.2022	", periodNumbers100t: [], days100t: 30 },
    { id: 3021116963, name: "	Єзерський Юрій Володимирович	", startPeriod30t: "	00.01.1900	", finishPeriod30t: "	00.01.1900	", periodNumbers30t: [], days30t: 0, startPeriod100t: "	24.11.2022	", finishPeriod100t: "	30.11.2022	", periodNumbers100t: [], days100t: 7 },
    { id: 3649708904, name: "	Недайхлєбов Олександр Миколайович	", startPeriod30t: "	00.01.1900	", finishPeriod30t: "	00.01.1900	", periodNumbers30t: [], days30t: 0, startPeriod100t: "	01.11.2022	", finishPeriod100t: "	30.11.2022	", periodNumbers100t: [], days100t: 30 },
    { id: 0, name: "	Смоленцев Сергій Миколайович	", startPeriod30t: "	00.01.1900	", finishPeriod30t: "	00.01.1900	", periodNumbers30t: [], days30t: 0, startPeriod100t: "	07.11.2022	", finishPeriod100t: "	30.11.2022	", periodNumbers100t: [], days100t: 24 },
    { id: 3261209656, name: "	Охріменко Вячеслав Юрійович	", startPeriod30t: "	00.01.1900	", finishPeriod30t: "	00.01.1900	", periodNumbers30t: [], days30t: 0, startPeriod100t: "	01.11.2022	", finishPeriod100t: "	30.11.2022	", periodNumbers100t: [], days100t: 30 },
    { id: 3012422563, name: "	Глущенко Максим Петрович	", startPeriod30t: "	00.01.1900	", finishPeriod30t: "	00.01.1900	", periodNumbers30t: [], days30t: 0, startPeriod100t: "	01.11.2022	", finishPeriod100t: "	30.11.2022	", periodNumbers100t: [], days100t: 30 },
    { id: 3609307585, name: "	Павловський Олександр Олександрович	", startPeriod30t: "	00.01.1900	", finishPeriod30t: "	00.01.1900	", periodNumbers30t: [], days30t: 0, startPeriod100t: "	01.11.2022	", finishPeriod100t: "	30.11.2022	", periodNumbers100t: [], days100t: 30 },
    { id: 2524814742, name: "	Парипа Іван Миколайович	", startPeriod30t: "	00.01.1900	", finishPeriod30t: "	00.01.1900	", periodNumbers30t: [], days30t: 0, startPeriod100t: "	01.11.2022	", finishPeriod100t: "	30.11.2022	", periodNumbers100t: [], days100t: 30 },
    { id: 3006315936, name: "	Ільїн Віталій Сергійович	", startPeriod30t: "	00.01.1900	", finishPeriod30t: "	00.01.1900	", periodNumbers30t: [], days30t: 0, startPeriod100t: "	01.11.2022	", finishPeriod100t: "	30.11.2022	", periodNumbers100t: [], days100t: 30 },
    { id: 2704801015, name: "	Друмова Олена Анатоліївна	", startPeriod30t: "	00.01.1900	", finishPeriod30t: "	00.01.1900	", periodNumbers30t: [], days30t: 0, startPeriod100t: "	01.11.2022	", finishPeriod100t: "	30.11.2022	", periodNumbers100t: [], days100t: 30 },
    { id: 3294514379, name: "	Сімонов Костянтин Вікторович	", startPeriod30t: "	00.01.1900	", finishPeriod30t: "	00.01.1900	", periodNumbers30t: [], days30t: 0, startPeriod100t: "	01.11.2022	", finishPeriod100t: "	30.11.2022	", periodNumbers100t: [], days100t: 30 },
    { id: 3354407621, name: "	Клещар Костянтин Васильович	", startPeriod30t: "	00.01.1900	", finishPeriod30t: "	00.01.1900	", periodNumbers30t: [], days30t: 0, startPeriod100t: "	01.11.2022	", finishPeriod100t: "	30.11.2022	", periodNumbers100t: [], days100t: 30 },
    { id: 2335116378, name: "	Осадчук Олександр Філімонович	", startPeriod30t: "	00.01.1900	", finishPeriod30t: "	00.01.1900	", periodNumbers30t: [], days30t: 0, startPeriod100t: "	00.01.1900	", finishPeriod100t: "	00.01.1900	", periodNumbers100t: [], days100t: 0 },
    { id: 3248219081, name: "	Кучеренко Павло Петрович	", startPeriod30t: "	00.01.1900	", finishPeriod30t: "	00.01.1900	", periodNumbers30t: [], days30t: 0, startPeriod100t: "	00.01.1900	", finishPeriod100t: "	00.01.1900	", periodNumbers100t: [], days100t: 0 },
    { id: 2909914840, name: "	Климчук Віктор Михайлович	", startPeriod30t: "	00.01.1900	", finishPeriod30t: "	00.01.1900	", periodNumbers30t: [], days30t: 0, startPeriod100t: "	00.01.1900	", finishPeriod100t: "	00.01.1900	", periodNumbers100t: [], days100t: 0 },
    { id: 2556921681, name: "	Біланич Василь Михайлович	", startPeriod30t: "	00.01.1900	", finishPeriod30t: "	00.01.1900	", periodNumbers30t: [], days30t: 0, startPeriod100t: "	00.01.1900	", finishPeriod100t: "	00.01.1900	", periodNumbers100t: [], days100t: 0 },
    { id: 2776902037, name: "	Матвієнко Євген Іванович	", startPeriod30t: "	00.01.1900	", finishPeriod30t: "	00.01.1900	", periodNumbers30t: [], days30t: 0, startPeriod100t: "	00.01.1900	", finishPeriod100t: "	00.01.1900	", periodNumbers100t: [], days100t: 0 },
    { id: 3390611681, name: "	Сіденко Ярослав Володимирович	", startPeriod30t: "	00.01.1900	", finishPeriod30t: "	00.01.1900	", periodNumbers30t: [], days30t: 0, startPeriod100t: "	00.01.1900	", finishPeriod100t: "	00.01.1900	", periodNumbers100t: [], days100t: 0 },
    { id: 3580106581, name: "	Сисоєв Олександр Русланович	", startPeriod30t: "	00.01.1900	", finishPeriod30t: "	00.01.1900	", periodNumbers30t: [], days30t: 0, startPeriod100t: "	00.01.1900	", finishPeriod100t: "	00.01.1900	", periodNumbers100t: [], days100t: 0 },
    { id: 2776902037, name: "	Матвієнко Євген Іванович	", startPeriod30t: "	00.01.1900	", finishPeriod30t: "	00.01.1900	", periodNumbers30t: [], days30t: 0, startPeriod100t: "	00.01.1900	", finishPeriod100t: "	00.01.1900	", periodNumbers100t: [], days100t: 0 },
    { id: 3390611681, name: "	Сіденко Ярослав Володимирович	", startPeriod30t: "	00.01.1900	", finishPeriod30t: "	00.01.1900	", periodNumbers30t: [], days30t: 0, startPeriod100t: "	00.01.1900	", finishPeriod100t: "	00.01.1900	", periodNumbers100t: [], days100t: 0 },
    { id: 3580106581, name: "	Сисоєв Олександр Русланович	", startPeriod30t: "	00.01.1900	", finishPeriod30t: "	00.01.1900	", periodNumbers30t: [], days30t: 0, startPeriod100t: "	00.01.1900	", finishPeriod100t: "	00.01.1900	", periodNumbers100t: [], days100t: 0 },
    { id: 2379521065, name: "	Ковтун Володимир Іванович	", startPeriod30t: "	01.11.2022	", finishPeriod30t: "	05.11.2022	", periodNumbers30t: [], days30t: 5, startPeriod100t: "	06.01.1900	", finishPeriod100t: "	30.01.1900	", periodNumbers100t: [], days100t: 25 },
    { id: 2705017324, name: "	Тарасенко Дмитро Валентинович	", startPeriod30t: "	00.11.2022	", finishPeriod30t: "	00.11.2022	", periodNumbers30t: [], days30t: 0, startPeriod100t: "	01.01.1900	", finishPeriod100t: "	02.01.1900	", periodNumbers100t: [], days100t: 2 },
    { id: 3333503477, name: "	Кумиков Олександр Валерійович	", startPeriod30t: "	01.11.2022	", finishPeriod30t: "	02.11.2022	", periodNumbers30t: [], days30t: 2, startPeriod100t: "	00.01.1900	", finishPeriod100t: "	00.01.1900	", periodNumbers100t: [], days100t: 0 },
    { id: 3508008557, name: "	Славуцький Ілля Олександрович	", startPeriod30t: "	00.01.1900	", finishPeriod30t: "	00.01.1900	", periodNumbers30t: [], days30t: 0, startPeriod100t: "	06.11.2022	", finishPeriod100t: "	30.11.2022	", periodNumbers100t: [], days100t: 25 }

  
];


export default arrayOrder;

// [
//     { id: 3253023076, name: "Прудиус Сергій Вікторович", day: 10, day100t: 15 },
//     { id: 2612619938, name: "Ужва Олександр Миколайович", day30t: 10, day100t: 15 },
//     { id: 2795923519, name: "Шамшур Анатолій Анатолійович", day30t: 10, day100t: 15 },
//     { id: 2612123438, name: "Коновалов Сергій Вікторович", day30t: 10, day100t: 15 },
//     { id: 2443617259, name: "Гончаров Леонід Анатолійович", day30t: 10, day100t: 15 },
//     { id: 2741712394, name: "Гуль Віктор Григорович", day30t: 10, day100t: 15 },
//     { id: 2881115775, name: "Макаров Іван Олексійович", day30t: 10, day100t: 15 },
//     { id: 2989419515, name: "Дмітрієв Ігор Михайлович", day30t: 10, day100t: 31 },
//     { id: 3198907872, name: "Ануфрієв Сергій Олексійович", day30t: 10, day100t: 26 },
//     { id: 3073020072, name: "Нечепоренко Володимир Олександрович", day30t: 10, day100t: 5 },
//     { id: 2791320271, name: "Фісюк Максим Миколайович", day30t: 10, day100t: 29 },
//     { id: 2510104938, name: "Нагорний Микола Анатолійович", day30t: 10, day100t: 10 }
    
// ];