// Date pentru tratamente
const treatmentsData = {
    // Tratamente pentru îngrijire facială
    'facial-hydrating': {
        id: 'facial-hydrating',
        title: 'Tratament Hidratant',
        price: '150 Lei',
        image: 'images/facial-care/hydrating-facial.jpg',
        description: 'Tratamentul hidratant este perfect pentru pielea uscată și deshidratată, oferind hidratare intensă și îngrijire profundă.',
        details: [
            'Curățare profundă a porilor',
            'Exfoliere blândă',
            'Hidratare intensă cu produse premium',
            'Masaj facial relaxant',
            'Durata: 60 minute'
        ]
    },
    'facial-antiaging': {
        id: 'facial-antiaging',
        title: 'Tratament Anti-Îmbătrânire',
        price: '180 Lei',
        image: 'images/facial-care/antiaging-facial.jpg',
        description: 'Tratamentul anti-îmbătrânire este special conceput pentru a combate semnele vizibile ale îmbătrânirii și pentru a stimula regenerarea celulară.',
        details: [
            'Curățare și exfoliere',
            'Seruri cu retinol și peptizi',
            'Masaj facial tonifiant',
            'Mască cu efect lifting',
            'Durata: 75 minute'
        ]
    },
    'facial-brightening': {
        id: 'facial-brightening',
        title: 'Tratament Iluminator',
        price: '170 Lei',
        image: 'images/facial-care/brightening-facial.jpg',
        description: 'Tratamentul iluminator ajută la uniformizarea tenului și reducerea petelor pigmentare, oferind un aspect radiant și proaspăt.',
        details: [
            'Curățare și exfoliere',
            'Seruri cu vitamina C',
            'Tratament cu lumină LED',
            'Mască iluminatoare',
            'Durata: 60 minute'
        ]
    },
    'facial-acne': {
        id: 'facial-acne',
        title: 'Tratament Anti-Acneic',
        price: '160 Lei',
        image: 'images/facial-care/acne-facial.jpg',
        description: 'Tratamentul anti-acneic este special conceput pentru pielea problematică, ajutând la controlul excesului de sebum și prevenirea erupțiilor.',
        details: [
            'Curățare profundă',
            'Exfoliere chimică blândă',
            'Tratament cu produse anti-acneice',
            'Mască cu efect calmant',
            'Durata: 60 minute'
        ]
    },
    'facial-sensitive': {
        id: 'facial-sensitive',
        title: 'Tratament pentru Piele Sensibilă',
        price: '155 Lei',
        image: 'images/facial-care/sensitive-facial.jpg',
        description: 'Tratamentul pentru pielea sensibilă oferă îngrijire blândă și calmantă, perfectă pentru pielea iritată sau sensibilă.',
        details: [
            'Curățare delicată',
            'Produse hipoalergenice',
            'Masaj facial relaxant',
            'Mască calmantă',
            'Durata: 60 minute'
        ]
    },
    'facial-premium': {
        id: 'facial-premium',
        title: 'Tratament Premium',
        price: '250 Lei',
        image: 'images/facial-care/premium-facial.jpg',
        description: 'Tratamentul premium este o experiență de lux care combină cele mai eficiente tehnici și produse pentru un rezultat excepțional.',
        details: [
            'Curățare și exfoliere avansată',
            'Seruri cu ingrediente premium',
            'Masaj facial complex',
            'Tratament cu lumină LED',
            'Mască personalizată',
            'Durata: 90 minute'
        ]
    },

    // Tratamente pentru acnee
    'acne-basic': {
        id: 'acne-basic',
        title: 'Tratament Basic Acnee',
        price: '150 Lei',
        image: 'images/acne/acne-basic.jpg',
        description: 'Tratamentul basic pentru acnee oferă o soluție eficientă pentru pielea problematică, concentrându-se pe controlul excesului de sebum și prevenirea erupțiilor.',
        details: [
            'Curățare profundă',
            'Exfoliere blândă',
            'Tratament cu produse anti-acneice',
            'Mască cu efect calmant',
            'Durata: 60 minute'
        ]
    },
    'acne-advanced': {
        id: 'acne-advanced',
        title: 'Tratament Avansat Acnee',
        price: '200 Lei',
        image: 'images/acne/acne-advanced.jpg',
        description: 'Tratamentul avansat pentru acnee este o soluție complexă care adresează toate aspectele pielii acneice, de la prevenire la tratarea cicatricelor.',
        details: [
            'Curățare și exfoliere avansată',
            'Tratament cu produse medicale',
            'Terapie cu lumină LED',
            'Mască personalizată',
            'Durata: 75 minute'
        ]
    },
    'acne-scars': {
        id: 'acne-scars',
        title: 'Tratament Cicatrici Acnee',
        price: '250 Lei',
        image: 'images/acne/acne-scars.jpg',
        description: 'Tratamentul pentru cicatrici de acnee se concentrează pe reducerea vizibilității cicatricelor și uniformizarea texturii pielii.',
        details: [
            'Exfoliere chimică controlată',
            'Tratament cu microdermabraziune',
            'Seruri regeneratoare',
            'Mască cu efect lifting',
            'Durata: 90 minute'
        ]
    },

    // Tratamente pentru masaj
    'massage-relaxing': {
        id: 'massage-relaxing',
        title: 'Masaj Relaxant',
        price: '200 Lei',
        image: 'images/massage/relaxing-massage.jpg',
        description: 'Masajul relaxant este perfect pentru reducerea stresului și tensionării musculare, oferind o experiență de relaxare profundă.',
        details: [
            'Tehnici de masaj suedeze',
            'Uleiuri esențiale relaxante',
            'Muzică ambientală',
            'Aromaterapie',
            'Durata: 60 minute'
        ]
    },
    'massage-therapeutic': {
        id: 'massage-therapeutic',
        title: 'Masaj Terapeutic',
        price: '250 Lei',
        image: 'images/massage/therapeutic-massage.jpg',
        description: 'Masajul terapeutic se concentrează pe zonele problematice, ajutând la reducerea durerii și îmbunătățirea mobilității.',
        details: [
            'Tehnici de masaj profunde',
            'Tratament pentru dureri specifice',
            'Stretching asistat',
            'Consiliere post-tratament',
            'Durata: 75 minute'
        ]
    },

    // Tratamente pentru remodelare corporală
    'body-cavitation': {
        id: 'body-cavitation',
        title: 'Cavitatie',
        price: '200 Lei',
        image: 'images/body-remodeling/cavitation.jpg',
        description: 'Tratamentul de cavitație utilizează ultrasunete pentru a reduce grăsimea localizată și a modela silueta.',
        details: [
            'Tratament cu ultrasunete',
            'Zona tratată: 30x30 cm',
            'Rezultate vizibile după 6-8 sedințe',
            'Fără recuperare',
            'Durata: 45 minute'
        ]
    },
    'body-rf': {
        id: 'body-rf',
        title: 'Radiofrecvență',
        price: '250 Lei',
        image: 'images/body-remodeling/rf.jpg',
        description: 'Tratamentul cu radiofrecvență stimulează producția de colagen și elastină, ajutând la îmbunătățirea fermității pielii.',
        details: [
            'Tratament cu radiofrecvență',
            'Zona tratată: 30x30 cm',
            'Rezultate vizibile după 4-6 sedințe',
            'Fără recuperare',
            'Durata: 45 minute'
        ]
    },

    // Tratamente pentru dermapen
    'dermapen-basic': {
        id: 'dermapen-basic',
        title: 'Dermapen Basic',
        price: '300 Lei',
        image: 'images/dermapen/dermapen-basic.jpg',
        description: 'Tratamentul Dermapen Basic utilizează microacupunctură pentru a stimula regenerarea pielii și îmbunătățirea aspectului general.',
        details: [
            'Microacupunctură cu Dermapen',
            'Seruri cu hialuronic',
            'Tratament pentru întreaga față',
            'Rezultate vizibile după 3-4 sedințe',
            'Durata: 60 minute'
        ]
    },
    'dermapen-premium': {
        id: 'dermapen-premium',
        title: 'Dermapen Premium',
        price: '400 Lei',
        image: 'images/dermapen/dermapen-premium.jpg',
        description: 'Tratamentul Dermapen Premium oferă o soluție avansată pentru îmbunătățirea aspectului pielii, combinând microacupunctură cu produse premium.',
        details: [
            'Microacupunctură avansată',
            'Seruri cu peptizi și vitamine',
            'Tratament pentru față și gât',
            'Rezultate vizibile după 2-3 sedințe',
            'Durata: 75 minute'
        ]
    }
};

// Exportăm datele
window.treatmentsData = treatmentsData; 