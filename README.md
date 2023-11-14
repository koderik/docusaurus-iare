Ladda ner hemsidan

```shell
git clone https://github.com/koderik/docusaurus-iare
cd docusaurus-iare
```

Hoppas du har npm och node nedladdat annars är du noob

Start hemsidan
```shell
npm install
npm run start
```

Lägg till förändringar *kan va bra att göra en fork innan*
```shell
git add *
git commit -m "Jag ändrade bla bla bla"
git push
```

# Lite tutorial för docusaurus å hemsidan
Basically så ändrar du saker under docs för att ändra texten på hemsidans "nämnder" i navbaren
Du ändrar under /src/pages för de andra navbar elementen
/src/pages/index.js är react filen för hemsidans startsida
under i18n finns allt för engelska varianten av sidan. den kan startas genom npm run start -- --locale en
under /src/components finns lite moduler som importeras i /pages/index.js
för att ändra bland annat navbaren och footern kan du kolla i docusaurus.config.js