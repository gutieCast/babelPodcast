import imgMW from '../../assets/images/Podcast/muy-waso-podcast.jpg';
import imgMMMB from '../../assets/images/Podcast/mariquitas-movimiento-maricas-bolivia.jpg';
import imgIP from '../../assets/images/Podcast/imilla-podcast.jpg';
import imgCSC from '../../assets/images/Podcast/como-se-come-podcast.jpeg';
import imgSAT from '../../assets/images/Podcast/si-a-todo-podcast.jpg';
import imgPP from '../../assets/images/Podcast/peladas-podcast.jpg';


const sources = [
    {
        name: 'muy waso podcast',
        by: 'Revista Muy Waso',
        img: imgMW,
        description: '¡Wases! Ahora también pueden disfrutar de nuestros contenidos en audio. Una producción de la Revista Muy Waso.',
        links: [
            <a href="https://www.facebook.com/MuyWaso" target="_blank" uk-icon="icon: facebook; ratio: 2"></a>,
            <a href="https://www.instagram.com/muywaso" target="_blank" uk-icon="icon: instagram; ratio: 2"></a>,
            <a href="https://twitter.com/muywaso" target="_blank" uk-icon="icon: twitter; ratio: 2"></a>,
            <a href="https://www.youtube.com/channel/UC3eLFTNUxzZOlQREOS1gLRQ" target="_blank" uk-icon="icon: youtube; ratio: 2"></a>
        ],
        seasons: [
            {
                number: 2,
                episodes: [
                    {
                        number: "Transmisión 1",
                        name: 'El lago sagrado y la "Sirena" de Carlos Piñeiro',
                        src: "https://embed.radiopublic.com/e?if=muy-waso-podcast-WxLo3g&ge=s1!99eb0c2652a436529ea7fcae21f3aa2b3ad16a4d"
                    },
                    {
                        number: "Transmisión 2",
                        name: 'Feminismo y rebeldía en Tarija: conocé a las Mochas Copleras',
                        src: "https://embed.radiopublic.com/e?if=muy-waso-podcast-WxLo3g&ge=s1!f1d20#?secret=bGQl6cZGqK"
                    },
                    {
                        number: "Transmisión 3",
                        name: 'Inteligencia colectiva frente a la incompetencia del Estado',
                        src: "https://embed.radiopublic.com/e?if=muy-waso-podcast-WxLo3g&ge=s1!b4a35#?secret=3IYzErdbc7"
                    }
                ]
            }
        ]
    },
    {
        name: 'MARIQUITAS: Narraciones radiofónicas de infancias LGBTI+',
        by: 'Movimiento Maricas Bolivia',
        img: imgMMMB,
        description: 'Mariquitas: narraciones radiofónicas de infancias LGBTI+, es un proyecto que pone en formato radiofónico relatos de 20 activistas bolivianxs LGBTI+ sobre sus infancias. Recogimos sus testimonios para retratarlos sonoramente; retratos que ponen en discusión la dificultad de las infancias que no se acomodan a la norma hegemónica heterosexual. Retratos para recordar nuestra niñez marica, marimacha, trava… dibujadas muchas veces por violencias, pero coloreadas con desobediencia, rebeldía, resiliencia y resistencia.',
        links: [
            <a href="https://www.facebook.com/maricas.bolivia" target="_blank" uk-icon="icon: facebook; ratio: 2"></a>,
            <a href="https://www.youtube.com/c/MovimientoMaricasBolivia" target="_blank" uk-icon="icon: youtube; ratio: 2"></a>
        ],
        seasons: [
            {
                number: '',
                episodes: [
                    {
                        number: 1,
                        name: '"Natacha"',
                        src: "https://anchor.fm/maricas-bolivia/embed/episodes/1--NATACHAMARIQUITAS-Narraciones-de-infancias-LGBT-ei109b/a-a2u24ck"
                    },
                    {
                        number: 2,
                        name: 'Los hombres no lloran',
                        src: "https://anchor.fm/maricas-bolivia/embed/episodes/2--LOS-HOMBRES-NO-LLORANMARIQUITAS-Narraciones-radiofonicas-de-infancias-LGBTI-ei489d/a-a2ukrjt"
                    },
                    {
                        number: 3,
                        name: 'Es que tú eres medio niña',
                        src: "https://anchor.fm/maricas-bolivia/embed/episodes/3--ES-QUE-TU-ERES-MEDIO-NIAMARIQUITAS-Narraciones-radiofnicas-de-infancias-LGBTI-eio5dp/a-a327tk2"
                    },
                    {
                        number: 4,
                        name: 'Yo era un niño hasta los nueve años',
                        src: "https://anchor.fm/maricas-bolivia/embed/episodes/4--YO-ERA-UN-NIO-HASTA-LOS-NUEVE-AOSMARIQUITAS-Narraciones-radiofnicas-de-infancias-LGBTI-ein7jt/a-a3228tb"
                    },
                    {
                        number: 5,
                        name: 'La novia de mi muñeca',
                        src: "https://anchor.fm/maricas-bolivia/embed/episodes/5--LA-NOVIA-DE-MI-MUECAMARIQUITAS-Narraciones-radiofnicas-de-infancias-LGBTI-eiqc5f/a-a32kscf"
                    },
                    {
                        number: 6,
                        name: 'Liceo de señoritas',
                        src: "https://anchor.fm/maricas-bolivia/embed/episodes/6--LICEO-DE-SEORITASMARIQUITAS-Narraciones-radiofnicas-de-infancias-LGBTI-ej1u4g/a-a341a73"
                    },
                    {
                        number: 7,
                        name: 'La usurpadora',
                        src: "https://anchor.fm/maricas-bolivia/embed/episodes/7--LA-USURPADORAMARIQUITAS-Narraciones-de-infancias-LGBTI-ej57e1/a-a34j8jl"
                    },
                    {
                        number: 8,
                        name: 'Hacerse pequeñito mientras va creciendo el miedo',
                        src: "https://anchor.fm/maricas-bolivia/embed/episodes/8--HACERSE-PEQUEITO-MIENTRAS-VA-CRECIENDO-EL-MIEDO-ejcvp6/a-a35veqj"
                    },
                    {
                        number: 9,
                        name: 'Complejo de Electra lésbico',
                        src: "https://anchor.fm/maricas-bolivia/embed/episodes/9--COMPLEJO-DE-ELECTRA-LSBICO-ejga55/a-a36i8fp"
                    },
                    {
                        number: 10,
                        name: 'Los tacones de mamá',
                        src: "https://anchor.fm/maricas-bolivia/embed/episodes/10--LOS-TACONES-DE-MAMMARIQUITAS-ejmgo6/a-a37kok9"
                    },
                    {
                        number: 11,
                        name: '¿Cuánto cuesta la felicidad?',
                        src: "https://anchor.fm/maricas-bolivia/embed/episodes/11--CUNTO-CUESTA-LA-FELICIDAD-MARIQUITAS-ejmh9m/a-a37krv7"
                    },
                    {
                        number: 12,
                        name: 'No es hijita, es hijito.',
                        src: "https://anchor.fm/maricas-bolivia/embed/episodes/12--NO-ES-HIJITA--ES-HIJITO-MARIQUITAS-ek30vk/a-a3aubnv"
                    },
                    {
                        number: 13,
                        name: '¿Qué revela la palabra gay?',
                        src: "https://anchor.fm/maricas-bolivia/embed/episodes/13--QU-REVELA-LA-PALABRA-GAY--MARIQUITAS-ek3130/a-a3aucfn"
                    },
                    {
                        number: 14,
                        name: 'De niñas frente al amor',
                        src: "https://anchor.fm/maricas-bolivia/embed/episodes/14--DE-NIAS-FRENTE-AL-AMORMARIQUITAS-ekh5b1/a-a3e433o"
                    },
                    {
                        number: 15,
                        name: 'Sobrevivientes',
                        src: "https://anchor.fm/maricas-bolivia/embed/episodes/15--SOBREVIVIENTESMARIQUITAS-ekq267/a-a3g1hun"
                    },
                    {
                        number: 16,
                        name: 'Cuado sea grande voy a hacer una señora',
                        src: "https://anchor.fm/maricas-bolivia/embed/episodes/16--CUANDO-SEA-GRANDE-VOY-A-SER-UNA-SEORA-ellr7a/a-a3m0q16"
                    },
                    {
                        number: 17,
                        name: 'Muñeca quebrada',
                        src: "https://anchor.fm/maricas-bolivia/embed/episodes/17--MUECA-QUEBRADA-ellrb5/a-a3m0qs1"
                    },
                    {
                        number: 18,
                        name: 'Cuando sea grande y él pueda besarme',
                        src: "https://anchor.fm/maricas-bolivia/embed/episodes/18--CUANDO-SEA-GRANDE-Y-L-PUEDA-BESARME-ellrd5/a-a3m0rab"
                    },
                    {
                        number: 19,
                        name: 'Bata, satén, pantimedias y guantes de terciopelo negro',
                        src: "https://anchor.fm/maricas-bolivia/embed/episodes/19--BATA--SATN--PANTIMEDIAS-Y-GUANTES-DE-TERCIOPELO-NEGRO-ellrgi/a-a3m0rue"
                    },
                    {
                        number: 20,
                        name: 'Buscando la imagen de la niña que fuí',
                        src: "https://anchor.fm/maricas-bolivia/embed/episodes/20--BUSCANDO-LA-IMAGEN-DE-LA-NIA-QUE-FU-ellrjv/a-a3m0slk"
                    },
                ]
            }
        ]
    },
    {
        name: 'imilla podcast',
        by: 'Jhosie',
        img: imgIP,
        description: 'Una IMILlA que cuestiona hábitos sociales y los compara con el diario vivir.',
        links: [],
        seasons: [
            {
                number: 1,
                episodes: [
                    {
                        number: "1",
                        name: '¿Por qué los varones no menstrúan?',
                        src: "https://anchor.fm/jhosie/embed/episodes/01--Por-qu-los-varones-no-menstran-e1139ou/a-a5jme57"
                    },
                    {
                        number: "2",
                        name: '¿Por qué somos violentos?',
                        src: "https://anchor.fm/jhosie/embed/episodes/02--Por-qu-somos-violentos-e128f8k/a-a5ptscn"
                    }
                ]
            }
        ]
    },
    {
        name: '¿Cómo se come?',
        by: 'Andrea Puente M.',
        img: imgCSC,
        description: ['De habitos, alimentos y apetitos.', <br />, 'El podcast para conocer más sobre la cultura y ciencia detrás de la comida.'],
        links: [],
        seasons: [
            {
                number: '',
                episodes: [
                    {
                        number: "1",
                        name: 'Gabriela Salaz y el dulce de leche que le cambió la vida',
                        src: "https://anchor.fm/como-se-come/embed/episodes/Gabriela-Salaz-y-el-dulce-de-leche-que-le-cambi-la-vida-eeqsvu/a-a2bmsi2"
                    },
                    {
                        number: "2",
                        name: 'Marcela Araúz y el placer de escribir sobre comida.',
                        src: "https://anchor.fm/como-se-come/embed/episodes/Marcela-Araz-y-el-placer-de-escribir-sobre-comida-eeqt0c/a-a2bmsi3"
                    },
                    {
                        number: "3",
                        name: 'Govinda Rivera y la tienda de sus sueños',
                        src: "https://anchor.fm/como-se-come/embed/episodes/Govinda-Rivera-y-la-tienda-de-sus-sueos-eeqt05/a-a2bmsia"
                    },
                    {
                        number: "4",
                        name: 'Valentina Arteaga y las recetas de Instagram',
                        src: "https://anchor.fm/como-se-come/embed/episodes/Valentina-Arteaga-y-las-recetas-de-Instagram-eeqt04/a-a2bmsi9"
                    },
                    {
                        number: "5",
                        name: 'Juan Pablo Reyes y la emoción de la comida boliviana',
                        src: "https://anchor.fm/como-se-come/embed/episodes/Juan-Pablo-Reyes-y-la-emocin-de-la-comida-boliviana-eeqt03/a-a2bmsi5"
                    },
                    {
                        number: "6",
                        name: 'Lupito y el amor a los animales',
                        src: "https://anchor.fm/como-se-come/embed/episodes/Lupito-y-el-amor-a-los-animales-eeqsvs/a-a2bmsi4"
                    },
                    {
                        number: "7",
                        name: 'Marco Quelca y el camino a Sabor Clandestino',
                        src: "https://anchor.fm/como-se-come/embed/episodes/Marco-Quelca-y-el-camino-a-Sabor-Clandestino-eeqt0b/a-a2bmshf"
                    },
                    {
                        number: "8",
                        name: 'Marco Quelca y el camino a Sabor ClandestinFabio Arandia y el origen de Typica',
                        src: "https://anchor.fm/como-se-come/embed/episodes/Fabio-Arandia-y-el-origen-de-Typica-eeqt0g/a-a2bmsi8"
                    },
                    {
                        number: "9",
                        name: '¿Quién conduce este podcast?',
                        src: "https://anchor.fm/como-se-come/embed/episodes/Quin-conduce-este-podcast-eeqsvv/a-a2bmshe"
                    },
                    {
                        number: "10",
                        name: 'Trailer: lo que se viene en 2021 en el podcast ',
                        src: "https://anchor.fm/como-se-come/embed/episodes/Trailer-lo-que-se-viene-en-2021-en-el-podcast-eo3di5/a-a46etrl"
                    },
                ]
            }
        ]
    },
    {
        name: 'Sí a todo',
        by: 'César Mérida',
        img: imgSAT,
        description: ['Show con invitados increíbles, para hablar de esas personas que están detrás del personaje.'],
        links: [],
        seasons: [
            {
                number: '',
                episodes: [
                    {
                        number: "Ep. 1",
                        name: 'Rene Hurtado - @SoyYoRene',
                        src: "https://anchor.fm/csar-mrida/embed/episodes/Ep1-Rene-Hurtado---SoyYoRene-es48bd/a-a4sk28f"
                    },
                    {
                        number: "2",
                        name: 'Marcela Araúz y el placer de escribir sobre comida.',
                        src: "https://anchor.fm/como-se-come/embed/episodes/Marcela-Araz-y-el-placer-de-escribir-sobre-comida-eeqt0c/a-a2bmsi3"
                    },
                    {
                        number: "3",
                        name: 'Govinda Rivera y la tienda de sus sueños',
                        src: "https://anchor.fm/como-se-come/embed/episodes/Govinda-Rivera-y-la-tienda-de-sus-sueos-eeqt05/a-a2bmsia"
                    },
                    {
                        number: "4",
                        name: 'Valentina Arteaga y las recetas de Instagram',
                        src: "https://anchor.fm/como-se-come/embed/episodes/Valentina-Arteaga-y-las-recetas-de-Instagram-eeqt04/a-a2bmsi9"
                    },
                    {
                        number: "5",
                        name: 'Juan Pablo Reyes y la emoción de la comida boliviana',
                        src: "https://anchor.fm/como-se-come/embed/episodes/Juan-Pablo-Reyes-y-la-emocin-de-la-comida-boliviana-eeqt03/a-a2bmsi5"
                    },
                    {
                        number: "6",
                        name: 'Lupito y el amor a los animales',
                        src: "https://anchor.fm/como-se-come/embed/episodes/Lupito-y-el-amor-a-los-animales-eeqsvs/a-a2bmsi4"
                    },
                    {
                        number: "7",
                        name: 'Marco Quelca y el camino a Sabor Clandestino',
                        src: "https://anchor.fm/como-se-come/embed/episodes/Marco-Quelca-y-el-camino-a-Sabor-Clandestino-eeqt0b/a-a2bmshf"
                    },
                    {
                        number: "8",
                        name: 'Marco Quelca y el camino a Sabor ClandestinFabio Arandia y el origen de Typica',
                        src: "https://anchor.fm/como-se-come/embed/episodes/Fabio-Arandia-y-el-origen-de-Typica-eeqt0g/a-a2bmsi8"
                    },
                    {
                        number: "9",
                        name: '¿Quién conduce este podcast?',
                        src: "https://anchor.fm/como-se-come/embed/episodes/Quin-conduce-este-podcast-eeqsvv/a-a2bmshe"
                    },
                    {
                        number: "10",
                        name: 'Trailer: lo que se viene en 2021 en el podcast ',
                        src: "https://anchor.fm/como-se-come/embed/episodes/Trailer-lo-que-se-viene-en-2021-en-el-podcast-eo3di5/a-a46etrl"
                    },
                ]
            }
        ]
    },
    {
        name: 'Peladas Podcast',
        by: 'Peladas Podcast',
        img: imgPP,
        description: ['Somos Giuli y Andre, nuestras conversaciones son tan random que se nos ocurrió comenzar a grabarlas.', <br />, <br />, '¡Bienvenidas a Peladas Podcast!'],
        links: [],
        seasons: [
            {
                number: '',
                episodes: [
                    {
                        number: "Episodio 1",
                        name: 'Enchufar el botón de encendido',
                        src: "https://anchor.fm/peladaspodcast/embed/episodes/Enchufar-el-botn-de-encendido-e8mtvq/a-a1006or"
                    },
                    {
                        number: "Episodio 2",
                        name: 'Octubre de terror',
                        src: "https://anchor.fm/peladaspodcast/embed/episodes/Octubre-de-terror-e8n069/a-a100mq9"
                    },
                    {
                        number: "Episodio 3",
                        name: 'Bots bolivianos',
                        src: "https://anchor.fm/peladaspodcast/embed/episodes/Bots-bolivianos-e95ehp/a-a12mbes"
                    },
                    {
                        number: "Episodio 4",
                        name: '#25N',
                        src: "https://anchor.fm/peladaspodcast/embed/episodes/25N-e9duu1/a-a14ehti"
                    },
                    {
                        number: "Episodio 5",
                        name: 'Chau, 2019',
                        src: "https://anchor.fm/peladaspodcast/embed/episodes/Chau--2019-e9m7sf/a-a170fpk"
                    },
                    {
                        number: "Episodio 6",
                        name: 'Pelis y premios',
                        src: "https://anchor.fm/peladaspodcast/embed/episodes/Pelis-y-premios-eai9td/a-a1ctae5"
                    },
                    {
                        number: "Episodio 7",
                        name: '#SinFiltro ft. Carmen Fonseca',
                        src: "https://anchor.fm/peladaspodcast/embed/episodes/SinFiltro-ft--Carmen-Fonseca-earq1i/a-a1g984l"
                    },
                    {
                        number: "Episodio 8",
                        name: 'Carnaval Pandémico y TikTok',
                        src: "https://anchor.fm/peladaspodcast/embed/episodes/Carnaval-Pandmico-y-TikTok-ej6b71/a-a34pl7p"
                    },
                    {
                        number: "Episodio 9",
                        name: 'Flashback Universitario (1)',
                        src: "https://anchor.fm/peladaspodcast/embed/episodes/Flashback-Universitario-1-emb3pk/a-a3qckkq"
                    }
                ]
            }
        ]
    },
]


export const podcastsList = sources