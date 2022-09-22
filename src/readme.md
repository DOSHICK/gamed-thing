# Структура файлов
  - Components 
    * Header (header сверху над всеми блоками)
    * Welcome (Привественный экран)
    * ChoosePerson (первый экран - выбор персонажа)
    * Fight (второй экран - бой)
    
  - img 
  - state
    * state.js (внутри находятся состояния и массивы)
  - style
    * base
      + _fonts.scss (подключение шрифтов)
      + _reset.scss (сброс стилей)
      + _stable.scss (стабильные стили)
    * style.scss (собирает весь ./base и компилирует style.css)
  - App.js
  - index.js

# Работа с информацией
### Генерация выбора персонажей (ChoosePerson)
    1. Данные лежат в scr/state/state.js
    2. В index.js импортируется {personsArray}
    3. Через props из index.js передаётся в App.js
    4. Через props из App.js передаётся в ChoosePerson.js