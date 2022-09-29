/*  
    Homework Javascript 3
    
    Buatlah sambungan program menggunakan then catch dan juga try catch 
    untuk mengecek hari kerja dari kode Asynchronous dibawah dan jelaskan penggunaan then catch 
    dan try catch dengan memberikan komentar di bawahnya: 

    const cekHariKerja = (day) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dataDay = ['senin','selasa','rabu','kamis','jumat']
            let cek = dataDay.find((item)=>{
                return item === day
            })
                if(cek){
                    resolve(cek)
                }else {
                    reject(new Error('Hari ini bukan hari kerja'))
                }
            },3000)
        })
    }

    NOTED:
    1. Fungsi cekHariKerja
    2. Buat promise menggunakan .then dan .catch
    3. buat promise menggunakan .try dan .catch
 */




// ================================================ //


/* 
    ============================================= 
            Promise => .then & .catch
    =============================================
 */


// promise menggunakan 2 parameter yaitu resolve untuk success dan reject untuk failed
// parameter resolve menganut fungsi callback. jika ingin memanggil resolve tinggal .then 
// resolve(result) -> .then(result)
// parameter reject menganut fungsi callback. jika ingin memanggil reject tinggal .catch
// reject(error) -> .catch(error)

const cekHariKerja = (day) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dataDay = ['senin','selasa','rabu','kamis','jumat']
            let cek = dataDay.find((item)=>{    //mencari element dalam data yang ada di dataArray
                return item === day
            })
            if(cek){
                resolve(cek)    //resolve => success | menganut fungsi callback
            }else {
                reject(new Error('Hari ini bukan hari kerja'))  //reject => failed
            }
        },3000)
    })

    // .then menangkap callback resolve
    .then((cek) => {
        console.log(`${cek} adalah hari kerja`);
    })
    // .catch menangkap callback catch
    .catch((error) => {
        console.log(error.message);
    })
}
cekHariKerja("selasa");
cekHariKerja("minggu");




// NOTED: cara ke 2 (Jika .then & .catch nya diluar function)
// cekHariKerja("selasa")
//     .then((cek) => {
//         console.log(`${cek} adalah hari kerja`);
//     })
//     .catch((error) => {
//         console.log(error.message);
//     })








/* 
    ============================================= 
            Promise => try & catch
    =============================================
 */

//  try {
//    implementasi code success;
//  } catch (error) {
//    implementasi code failed;
//  }


// const cekHariKerja = (day) =>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const dataDay = ['senin','selasa','rabu','kamis','jumat']
//             let cek = dataDay.find((item)=>{
//                 return item === day
//             })
//             if(cek){
//                 resolve(cek)
//             }else {
//                 reject(new Error('Hari ini bukan hari kerja'))
//             }
//         },3000)
//     })
// }

// const hasil = async (day ,cek) => {
//     // try menangkap callback resolve
//     try {
//         if(typeof day !== "string") return "data harus string";
//         const response = await cek(day);
//         return response;
//     // catch menangkap callback reject
//     } catch (error) {
//         return error.message;
//     }
// }  

// const doAsync = async () => {
//     console.log(await hasil('selasa', cekHariKerja));
// };
// doAsync();