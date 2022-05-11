/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[data-content]')

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach((tc) => {
      tc.classList.remove('filters__active')
    })
    target.classList.add('filters__active')

    tabs.forEach((t) => {
      t.classList.remove('filter-tab-active')
    })
    tab.classList.add('filter-tab-active')
  })
})

/*=============== DARK LIGHT THEME AND LANGUAGE(有bug)===============*/
const themeButton = document.getElementById('theme-button')
const langButton = document.getElementById('language-button')
const themeSetting = {
  dark: { icon: 'ri-sun-line', class: 'dark-theme' },
  light: { icon: 'ri-moon-line', class: 'light-theme' },
}
const langSetting = {
  en: { icon: 'ri-english-input', class: 'en' },
  cn: { icon: 'ri-emphasis-cn', class: 'zh-CN' },
}
const darkTheme = themeSetting['dark']['class']
const darkIcon = themeSetting['dark']['icon']

const englishLang = langSetting['cn']['class']
const englishIcon = langSetting['cn']['icon']

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme)
    ? darkTheme
    : themeSetting['light']['class']
const getCurrentIcon = () =>
  themeButton.classList.contains(darkIcon)
    ? themeSetting['dark']['icon']
    : themeSetting['light']['icon']

const getCurrentLanguage = () =>
  document.body.classList.contains(englishLang)
    ? langSetting['cn']['class']
    : langSetting['en']['class']
const getCurrentLanguageIcon = () =>
  langButton.classList.contains(englishIcon)
    ? langSetting['cn']['icon']
    : langSetting['en']['icon']

// Previously selected topic (if user selected)
const selectedTheme = sessionStorage.getItem('selected-theme')
const selectedIcon = sessionStorage.getItem('selected-icon')

const selectedLang = sessionStorage.getItem('selected-lang')
const selectedLangIcon = sessionStorage.getItem('selected-lang-icon')

// We obtain the current theme that the interface has by validating the dark-theme class

// We validate if the user previously chose a topic
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove']( darkTheme )
  themeButton.classList[ selectedIcon === darkTheme ? 'add' : 'remove' ](darkIcon)
}

if (selectedLang === 'en') {
  langButton.classList.remove( englishIcon)
}else{
  langButton.classList.add(selectedLangIcon)
}
document.documentElement.lang = selectedLang || 'zh-CN';

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(darkIcon)
  sessionStorage.setItem('selected-theme', getCurrentTheme())
  sessionStorage.setItem('selected-icon', getCurrentIcon())
})

langButton.addEventListener('click', () => {
  langButton.classList.toggle(englishIcon)

  sessionStorage.setItem('selected-lang', getCurrentLanguage())
  sessionStorage.setItem('selected-lang-icon', getCurrentLanguageIcon())
  document.documentElement.lang = selectedLang || 'zh-CN'

})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})

sr.reveal(`.profile__border`)
sr.reveal(`.profile__name`, { delay: 500 })
sr.reveal(`.profile__profession`, { delay: 600 })
sr.reveal(`.profile__social`, { delay: 700 })
sr.reveal(`.profile__info-group`, { interval: 100, delay: 700 })
sr.reveal(`.profile__buttons`, { delay: 800 })
sr.reveal(`.filters__content`, { delay: 900 })
sr.reveal(`.filters`, { delay: 1000 })
