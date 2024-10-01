const express = require("express") //Impor modul express
const app = express() //Inisialisasi express
const expressLayout = require("express-ejs-layouts"); //Import modul express-ejs-layouts
const port = 3004

app.set("views", __dirname + "/views");
app.set('view engine', 'ejs');

app.use(expressLayout);

//route
app.get("/" ,(req,res) => {
    //res.send("hello");
    //res.sendFile(__dirname + "/home.html");
    //res.render('index', {title: 'Halaman Home'});

    const berita = [
        {
            judul: "Berita 1",
            isi: "Isi Berita 1"
        },
        {
            judul: "Berita 2",
            isi: "Isi Berita 2"
        },
    ];
    res.render('index', {title: 'Halaman Home', berita, layout: 'main'});
});

//route
app.get("/about" ,(req,res) => {
    //res.send("about");
    //res.sendFile(__dirname + "/aboutus.html");
    res.render("about", {title: 'About Us', layout: 'main'});
});

// route kontak
app.get("/contact" ,(req,res) => {
    //res.send("contact us");
    //res.sendFile(__dirname + "/contact.html");
    res.render('contact');
});

app.get("/mahasiswa", (req,res)=>{
    res.json({
        "status" : "success",
        "message" : "data mahasiswa",
        "data" : [{npm: 2226240108, nama: "irpan paok"},
            {npm: 2226240109, nama: "irpan paok2"} 
        ]
    })
})
app.get("/dosen", (req,res)=>{
    res.json({
        "status" : "success",
        "message" : "data dosen",
        "data" : [
            {prodi : "sistem_informasi", 
            dosen : ["Faris","Pak Iis"]
        }
    ]
    })
});

app.get("/prodi" ,(req,res) => {
    const prodi = [
        {
            prodi: "Sistem Informasi",
            fakultas: "FKIR",
            singkatan: "SI"
        },
        {
            prodi: "Informatika",
            fakultas: "FKIR",
            singkatan: "IF"
        },
        {
            prodi: "Teknologi Elektro",
            fakultas: "FKIR",
            singkatan: "TE"
        },
        {
            prodi: "Manajemen Informatika",
            fakultas: "FKIR",
            singkatan: "MI"
        },
        {
            prodi: "Manajemen",
            fakultas: "FEB",
            singkatan: "MJ"
        },
        {
            prodi: "Akutansi",
            fakultas: "FEB",
            singkatan: "AK"
        },
    ];
    res.render('prodi', {title: 'Halaman Prodi', prodi, layout: 'main'});
});

// handle route yang tidak terdaftar
app.use("/" ,(req,res) => {
    res.send("<h1>404 not found</h1>");
});

//jalankan route
app.listen(port, ()=>{
    console.log(`server dapat di akses di http://localhost:${port}`);
});

