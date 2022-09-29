/* 
    Homework Javascript 3

    Buatlah 2 program bebas dengan menggunakan promise seperti soal nomor 1

    NOTED:
    1. Case 1 menggunakan promise .then & .catch
    2. Case 2 menggunakan promise .try & catch
 */


// ======================================================================== //


/* 
    ============================================= 
            Case 1 => .then & .catch
    =============================================
 */

const dikalikan = (boolean, perkalian) =>{
        return new Promise((resolve, reject)=>{
        setTimeout(() => {
        const nilai = [2, 3, 4, 5]
        if(!boolean){
                resolve(nilai);
        }else{
                reject(new Error("boolean harus false"))
        }},3000)
})

        .then((nilai) => {
                let nilaimap = nilai.map((element) => {return element * perkalian})
                console.log(`Data menjadi ${nilaimap}`);
        })
        
        .catch((error) => {
                console.log(error.message);
        })
}
console.log("start");
dikalikan(false, 2);
dikalikan(true, 2);
console.log("end");














/* 
    ============================================= 
            Case 2 => try & catch
    =============================================
 */


//     const pertambahan = (pertambahan) =>{
//         return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//         const typedata = false;
//         const nilai = [2, 3, 4, 5]
//         const nilaimap = nilai.map(element => {return element + pertambahan})
//         if(!typedata){
//                 resolve(nilaimap);
//         }else{
//                 reject(new Error("boolean harus false"))
//         }},3000)
// })
// }

// const maping = (async(nilaimap) => {
//         try {
//                 const hasil = await (nilaimap);
//                 return hasil;
//         } catch (error) {
//                 return error.message;
//         }
// })

// const doAsync = async () => {
//     console.log(await pertambahan(2));
// };
// console.log("start");
// doAsync();
// console.log("end");

