export const state = () => ({

  sections: [
    // Maternita

    {

      title: "Il momento migliore",
      paragraph: "Il servizio maternità fine art viene realizzato preferibilmente tra la 29° e la 36° settimana. In questo periodo la pancia è ben visibile e non si rischia di avvertire troppa stanchezza.",
      note: " Ti consiglio di prenotare il servizio almeno due mesi in anticipo.",
      image: `${require(`~/assets/images/servizi_fotografici/Fine_Art/01_maternità_fineart_momento_migliore_laura_cesaretti_roma.jpg`)}`,
      aligment: "right",
      isActive: true,
      category: "Maternità"
    },
    {

      title: "Tu prima di tutto",
      paragraph: "Progetteremo insieme il tuo servizio in ogni suo aspetto durante la consulenza pre-sessione. Ogni set verrà realizzato su misura utilizzando abiti, tessuti, accessori e luci che più rappresentano il tuo stile e la tua identità.",
      note: "Nessuna delle mie mamme è una modella, quindi non preoccuparti se non ti senti spigliata davanti alla macchina fotografica! Verrai guidata passo passo durante tutto il servizio affinchè tu possa sentirti sempre a tuo agio.",
      image: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/05_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
      aligment: "left",
      isActive: true,
      category: "Maternità"
    },
    {

      title: "Makeup e guardaroba",
      paragraph: "Avrai accesso ad una vasta selezione di abiti, tessuti, chiffon e accessori inclusa nel prezzo. Durante la consulenza definiremo i vari look e sarà possibile anche valutare outfit personali per rendere il tuo servizio ancora più unico.",
      note: "Il servizio hair style e make-up è incluso nel costo della sessione. Un'esperta del settore si prenderà cura di te, non dovrai pensare a nulla se non a rilassarti e a farti coccolare da mani esperte! La mia make-up artist saprà ascoltarti e realizzare il look che più ti rispecchia e ti assisterà durante tutto il servizio. ",
      image: `${require(`~/assets/images/servizi_fotografici/Lifestyle/02_maternità_lifestyle_sessione_laura_cesaretti_roma.jpg.jpg`)}`,
      aligment: "right",
      isActive: true,
      category: "Maternità"
    },
    {

      title: "Dopo la sessione",
      paragraph: " Una volta conclusa la sessione selezionerò gli scatti migliori che saranno accuratamente post-prodotti con tecniche professionali, garantendo sempre un effetto naturale. ",
      note: " Questo processo richiederà circa 3-4 settimane, dopo di che fisseremo un incontro per visionare e scegliere i ritratti che racchiuderanno i vostri ricordi più belli. ",
      image: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/05_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
      aligment: "left",
      isActive: true,
      category: "Maternità"
    },


    // Famiglia

    {

      title: "Nulla di piu importante",
      paragraph: " Il servizio Maternità Lifestyle viene realizzato preferibilmente tra la 29° e la 36° settimana. In questo periodo la pancia è ben visibile e non si rischia di avvertire troppa stanchezza. ",
      note: "Ti consiglio di prenotare il servizio almeno due mesi in anticipo. ",
      image: `${require(`~/assets/images/servizi_fotografici/Lifestyle/02_maternità_lifestyle_sessione_laura_cesaretti_roma.jpg.jpg`)}`,
      aligment: "right",
      isActive: true,
      category: "Famiglia"
    },
    {

      title: "La sessione",
      paragraph: " La sessione si può svolgere nella naturale ambientazione del mio studio o in esterna nei mesi estivi.",
      image: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/05_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
      aligment: "left",
      isActive: true,
      category: "Famiglia",
      locations: [
        {
          where: "In Studio:",
          how: "dove sarà possibile ricreare un'ambientazione più intima. La sessione prevede 3 cambi abito forniti dallo studio."
        },
        {
          where: "In Esterna:",
          how: "in un bel parco o location a vostra scelta come il mare, godendoci una passeggiata al tramonto e realizzando immagini molto spontanee. La sessione prevede 1 cambio abito fornito dalla mamma. "
        },
        {
          where: "Combo Studio-Esterna:",
          how: "per avere un servizio completo che racconti al meglio la vostra storia Durante il servizio sono sempre incluse le foto con il futuro papà ed eventuali fratellini "
        },
      ]
    },
    {

      title: "Dopo la sessione",
      paragraph: " Una volta conclusa la sessione selezionerò gli scatti migliori che saranno accuratamente post-prodotti con tecniche professionali, garantendo sempre un effetto naturale. ",
      note: " Questo processo richiederà circa 3-4 settimane, dopo di che fisseremo un incontro per visionare e scegliere i ritratti che racchiuderanno i vostri ricordi più belli. ",
      image: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/05_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
      aligment: "right",
      isActive: true,
      category: "Famiglia"
    },


    // Neonato

    {

      title: "Il momento migliore",
      paragraph: "Il servizio Neonato si svolge nei primi 6-15 giorni di vita. In questo periodo i bambini dormono di più e hanno una muscolatura molto più elastica, questo mi permetterà di posizionarli in tutta sicurezza. ",
      note: " Il momento migliore per prenotare è quando si viene a conoscenza della data presunta del parto. ",
      image: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/05_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
      aligment: "right",
      isActive: true,
      category: "Neonato"
    },
    {

      title: "Su misura per te",
      paragraph: "Il servizio ha una durata di circa 3/4 ore per permettere al neonato di addormentarsi e fare le giuste pause fisiologiche. Nel prezzo sono sempre incluse le foto con i genitori ed eventuali fratellini. ",
      secondParagraph: " Durante la consulenza pre sessione sceglieremo quali set realizzare per il vostro bambino. Lo studio mette a vostra disposizione una vasta gamma di tessuti, lane, fascette, cappellini e accessori. ",
      image: `${require(`~/assets/images/servizi_fotografici/Lifestyle/02_maternità_lifestyle_sessione_laura_cesaretti_roma.jpg.jpg`)}`,
      note: " La sessione viene realizzata nel confort del mio studio, dove potrete usufruire di fasciatoio, scalda biberon, Wifi e snack. ",
      aligment: "left",
      isActive: true,
      category: "Neonato"
    },
    {

      title: "La Sicurezza prima di ogni cosa",
      paragraph: "La sicurezza dei vostri bambini è molto più importante di qualsiasi posa o allestimento. Sarò molto attenta ai loro bisogni, ogni neonato è diverso e non a tutti piacciono determinate posizioni. La sessione verrà interamente personalizzata sulle esigente dei vostri piccoli, in modo che siano sempre comodi e rilassati.",
      note: " Questo processo richiederà circa 3-4 settimane, dopo di che fisseremo un incontro per visionare e scegliere i ritratti che racchiuderanno i vostri ricordi più belli. ",
      image: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/05_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
      aligment: "right",
      isActive: true,
      category: "Neonato"
    },
    {

      title: "Dopo la sessione",
      paragraph: "Una volta conclusa la sessione selezionerò gli scatti migliori che saranno accuratamente post-prodotti con tecniche professionali, garantendo sempre un effetto naturale. ",
      note: " Questo processo richiederà circa 3-4 settimane, dopo di che fisseremo un incontro per visionare e scegliere i ritratti che racchiuderanno i vostri ricordi più belli. ",
      image: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/05_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
      aligment: "left",
      isActive: true,
      category: "Neonato"
    },


    // Bebè

    {

      title: "Il momento migliore",
      paragraph: " Il momento migliore per effettuare la sessione è quando il bambino riesce a stare seduto da solo in modo da poter realizzare immagini più varie tra loro. ",
      note: "  Il servizio Bebè può essere svolto dai 6 ai 10 mesi di vita. ",
      image: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/05_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
      aligment: "right",
      isActive: true,
      category: "Bebè"
    },
    {

      title: "Su misura per te",
      paragraph: " Durante la consulenza pre sessione sceglieremo 3 set da realizzare tra quelli proposti. Tutto il necessario per il vostro bambino come abiti e accessori sono forniti dallo studio. ",
      secondParagraph: "Inoltre potrete scegliere di dedicare uno dei set alle foto di famiglia per conservare dei bellissimi ritratti insieme. ",
      image: `${require(`~/assets/images/servizi_fotografici/Lifestyle/02_maternità_lifestyle_sessione_laura_cesaretti_roma.jpg.jpg`)}`,
      note: " La durata di un servizio fotografico Bebè è di circa 2 ore. ",
      aligment: "left",
      isActive: true,
      category: "Bebè"
    },
    {

      title: "Dopo la sessione",
      paragraph: " Una volta conclusa la sessione selezionerò gli scatti migliori che saranno accuratamente post-prodotti con tecniche professionali, garantendo sempre un effetto naturale. ",
      note: " Questo processo richiederà circa 3-4 settimane, dopo di che fisseremo un incontro per visionare e scegliere i ritratti che racchiuderanno i vostri ricordi più belli. ",
      image: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/05_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
      aligment: "right",
      isActive: true,
      category: "Bebè"
    },


    // Cake Smash

    {

      title: "Il momento migliore",
      paragraph: " l servizio Cake Smash può essere svolto prima del compleanno, per poter sfruttare le immagini durante la festa e per creare gli inviti o subito dopo.  ",
      note: "   Il momento migliore è quando il bambino ancora non riesce a camminare per evitare che esca spesso dal set.  ",
      image: `${require(`~/assets/images/Galleria/Cake_Smash/14_laura_cesaretti_servizio_fotografico_smashcake_roma.jpg`)}`,
      aligment: "right",
      isActive: true,
      category: "CakeSmash"
    },
    {

      title: "Tema personalizzato",
      paragraph: "  Durante la consulenza pre sessione sceglieremo un tema inedito da realizzare, personalizzato secondo i vostri gusti e desideri. In abbinamento all'allestimento verrà fornita anche la torta. ",
      secondParagraph: " Nel caso in cui amiate in particolare uno dei set già realizzati, sarà possibile riproporlo e riadattarlo secondo le vostre esigenze. ",

      image: `${require(`~/assets/images/Galleria/Cake_Smash/06_laura_cesaretti_servizio_fotografico_smashcake_roma.jpg`)}`,
      note: "  La preparazione di nuovi set richiede all'incirca 1-2 mesi per l'ideazione e realizzazione. ",
      aligment: "left",
      isActive: true,
      category: "CakeSmash"
    },
    {

      title: "La sessione",
      paragraph: " La sessione ha una durata di circa 2 ore. Sarà possibile realizzare fino a due cambi abito mantenendo lo stesso allestimento. Il primo cambio prevede foto semplici con accessori e ceste, mentre con il secondo verrà introdotta la torta con la quale il bimbo si divertirà a giocare e sporcarsi. ",

      image: `${require(`~/assets/images/servizi_fotografici/Cake_Smash/01_cake_smash_momento_migliore_laura_cesaretti_roma.jpg`)}`,
      aligment: "right",
      isActive: true,
      category: "CakeSmash"
    },
    {

      title: "Dopo la sessione",
      paragraph: " Una volta conclusa la sessione selezionerò gli scatti migliori che saranno accuratamente post-prodotti con tecniche professionali, garantendo sempre un effetto naturale.  ",
      note: " Questo processo richiederà circa 3-4 settimane, dopo di che fisseremo un incontro per visionare e scegliere i ritratti che racchiuderanno i vostri ricordi più belli. ",
      image: `${require(`~/assets/images/Galleria/Cake_Smash/21_laura_cesaretti_servizio_fotografico_smashcake_roma.jpg`)}`,
      aligment: "left",
      isActive: true,
      category: "CakeSmash"
    },


    // Bio

    {

      title: "Mi presento",
      paragraph: "Ciao sono Laura e da sempre amo fotografare i momenti che toccano le corde più profonde della vita di ogni donna, dalla trasformazione che avviene in un momento così delicato come la gravidanza, al catturare la bellezza dell'amore più puro ed autentico con la nascita del vostro bambino e di una nuova famiglia.",
      secondParagraph: "I miei servizi fotografici sono un vero e proprio incontro di anime e condivisione di esperienze emozionanti. Ogni sessione è unica ed indimenticabile e sarà cucita su misura, affinché possa restare impressa per sempre nei vostri cuori. Il mio stile fonde la poesia della luce pittorica con la forza e creatività della moda, per creare immagini di grande impatto sul piano emotivo ed estetico, con eleganza e raffinatezza. Mi piace sperimentare insieme nuove idee e adoro lavorare con donne che, nonostante si affidino completamente alla mia visione, vogliano contribuire attivamente al processo creativo del proprio servizio fotografico.",
      note: "Affido costantemente la mia formazione ai migliori fotografi italiani ed internazionali per potervi garantire sempre il massimo della qualità ed originalità.",
      image: `${require(`~/assets/images/Luara_Cesaretti_Fine_Art_Portrait_Photography.jpg`)}`,
      aligment: "right",
      isActive: true,
      category: "Bio"
    },
    {

      title: "La formazione",
      locations: [
        {
          how: "Masterclass Maternity con Lola Melani New York"
        },
        {
          how: "Masterclass The Art of Draping con Lola Melani New York"
        },
        {
          how: "Masterclass  Motherhood Photography con Lola Melani New York"
        },
        {
          how: "Masterclass Beauty and Boudoir con Lola Melani New York"
        },
        {
          how: "Masterclass Fine Art Nude con Lola Melani New York"
        },
        {
          how: "Mentoring privato sul Ritratto Maternity & Motherhood con Donatella Nicolini Milano"
        },
        {
          how: "Mentoring privato sul posing, wrapping e gestione del neoanto con Enny Napolitano Milano"
        },
        {
          how: "Maternity Retreat"
        },
        {
          how: "Corso Newborn Wrapping & Posing con Kelly Brown"
        },
        {
          how: "Corso Newborn Wrapping & Posing con Erin Elizabeth"
        },
        {
          how: "Corso Newborn Retreat"
        },
        {
          how: "Corso Newborn Creative Photography con Julia Keller"
        },
        {
          how: "Baby&Kids conference Milano"
        },
        {
          how: "Masterclass Ritratto creativo in esterna con Elena Mikkaylova"
        },
        {
          how: "Masterclass Postproduzione Ritratto creativo con Elena Mikkaylova"
        },
        {
          how: "Iscritta Lola Malani Academy"
        },
        {
          how: "Masterclass ritratto The Magic of Gels con Lindsay Adler"
        },
        {
          how: "Formazione Sue Bryce Portrait Sistem"
        },
        {
          how: "Formazione Istituto Cine -Tv Roberto Rossellini"
        }
      ],
      image: `${require(`~/assets/images/Luara_Cesaretti_Fine_Art_Portrait_Photography.jpg`)}`,
      aligment: "left",
      isActive: true,
      category: "Bio"
    },




  ],






});