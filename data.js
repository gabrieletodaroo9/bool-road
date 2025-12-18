const database = [
    {
        id: 1,
        meta: "Parigi, Francia",
        data_partenza: "2025-12-15",
        data_ritorno: "2025-12-22",
        immagine: "https://www.bigbustours.com/media/wysiwyg/Article-Images-2020/Paris/BBT-Top10-Article-IMG-2-EiffelTower.jpg",
        accompagnatori: [
            { id: 101, nome: "Chiara", cognome: "Gialli" },
            { id: 102, nome: "Jean-Pierre", cognome: "Dubois" }
        ],
        partecipanti: [
            { id: 1, nome: "Mario", cognome: "Rossi", codice_fiscale: "RSSMRA80A01H501W", email: "mario.rossi@email.it", numero: "+39 333 1234567" },
            { id: 2, nome: "Giulia", cognome: "Bianchi", codice_fiscale: "BNCGLI85B41L219Z", email: "giulia.bianchi@email.it", numero: "+39 347 7654321" },
            { id: 3, nome: "Luca", cognome: "Verdi", codice_fiscale: "VRDLCU78M12F205R", email: "luca.verdi@gmail.com", numero: "+39 320 9876543" },
            { id: 4, nome: "Anna", cognome: "Neri", codice_fiscale: "NRANNA90A41L219X", email: "anna.neri@email.it", numero: "+39 339 1122334" },
            { id: 5, nome: "Paolo", cognome: "Bruni", codice_fiscale: "BRNPLA82A01H501U", email: "paolo.bruni@email.it", numero: "+39 345 2233445" },
            { id: 6, nome: "Elena", cognome: "Galli", codice_fiscale: "GLLLNE88B42F205T", email: "elena.galli@gmail.com", numero: "+39 333 5566778" },
            { id: 7, nome: "Riccardo", cognome: "Riva", codice_fiscale: "RVIRCC75M10H501Y", email: "r.riva@libero.it", numero: "+39 329 9988776" },
            { id: 8, nome: "Sofia", cognome: "Costa", codice_fiscale: "CSTSFO93S50L736P", email: "sofia.costa@yahoo.it", numero: "+39 340 1122990" },
            { id: 9, nome: "Diego", cognome: "Longo", codice_fiscale: "LNGDGO80T08H501X", email: "diego.longo@email.it", numero: "+39 331 4455667" },
            { id: 10, nome: "Marta", cognome: "Parodi", codice_fiscale: "PRDMRT85B41L219Z", email: "marta.parodi@gmail.com", numero: "+39 342 9988776" }
        ]
    },
    {
        id: 2,
        meta: "Tokyo, Giappone",
        data_partenza: "2025-12-10",
        data_ritorno: "2025-12-25",
        immagine: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCNRLsC3inJLBYXiwT2PVYFijCHUDC1Zoz9Q&s",
        accompagnatori: [
            { id: 201, nome: "Yuki", cognome: "Tanaka" },
            { id: 202, nome: "Roberto", cognome: "Fontana" }
        ],
        partecipanti: [
            { id: 1, nome: "Alessandro", cognome: "Ferrari", codice_fiscale: "FRRLSN88R15L736I", email: "a.ferrari@libero.it", numero: "+39 340 5566778" },
            { id: 2, nome: "Sofia", cognome: "Russo", codice_fiscale: "RSSSFO95S42F205Q", email: "sofia.russo@yahoo.it", numero: "+39 328 8899001" },
            { id: 3, nome: "Marco", cognome: "Esposito", codice_fiscale: "SPSMRC82T08H501X", email: "marco.expo@email.it", numero: "+39 331 4455667" },
            { id: 4, nome: "Elena", cognome: "Conti", codice_fiscale: "CNTLNE85B41L219Y", email: "elena.conti@gmail.com", numero: "+39 342 9988776" },
            { id: 5, nome: "Davide", cognome: "Mancini", codice_fiscale: "MNCDVD80A01H501L", email: "d.mancini@email.it", numero: "+39 345 1122334" },
            { id: 6, nome: "Chiara", cognome: "Romano", codice_fiscale: "RMNCHR92B42F205K", email: "chiara.rom@gmail.com", numero: "+39 338 5566778" },
            { id: 7, nome: "Simone", cognome: "Gallo", codice_fiscale: "GLLSMN77M10H501J", email: "simone.gallo@libero.it", numero: "+39 331 9988776" },
            { id: 8, nome: "Valentina", cognome: "Rizzo", codice_fiscale: "RZZVNT94S50L736W", email: "v.rizzo@outlook.it", numero: "+39 320 4455661" },
        ]
    },
    {
        id: 3,
        meta: "New York, USA",
        data_partenza: "2025-12-14",
        data_ritorno: "2025-12-21",
        immagine: "https://res.cloudinary.com/dtljonz0f/image/upload/c_auto,ar_4:3,w_3840,g_auto/f_auto/q_auto/v1/gc-v1/new-york/shutterstock_2142178205_yxfbc3?_a=BAVAZGE70",
        accompagnatori: [
            { id: 301, nome: "Frank", cognome: "Miller" },
            { id: 302, nome: "Valentina", cognome: "Romano" }
        ],
        partecipanti: [
            { id: 1, nome: "Davide", cognome: "Gallo", codice_fiscale: "GLLDVD77B14H501P", email: "davide.gallo@gmail.com", numero: "+39 333 7788990" },
            { id: 2, nome: "Martina", cognome: "Costa", codice_fiscale: "CSTMTN89E50L736O", email: "m.costa@alice.it", numero: "+39 349 6677889" },
            { id: 3, nome: "Stefano", cognome: "Greco", codice_fiscale: "GRCSFN88A20H501E", email: "stefano.greco@mail.it", numero: "+39 329 1239876" },
            { id: 4, nome: "Paola", cognome: "Bruno", codice_fiscale: "BRNPLA92T60L736V", email: "paola.bruno@outlook.com", numero: "+39 334 6655443" },
            { id: 5, nome: "Lorenzo", cognome: "Ferrero", codice_fiscale: "FRRLNZ80A01H501M", email: "l.ferrero@email.it", numero: "+39 345 5566443" },
            { id: 6, nome: "Marta", cognome: "Sanna", codice_fiscale: "SNNMRT88B42F205N", email: "marta.sanna@gmail.com", numero: "+39 333 2211009" },
            { id: 7, nome: "Giorgio", cognome: "Fabbri", codice_fiscale: "FBBGRG75M10H501Q", email: "g.fabbri@libero.it", numero: "+39 329 8877665" },
            { id: 8, nome: "Silvia", cognome: "Marchetti", codice_fiscale: "MRCSLV93S50L736R", email: "silvia.march@yahoo.it", numero: "+39 340 9988112" }
        ]
    },
    {
        id: 4,
        meta: "Reykjavík, Islanda",
        data_partenza: "2025-12-17",
        data_ritorno: "2025-12-24",
        immagine: "https://images.unsplash.com/photo-1521024221340-efe7d7fa239b?q=80&w=2070&auto=format&fit=crop",
        accompagnatori: [
            { id: 401, nome: "Bjorn", cognome: "Sigurðsson" },
            { id: 402, nome: "Elena", cognome: "Bianchi" }
        ],
        partecipanti: [
            { id: 1, nome: "Fabio", cognome: "Rizzo", codice_fiscale: "RZZFBA85A01L219H", email: "fabio.rizzo@email.it", numero: "+39 345 1122334" },
            { id: 2, nome: "Sara", cognome: "Mancini", codice_fiscale: "MNCSRA92B42F205K", email: "sara.mancini@gmail.com", numero: "+39 338 5566778" },
            { id: 3, nome: "Giorgio", cognome: "Basile", codice_fiscale: "BSLGRG77M10H501J", email: "giorgio.b@libero.it", numero: "+39 331 9988776" },
            { id: 4, nome: "Alice", cognome: "Leoni", codice_fiscale: "LNEALC94S50L736W", email: "alice.leoni@outlook.it", numero: "+39 320 4455661" },
            { id: 5, nome: "Enrico", cognome: "Grassi", codice_fiscale: "GRSNRC80A01H501S", email: "e.grassi@email.it", numero: "+39 345 9900887" },
            { id: 6, nome: "Lucia", cognome: "Sartori", codice_fiscale: "SRTLCU88B42F205A", email: "lucia.sart@gmail.com", numero: "+39 333 4455112" },
            { id: 7, nome: "Matteo", cognome: "Piras", codice_fiscale: "PRSMTT75M10H501G", email: "m.piras@libero.it", numero: "+39 329 2233445" },
            { id: 8, nome: "Monica", cognome: "Rinaldi", codice_fiscale: "RNLMNC93S50L736T", email: "monica.rin@yahoo.it", numero: "+39 340 8877665" },
            { id: 9, nome: "Sandro", cognome: "Vitali", codice_fiscale: "VTLSND82T08H501L", email: "sandro.v@email.it", numero: "+39 331 1122998" }
        ]
    },
    {
        id: 5,
        meta: "Maasai Mara, Kenya",
        data_partenza: "2025-12-08",
        data_ritorno: "2025-12-19",
        immagine: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop",
        accompagnatori: [
            { id: 501, nome: "Samuel", cognome: "Ndumu" },
            { id: 502, nome: "Matteo", cognome: "Riva" }
        ],
        partecipanti: [
            { id: 1, nome: "Claudio", cognome: "Sanna", codice_fiscale: "SNNCLD80A01L219Z", email: "c.sanna@email.it", numero: "+39 347 1122445" },
            { id: 2, nome: "Ilaria", cognome: "Fabbri", codice_fiscale: "FBBLRA88B42F205D", email: "ilaria.fabbri@gmail.com", numero: "+39 333 9988112" },
            { id: 3, nome: "Enrico", cognome: "Pellegrini", codice_fiscale: "PLLNRC75M10H501Y", email: "enrico.pel@libero.it", numero: "+39 329 5566110" },
            { id: 4, nome: "Sonia", cognome: "Moretti", codice_fiscale: "MRTSNO91S50L736P", email: "sonia.moretti@yahoo.it", numero: "+39 340 4433221" },
            { id: 5, nome: "Emanuele", cognome: "Testa", codice_fiscale: "TSTMNL80A01H501R", email: "e.testa@email.it", numero: "+39 345 6677889" },
            { id: 6, nome: "Federica", cognome: "Lombardi", codice_fiscale: "LMBFDR88B42F205B", email: "fede.lomb@gmail.com", numero: "+39 333 1122003" },
            { id: 7, nome: "Pietro", cognome: "Guerra", codice_fiscale: "GRRPTR75M10H501C", email: "p.guerra@libero.it", numero: "+39 329 4455006" },
            { id: 8, nome: "Cinzia", cognome: "Donati", codice_fiscale: "DNTCNZ93S50L736D", email: "cinzia.d@yahoo.it", numero: "+39 340 9988332" },
            { id: 9, nome: "Massimo", cognome: "Serra", codice_fiscale: "SRRMSS82T08H501Q", email: "massimo.s@email.it", numero: "+39 331 2233441" },
            { id: 10, nome: "Barbara", cognome: "Fusi", codice_fiscale: "FSUBBR85B41L219H", email: "barbara.fusi@gmail.com", numero: "+39 342 7788994" }
        ]
    },
    {
        id: 6,
        meta: "Cusco, Perù",
        data_partenza: "2025-12-12",
        data_ritorno: "2025-12-23",
        immagine: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2076&auto=format&fit=crop",
        accompagnatori: [
            { id: 601, nome: "Carlos", cognome: "Quispe" },
            { id: 602, nome: "Francesca", cognome: "Piras" }
        ],
        partecipanti: [
            { id: 1, nome: "Lorenzo", cognome: "Villa", codice_fiscale: "VLLLNZ82A01L219O", email: "lorenzo.v@email.it", numero: "+39 348 7766554" },
            { id: 2, nome: "Marta", cognome: "Longhi", codice_fiscale: "LNGMRT90B42F205E", email: "marta.longhi@gmail.com", numero: "+39 335 1122998" },
            { id: 3, nome: "Simone", cognome: "Mariani", codice_fiscale: "MRNSMN79M10H501R", email: "simone.m@libero.it", numero: "+39 328 3344556" },
            { id: 4, nome: "Valeria", cognome: "Rinaldi", codice_fiscale: "RNLVLR93S50L736T", email: "v.rinaldi@outlook.com", numero: "+39 346 8877990" },
            { id: 5, nome: "Giacomo", cognome: "Fonti", codice_fiscale: "FNTGCM80A01H501K", email: "g.fonti@email.it", numero: "+39 345 9900112" },
            { id: 6, nome: "Patrizia", cognome: "Belli", codice_fiscale: "BLLPRZ88B42F205L", email: "pat.belli@gmail.com", numero: "+39 333 4455889" },
            { id: 7, nome: "Dario", cognome: "Rossini", codice_fiscale: "RSSDRA75M10H501V", email: "d.rossini@libero.it", numero: "+39 329 1122336" },
            { id: 8, nome: "Nadia", cognome: "Sorrento", codice_fiscale: "SRRNDA93S50L736X", email: "nadia.sor@yahoo.it", numero: "+39 340 6655447" },
            { id: 9, nome: "Igor", cognome: "Damiani", codice_fiscale: "DMNIGR82T08H501Y", email: "igor.d@email.it", numero: "+39 331 9900881" },
            { id: 10, nome: "Tiziana", cognome: "Leoni", codice_fiscale: "LNETZN85B41L219M", email: "tiziana.l@gmail.com", numero: "+39 342 4455660" }
        ]
    }
];

export default database