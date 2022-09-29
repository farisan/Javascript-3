/* 
    Homework Javascript 3

    Buat program menggunakan callback function untuk melanjutkan dan 
    menampilkan semua bulan menggunakan method map

    Contoh:
        getmonth(showMonth) //menampilkan semua bulan dalam let month

    NOTED:
    1. menggunakan fungsi callback
    2. menggunakan method map untuk menampilkan semua bulan
 */


// ======================================================================== //


/* 
    NOTED:
    let error = false;
    !error => menjadi true
*/



const getMonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = [
            "January", "Febuary", "Maret", "April",
            "Mei", "Juni", "Juli", "Agustus",
            "September", "Oktober", "November", "Desember", 
            ];

        if (!error) {
            callback(null, month);
        } else {
            callback(new Error("Sorry Data Not Found"), []);
        }
    }, 100);
}; 

const showMonth = ((empety,month) => {
    if(empety == null) {
        let showArray = month.map(element => element);
        console.log(showArray);
    } else{
        console.log((empety.message),month);
    }
})


getMonth(showMonth);
