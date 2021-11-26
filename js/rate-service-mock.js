let rates = [
    {
        "name": "30 years fixed",
        "rate": "13",
        "years": "30"
    },
    {
        "name": "25 years fixed",
        "rate": "3.8",
        "years": "25"
    },
    {
        "name": "20 years fixed",
        "rate": "2.8",
        "years": "20"
    },
    {
        "name": "15 years fixed",
        "rate": "2.3",
        "years": "15"
    }
 ];

 export let findAll = () => new Promise((resolve, reject) => {
    if (rates) {
        resolve(rates);
    } else {
        reject("No rates");
    }
});