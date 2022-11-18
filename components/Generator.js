app.component('generator', {
  props: {

  },
  template:
      /*html*/
      `
<div class="row flex-top justify-content-center">

<header class="border shadow">
  <h1>Generator tekstu przebranżowienia się na programistę.</h1>
  <h2>Wersja: 2.0.2.2.1.1</h2>
</header>

</div>
<div class="row justify-content-center">
<button id="button" class="btn-large" @click="generator">Generuj nowy tekst!</button>
</div>
<div class="row justify-content-center">
  <main class="card border shadow">
  <p class="card-body">
    <span id="hello" @click="generatorHello">{{ hello }}<br/></span>
    <span id="entry" @click="generatorEntry">&emsp;{{entry}}&nbsp;</span>
    <span id="entry2" @click="generatorEntry2">{{entry2}}&nbsp;</span>
    <span id="entry3" @click="generatorEntry3">{{entry3}}&nbsp;</span>
    <span id="startDesire" @click="generatorStartDesire">{{startDesire}}&nbsp;</span>
    <span id="extendDesire" @click="generatorExtendDesire">{{extendDesire}}&nbsp;</span>
    <span id="currentOccupation" @click="generatorCurrentOccupation">{{currentOccupation}}&nbsp;</span>
    <span id="targetOccupation" @click="generatorTargetOccupation">{{targetOccupation}}&nbsp;</span>
    <span id="startSomething" @click="generatorStartSomething">{{startSomething}}&nbsp;</span>
    <span id="extendSomething" @click="generatorExtendSomething">{{extendSomething}}&nbsp;</span>
    <span id="endSomething" @click="generatorEndSomething">{{endSomething}}&nbsp;</span>
    <span id="languageSelectionStart" @click="generatorLanguageSelectionStart">{{languageSelectionStart}}&nbsp;</span>
    <span id="language" @click="generatorLanguage">{{language}}&nbsp;</span>
    <span id="languageSelectionEnd" @click="generatorLanguageSelectionEnd">{{languageSelectionEnd}}&nbsp;</span>
  </p>
  </main>

</div>


`,

  data() {
      return {
          helloText: '',
          entryText: '',
          entry2Text: '',
          entry3Text: '',
          startDesireText: '',
          extendDesireText: '',
          currentOccupationText: '',
          targetOccupationText: '',
          startSomethingText: '',
          extendSomethingText: '',
          endSomethingText: '',
          languageSelectionStartText: '',
          languageText: '',
          languageSelectionEndText: '',
          helloData: [
            'Co słychać!',
            'Cześć,',
            'Cześć!',
            'Czołem!',
            'Dobry wieczór.',
            'Dzień dobry.',
            'Hej.',
            'Hej:)',
            'Hejka, są tu jacyś komputerowcy?',
            'Hejka.',
            'Joł!',
            'Kopę lat!',
            'Krótko.',
            'Niech będzie pochwalony Jezus Chrystus!',
            'Państwo wybaczą.',
            'Pochwalony.',
            'Sie ma!',
            'Siemka',
            'Szczęść Boże!',
            'Witam forumowiczów.',
            'Witam serdecznie.',
            'Witam wszystkich.',
            'Witam wszystkich użytkowników forum :D',
            'Witam.',
          ],
          entryData: [
              'Mam prośbę o ocenę.',
              'Mam prośbę o ocenę mojego CV.',
              'Mam prośbę o ocenę mojego planu.',
              'Mam prośbę o opinię.',
              'Mam prośbę o zaopiniowanie.',
              'Mam prośbe o zdanie.',
              'Mam prośbę o radę.',
              'Mam prośbę o wskazówkę.',
              'Mam prośbe o pomoc.',
              'Mam prośbę o podpowiedzenie.',
              'Proszę mi doradzić.',
              'Nie wiem czy to odpowiedni dział, ale niech będzie.',
              'Być może dla niektórych mój temat zabrzmi śmiesznie, ale chcę prosić o radę.',
              'Piszę po trochu, żeby się wygadać, a po trochu, licząc na rady, bo już nie wiem, co mam robić.',
              'Mam nadzieję że źle nie trafiłem.',
              'Zastanawiam się czy dobrze trafiłem.',
              'Już od jakiegoś czasu po cichaczu czytam sobie to forum.',
              
          ],
          entryData2: [
              'Posiadam ponad 20 lat.',
              'Posiadam ponad 30 lat.',
              'Posiadam ponad 40 lat.',
              'Posiadam ponad 50 lat.',
              'Posiadam ponad 60 lat.',
              'Mieszkam w mieście.',
              'Mieszkam na wsi.',
              'Mieszkam w Polsce.',
              'Mieszkam z rodzicami.',
              'Mieszkam za granicą.',
              'Mieszkam w bloku.',
              'Tam gdzie mieszkam jest mało ofert dla programistów.',
              'Zasiedziałem się w obecnej pracy 4 miesiące.',
              'Zasiedziałem się w obecnej pracy 2 lata.',
              'Zasiedziałem się w obecnej pracy 3 lata.',
              'Zasiedziałem się w obecnej pracy 4 lata.',
              'Długo zasiedziałem się w ostatniej firmie.',
          ],
          entryData3: [
            'Od zawsze interesowałem się komputerami.',
            'Pracowałem już w wielu miejscach.',
            'Dużo siedzę przed monitorem.',
            'Kiedyś liznąłem trochę programowania.',
            'Wydaje mi się że nie jestem głupi.',
            'Mam dużo czasu i determinacji.',
            'Lubię czytać książki.',
            'Jak byłem mały to zrobiłem jakiś program z poradnika.',
            'Słyszałem że każdy może zostać programistą.',
            'Chciałbym zapytać...',
            'Interesuję się programowaniem.',
            'Stwierdziłem że czysto techniczne rzeczy są dla mnie.',

        ],
          startDesireData: [
              'Mam zamiar',
              'Mam nadzieję',
              'Chcę',
              'Czy dam radę',
              'Czy jestem w stanie',
              'Chcę zdecydowanie',
              'Pragnę',
              'Mam apetyt',
              'Mam chrapkę',
              'Odczuwam potrzebę',
              'Postanowiłem że chcę',
              'Proszę nie gniewać się, chcę',
              'Proszę mi pomóc',
              'Proszę mi pomóc, chcę',
              'Jak najlepiej',
              'Jak',
              'Wydaje mi się że nie mam dużych wymagań aby',
              'Macie jakieś rady jak',
              'Myślę jak',
              'Nie jestem programistą ale chcę',
              'Tydzień temu postanowiłem'
          ],
          extendDesireData: [
              'przebranżowić się',
              'spełnić postanowienie',
              'aplikować',
              'zaprezentować się dobrze',
              'zmienić branżę',
              'zmienić zawód',
              'praktykować',
              'przysposobić się',
              'uciec',
              'zaprawić się',
              'przeszlifować się',
              'przeprojektować się',
              'przeorientować się',
              'zmienić zawód',
              'odmienić swój zawód',
              'zrobić projekt w jeden dzień',
              'zrobić projekt w tydzień',
              'zmienić branżę',
              'się zmotywować'
          ],
          currentOccupationData: [
            '',
            'od zera',
            'z absolwenta Ochrony Środowiska',
            'z audytora',
            'z dyrektora finansowego',
            'z frezera',
            'z humanisty',
            'z inspektora BHP',
            'z kierownika budowy',
            'z kierownika projektów',
            'z kontrolera jakości',
            'z księdza',
            'z księgowości',
            'z lekarza',
            'z managera',
            'z mechanika samochodowego',
            'z mechanika silników lotniczych',
            'z menadżera',
            'z menedżera',
            'z montera',
            'z motorniczego tramwaju',
            'z młodszego pracownika wsparcia produkcji',
            'z operatora manualnego',
            'z operatora maszyn CNC',
            'z pomocnika murarza',
            'z pracownika uniwersyteckiego',
            'z rzemieślnika',
            'z socjologa',
            'z spawacza',
            'z specjalisty do spraw rekrutacji',
            'z stolarza',
            'z szlifierza',
            'z własciciela firmy',
            'z zarządcy',
            'z ślusarza',
          ],
          targetOccupationData: [
            'na admina',
            'na analityka danych.',
            'na automatyka.',
            'na developera.',
            'na frontend developera.',
            'na game developera.',
            'na informatyka.',
            'na juniora programowania.',
            'na klepacza kodu.',
            'na kodera.',
            'na komputerowca.',
            'na mida.',
            'na młodszego programistę.',
            'na network programmera.',
            'na pracę w IT.',
            'na programatora.',
            'na programistę.',
            'na scrum mastera.',
            'na specjalistę cybersecurity.',
            'na testera.',
            'na web developera.',
            'na webdeva.',
            'na wordpress developera.',
            'w strone świata IT.',
            'w stronę IT.',
            'w web development',
            'na UX desingera',
          ],
          startSomethingData: [
            'Brakuje mi pomysłu czego mam się uczyć,',
            'Chcę pracować w IT,',
            'Czytam od jakiegoś czasu fora programistyczne,',
            'Do IT zawsze było mi blisko (od początku gimnazjum),',
            'Dopiero się uczę programowania,',
            'Jestem początkującym,',
            'Lubię szukać dziury w całym,',
            'Mam analityczny umysł,',
            'Poczułem, że to może być coś,',
            'Poczytałem trochę forum,',
            'Pomyślałem o rozwoju w branży IT,',
            'Posiadam PC,',
            'Siedzę w dokumentacji,',
            'Szukam IT inspiracji,',
            'Szukam firm, które rozwijają swój własny projekt,',
            'Szybko ogarnąłem podstawy,',
            'Ukończyłem nie te studia,',
            'Ukończyłem technikum informatyczne,',
            'Uwielbiam, pracę z cyframi,',
            'Zacząłem studia informatyczne,',
            'Zetknąłem się z programowaniem,',
            'Zrobiłem projekt,',
          ],
          extendSomethingData: [
            'angielski znam nie specjalnie',
            'chcę robić to co lubię',
            'czuję się dostatecznie technicznie na siłach',
            'czytam wymagania z ogłoszeń',
            'dużo pracuję z narzędziami do wizualizacji danych',
            'jestem bardzo zrelaksowany',
            'koniecznie chcę tworzyć oprogramowanie',
            'mam już coraz więcej pojęcia',
            'mam naprawdę dużo czasu',
            'mam styczność z kodem',
            'oglądałem kanały na youtube',
            'przede mną długa droga',
            'python mnie też inspiruje',
            'python mnie też przekonuje',
            'póki co wiem czego nie chce robić',
            'przerabiam tutoriale',
            'stworzyłem mały programik',
            'ogarnąłem walidację',
            'rozwiazuję zadania rekrutacyjne',
          ],
          endSomethingData: [
            'i chcę osiągnąć cel.',
            'i chcę pisać funkcjonalności.',
            'i chcę pracować zdalnie.',
            'i chcę się czuć spełniony.',
            'i chcę stworzyć bloga.',
            'i chcę uczyć się teori.',
            'i chcę zdobywać doświadczenie.',
            'i ciężko pracuję.',
            'i jestem asertywny',
            'i jestem komunikatywny',
            'i jestem staranny.',
            'i jestem w szoku.',
            'i jestem zaangażowany.',
            'i kupiłem sobie dodatkowy monitor.',
            'i powoli ogarniam.',
            'i sam złożyłem sobie kompa.',
            'i szlifuje umiejętności programistyczne.',
            'i ustanawiam sobie cel.',
            'oraz wiem co robi select *.',
            'w tej tematyce.',
          ],
          languageSelectionStartData: [
            'Chciałbym pracować w',
            'Klepie własne projekty w',
            'Mam wątpliwości, wybierając',
            'Może ktoś podpowie wybrałem',
            'Na start kariery wybrałem naukę fundamentów',
            'Na swój pierwszy język wybrałem',
            'Nie jestem strachliwy i wybrałem',
            'Po ciężkich namysłach wybrałem',
            'Przerabiam kurs programowania w',
            'Słyszałem że prawdziwa robota programistyczna jest tylko w',
            'Trochę mi się rozjaśniło w głowie i wybrałem',
            'Trochę znam i wybrałem',
            'Znalazlem kilka ofert pracy w',
            'Lubię szukać błędów w kodzie',
          ],
          languageData: [
              'C.',
              'C++.',
              'Cpp.',
              'C#.',
              'Java.',
              'JavaScript.',
              'JS.',
              'PHP.',
              'php.',
              'SQL.',
              'Turbo Pascal.',
              'Visual Basic.'
          ],
          languageSelectionEndData: [
              'Czy to dobry wybór?',
              'Czy to jeszcze długa droga przede mną?',
              'Czy to daje mi dużą szansę na wybicie?',
              'Czy to jest mile widziany język?',
              'Czy to jest bardzo dobra decyzja  w ciężkich czasach?',
              'Czy to dobre na start ?',
              'Czy to ma sens?',
              'Czy to przebranżowienie wyjdzie mi na dobre?',
              'Czy polecacie?',
              'Czy warto się tego uczyć?',
              'Czym to się wszystko różni?',
              'Czy ktoś już napisał w tym szachy?',
              'Co mi doradzicie w tym temacie?',
              'Jestem ciekaw Waszej opini.',
              'Czy czeka mnie jeszcze duzo pracy?',
          ],
      }

  },

  methods: {

      generatorHello() {
          return this.helloText = this.helloData[Math.floor(Math.random() * this.helloData.length)]
      },
      generatorEntry() {
          return this.entryText = this.entryData[Math.floor(Math.random() * this.entryData.length)]
      },
      generatorEntry2() {
          return this.entry2Text = this.entryData2[Math.floor(Math.random() * this.entryData2.length)]
      },
      generatorEntry3() {
        return this.entry3Text = this.entryData3[Math.floor(Math.random() * this.entryData3.length)]
    },
      generatorStartDesire() {
          return this.startDesireText = this.startDesireData[Math.floor(Math.random() * this.startDesireData.length)]
      },
      generatorExtendDesire() {
        return this.extendDesireText = this.extendDesireData[Math.floor(Math.random() * this.extendDesireData.length)]
      },
      generatorCurrentOccupation() {
          return this.currentOccupationText = this.currentOccupationData[Math.floor(Math.random() * this.currentOccupationData.length)]
      },
      generatorTargetOccupation() {
          return this.targetOccupationText = this.targetOccupationData[Math.floor(Math.random() * this.targetOccupationData.length)]
      },
      generatorStartSomething() {
          return this.startSomethingText = this.startSomethingData[Math.floor(Math.random() * this.startSomethingData.length)]
      },
      generatorExtendSomething() {
          return this.extendSomethingText = this.extendSomethingData[Math.floor(Math.random() * this.extendSomethingData.length)]
      },
      generatorEndSomething() {
          return this.endSomethingText = this.endSomethingData[Math.floor(Math.random() * this.endSomethingData.length)]
      },
      generatorLanguageSelectionStart() {
          return this.languageSelectionStartText = this.languageSelectionStartData[Math.floor(Math.random() * this.languageSelectionStartData.length)]
      },
      generatorLanguage() {
          return this.languageText = this.languageData[Math.floor(Math.random() * this.languageData.length)]
      },
      generatorLanguageSelectionEnd() {
          return this.languageSelectionEndText = this.languageSelectionEndData[Math.floor(Math.random() * this.languageSelectionEndData.length)]
      },
      generator() {
              this.generatorHello(),
              this.generatorEntry(),
              this.generatorEntry2(),
              this.generatorEntry3(),
              this.generatorStartDesire(),
              this.generatorExtendDesire(),
              this.generatorCurrentOccupation(),
              this.generatorTargetOccupation(),
              this.generatorStartSomething(),
              this.generatorExtendSomething(),
              this.generatorEndSomething(),
              this.generatorLanguageSelectionStart(),
              this.generatorLanguage(),
              this.generatorLanguageSelectionEnd()
      },

  },

  computed: {
      hello() {
          return this.helloText === '' ? this.generatorHello() : this.helloText
      },
      entry() {
          return this.entryText === '' ? this.generatorEntry() : this.entryText
      },
      entry2() {
          return this.entry2Text === '' ? this.generatorEntry2() : this.entry2Text
      },
      entry3() {
        return this.entry3Text === '' ? this.generatorEntry3() : this.entry3Text
    },
      startDesire() {
          return this.startDesireText === '' ? this.generatorStartDesire() : this.startDesireText
      },
      extendDesire() {
          return this.extendDesireText === '' ? this.generatorExtendDesire() : this.extendDesireText
      },
      currentOccupation() {
          return this.currentOccupationText === '' ? this.generatorCurrentOccupation() : this.currentOccupationText
      },
      targetOccupation() {
        return this.targetOccupationText === '' ? this.generatorTargetOccupation() : this.targetOccupationText
      },
      startSomething() {
        return this.startSomethingText === '' ? this.generatorStartSomething() : this.startSomethingText
      },
      extendSomething() {
        return this.extendSomethingText === '' ? this.generatorExtendSomething() : this.extendSomethingText
      },
      endSomething() {
        return this.endSomethingText === '' ? this.generatorEndSomething() : this.endSomethingText
      },
      languageSelectionStart() {
        return this.languageSelectionStartText === '' ? this.generatorLanguageSelectionStart() : this.languageSelectionStartText
      },
      language() {
        return this.languageText === '' ? this.generatorLanguage() : this.languageText
      },
      languageSelectionEnd() {
        return this.languageSelectionEndText === '' ? this.generatorLanguageSelectionEnd() : this.languageSelectionEndText
      }
    
  }

})