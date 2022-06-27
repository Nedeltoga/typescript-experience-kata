const experienceCalculator = (start: string, end: string) =>{
    let startDate = new Date(start);
    let endDate = new Date(end);
    let differenceIntime = endDate.getTime() - startDate.getTime();
    let differenceInDays = differenceIntime / (1000 * 3600 * 24);



    let days = differenceInDays%30
    let monthsForYear = Math.floor(differenceInDays/30)
    let year = Math.floor(monthsForYear/12)
    let months = Math.floor(monthsForYear%12)

   
    let resultDate = `Your experience is ${year} year, ${months} months and ${days}days` 
    console.dir({resultDate})
}
experienceCalculator("2020-05-10", "2021-12-15")